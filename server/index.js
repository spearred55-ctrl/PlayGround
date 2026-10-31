import http from 'node:http'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { WebSocketServer, WebSocket } from 'ws'
import { Room } from './room.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const DEFAULT_STATIC = path.join(ROOT, 'dist')
const TICK_INTERVAL = 50
const SNAPSHOT_EVERY = 2
const ROOM_LINGER_MS = 60_000

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ico': 'image/x-icon',
}

function clampInt(value, min, max, fallback) {
  const n = Math.round(Number(value))
  return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : fallback
}

function cleanName(value) {
  return String(value || '').toUpperCase().replace(/[^A-Z0-9 _-]/g, '').slice(0, 14) || 'OPERATIVE'
}

function json(res, status, body) {
  const text = JSON.stringify(body)
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'content-length': Buffer.byteLength(text),
    'cache-control': 'no-store',
  })
  res.end(text)
}

async function serveStatic(req, res, staticDir) {
  const url = new URL(req.url || '/', 'http://localhost')
  let pathname = decodeURIComponent(url.pathname)
  if (pathname === '/') pathname = '/index.html'
  const resolved = path.resolve(staticDir, '.' + pathname)
  if (!resolved.startsWith(path.resolve(staticDir))) {
    res.writeHead(403)
    res.end('Forbidden')
    return
  }
  try {
    let stat = await fs.stat(resolved)
    let file = resolved
    if (stat.isDirectory()) {
      file = path.join(resolved, 'index.html')
      stat = await fs.stat(file)
    }
    const data = await fs.readFile(file)
    res.writeHead(200, {
      'content-type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream',
      'content-length': data.length,
      'cache-control': file.endsWith('index.html') ? 'no-cache' : 'public, max-age=31536000, immutable',
    })
    res.end(data)
  } catch {
    if (!path.extname(pathname)) {
      try {
        const data = await fs.readFile(path.join(staticDir, 'index.html'))
        res.writeHead(200, { 'content-type': MIME['.html'], 'cache-control': 'no-cache' })
        res.end(data)
        return
      } catch { /* fall through */ }
    }
    res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' })
    res.end('Not found. Run `npm run build` first.')
  }
}

export class Matchmaker {
  constructor({ seed = 1337, startDelay = 4 } = {}) {
    this.seed = seed
    this.startDelay = startDelay
    this.rooms = new Map()
    this.roomSeq = 0
  }

  _openRoom(mode, matchSize) {
    for (const room of this.rooms.values()) {
      if (!room.started && !room.finished && room.humanCount < room.matchSize) return room
    }
    const id = `room-${++this.roomSeq}`
    const room = new Room({
      id,
      mode,
      matchSize,
      seed: this.seed + this.roomSeq * 97,
      startDelay: this.startDelay,
    })
    room.clients = new Map()
    room.createdAt = Date.now()
    room.cleanupAt = 0
    this.rooms.set(id, room)
    return room
  }

  join(client, message = {}) {
    if (client.room) return { ok: false, reason: 'already_in_room' }
    const mode = ['solo', 'duo', 'squad', 'practice'].includes(message.mode) ? message.mode : 'solo'
    const matchSize = clampInt(message.matchSize, 2, 50, 25)
    const room = this._openRoom(mode, matchSize)
    const player = room.addHuman({ name: cleanName(message.name) })
    if (!player) return { ok: false, reason: 'room_full' }
    client.room = room
    client.playerId = player.id
    client.name = player.name
    room.clients.set(player.id, client)
    return { ok: true, room, player }
  }

  leave(client) {
    if (!client.room) return false
    const room = client.room
    const id = client.playerId
    room.clients?.delete(id)
    room.removeHuman(id)
    client.room = null
    client.playerId = null
    if (room.humanCount === 0 && !room.started) {
      this.rooms.delete(room.id)
    }
    return true
  }

  cleanup(now = Date.now()) {
    for (const [id, room] of this.rooms) {
      if (room.finished && !room.cleanupAt) room.cleanupAt = now + ROOM_LINGER_MS
      if (room.cleanupAt && now >= room.cleanupAt) {
        for (const client of room.clients?.values() || []) {
          client.send?.({ type: 'room_closed', room: id })
          client.room = null
          client.playerId = null
        }
        this.rooms.delete(id)
      }
    }
  }
}

export function createServer({ host = '0.0.0.0', staticDir = DEFAULT_STATIC, seed = 1337, startDelay = 4 } = {}) {
  const startedAt = Date.now()
  const matchmaker = new Matchmaker({ seed, startDelay })
  const wss = new WebSocketServer({ noServer: true, maxPayload: 32 * 1024 })
  let tickTimer = null
  let tickCount = 0

  const server = http.createServer(async (req, res) => {
    const url = new URL(req.url || '/', 'http://localhost')
    if (url.pathname === '/health') {
      json(res, 200, {
        ok: true,
        service: 'battle-world-authoritative',
        uptime: Math.round((Date.now() - startedAt) / 1000),
        rooms: matchmaker.rooms.size,
        players: [...matchmaker.rooms.values()].reduce((n, r) => n + r.humanCount, 0),
      })
      return
    }
    if (url.pathname === '/stats') {
      json(res, 200, {
        ok: true,
        tickRate: 1000 / TICK_INTERVAL,
        rooms: [...matchmaker.rooms.values()].map(r => ({
          id: r.id, mode: r.mode, started: r.started, finished: r.finished,
          humans: r.humanCount, bots: r.bots.length, alive: r.aliveCount,
          matchSize: r.matchSize, time: Math.round(r.time),
        })),
      })
      return
    }
    if (url.pathname === '/version') {
      json(res, 200, { name: 'BATTLE WORLD: ELITE SURVIVAL', protocol: 1, tickRate: 20 })
      return
    }
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      json(res, 405, { ok: false, error: 'method_not_allowed' })
      return
    }
    await serveStatic(req, res, staticDir)
  })

  server.on('upgrade', (req, socket, head) => {
    const url = new URL(req.url || '/', 'http://localhost')
    if (url.pathname !== '/ws') {
      socket.destroy()
      return
    }
    wss.handleUpgrade(req, socket, head, ws => wss.emit('connection', ws, req))
  })

  wss.on('connection', ws => {
    const client = {
      ws,
      room: null,
      playerId: null,
      name: null,
      msgWindow: 0,
      windowAt: Date.now(),
      send(message) {
        if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(message))
      },
    }
    client.send({
      type: 'hello',
      service: 'battle-world-authoritative',
      protocol: 1,
      tickRate: 20,
      message: 'Send {type:"join", name, mode, matchSize} to enter matchmaking.',
    })

    ws.on('message', raw => {
      const now = Date.now()
      if (now - client.windowAt > 1000) { client.windowAt = now; client.msgWindow = 0 }
      client.msgWindow++
      if (client.msgWindow > 140) return
      let message
      try { message = JSON.parse(String(raw)) } catch { return }
      if (!message || typeof message !== 'object') return
      switch (message.type) {
        case 'join': {
          const result = matchmaker.join(client, message)
          if (result.ok) {
            client.send({
              type: 'joined',
              room: result.room.id,
              playerId: result.player.id,
              mode: result.room.mode,
              matchSize: result.room.matchSize,
              startDelay: result.room.startDelay,
              tickRate: 20,
              world: {
                size: 1500,
                playRadius: 610,
                spawn: { x: result.player.pos.x, y: result.player.pos.y, z: result.player.pos.z },
              },
            })
          } else {
            client.send({ type: 'error', reason: result.reason })
          }
          break
        }
        case 'input':
          if (client.room) client.room.setInput(client.playerId, message.input || message)
          break
        case 'reload':
          if (client.room) client.room.setInput(client.playerId, { reload: true })
          break
        case 'leave':
          matchmaker.leave(client)
          client.send({ type: 'left' })
          break
        case 'ping':
          client.send({ type: 'pong', t: message.t ?? now, serverTime: now })
          break
        case 'chat': {
          if (!client.room) break
          const text = String(message.text || '').replace(/[<>&]/g, '').slice(0, 80)
          if (text) {
            for (const peer of client.room.clients?.values() || []) {
              peer.send({ type: 'chat', from: client.name, text })
            }
          }
          break
        }
        default:
          break
      }
    })

    ws.on('close', () => matchmaker.leave(client))
    ws.on('error', () => { /* close handler performs cleanup */ })
  })

  function tick() {
    tickCount++
    for (const room of matchmaker.rooms.values()) {
      room.update(TICK_INTERVAL / 1000)
      if (tickCount % SNAPSHOT_EVERY !== 0) continue
      const snapshot = room.snapshot()
      for (const client of room.clients?.values() || []) {
        client.send(snapshot)
      }
    }
    matchmaker.cleanup()
  }

  function start(port = 3000) {
    return new Promise((resolve, reject) => {
      server.once('error', reject)
      server.listen(port, host, () => {
        server.off('error', reject)
        if (!tickTimer) tickTimer = setInterval(tick, TICK_INTERVAL)
        const address = server.address()
        resolve(address)
      })
    })
  }

  async function stop() {
    if (tickTimer) { clearInterval(tickTimer); tickTimer = null }
    for (const client of wss.clients) {
      try { client.close(1001, 'server stopping') } catch { /* ignore */ }
    }
    await new Promise(resolve => wss.close(() => resolve()))
    await new Promise(resolve => server.close(() => resolve()))
  }

  return { server, wss, matchmaker, start, stop, tick }
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
if (isMain) {
  const port = clampInt(process.env.PORT, 1, 65535, 3000)
  const host = process.env.HOST || '0.0.0.0'
  const app = createServer({ host })
  app.start(port).then(address => {
    const shown = typeof address === 'object' ? `${address.address}:${address.port}` : String(address)
    console.log(`BATTLE WORLD authoritative server listening on http://${shown}`)
    console.log(`WebSocket: ws://${shown}/ws · health: http://${shown}/health`)
  }).catch(error => {
    console.error('Server failed to start:', error)
    process.exitCode = 1
  })
  const shutdown = async () => {
    console.log('\nShutting down…')
    await app.stop()
    process.exit(0)
  }
  process.on('SIGINT', shutdown)
  process.on('SIGTERM', shutdown)
}
