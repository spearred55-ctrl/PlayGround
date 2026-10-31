import test from 'node:test'
import assert from 'node:assert/strict'
import { Room, PHASES } from '../server/room.js'
import { createServer } from '../server/index.js'
import { weaponById } from '../src/game/weapons.js'
import { getHeight } from '../src/world/terrain.js'
import { WebSocket } from 'ws'

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function connect(url, timeout = 4000) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(url)
    const queue = []
    const waiters = []
    const timer = setTimeout(() => reject(new Error('timed out opening socket')), timeout)
    ws.on('message', raw => {
      let message
      try { message = JSON.parse(String(raw)) } catch { return }
      const index = waiters.findIndex(w => w.type === message.type)
      if (index >= 0) {
        const waiter = waiters.splice(index, 1)[0]
        clearTimeout(waiter.timer)
        waiter.resolve(message)
      } else {
        queue.push(message)
      }
    })
    ws.once('open', () => {
      clearTimeout(timer)
      resolve({
        ws,
        next(type, waitMs = timeout) {
          const index = queue.findIndex(m => m.type === type)
          if (index >= 0) return Promise.resolve(queue.splice(index, 1)[0])
          return new Promise((res, rej) => {
            const waiter = {
              type,
              resolve: res,
              timer: setTimeout(() => {
                const i = waiters.indexOf(waiter)
                if (i >= 0) waiters.splice(i, 1)
                rej(new Error(`timed out waiting for ${type}`))
              }, waitMs),
            }
            waiters.push(waiter)
          })
        },
        close() { try { ws.close() } catch { /* ignore */ } },
      })
    })
    ws.once('error', reject)
  })
}

test('room validates shots on the server and enforces fire rate', () => {
  const room = new Room({ id: 'test-combat', mode: 'solo', matchSize: 2, startDelay: 0 })
  const alpha = room.addHuman({ name: 'ALPHA' })
  const bravo = room.addHuman({ name: 'BRAVO' })
  assert.ok(alpha && bravo)
  assert.notEqual(alpha.team, bravo.team)
  room.startMatch()
  assert.equal(room.started, true)
  assert.equal(room.bots.length, 0)

  // Keep the test above the height map so terrain cannot occlude the shot.
  alpha.pos = { x: 0, y: 200, z: 0 }
  bravo.pos = { x: 0, y: 200, z: 10 }
  alpha.yaw = 0
  alpha.pitch = 0
  const def = weaponById('ps_sidekick')
  const first = room._resolveShot(alpha, def)
  assert.equal(first.hit, true)
  assert.equal(first.target.id, bravo.id)
  assert.ok(bravo.health < 100)
  const healthAfterFirst = bravo.health

  // A second call through the combat gate must be rejected by the cooldown.
  alpha.fireCooldown = 60 / def.rpm
  room._updateCombat(alpha, 0.05, true)
  assert.equal(bravo.health, healthAfterFirst)

  // Client damage is never accepted: only intents are stored.
  room.setInput(alpha.id, { yaw: 0, pitch: 0, fire: true, damage: 9999, health: 9999 })
  assert.equal(alpha.health, 100)
  assert.equal(bravo.health, healthAfterFirst)
})

test('room clamps hostile input and resolves zone damage', () => {
  const room = new Room({ id: 'test-zone', mode: 'solo', matchSize: 2, startDelay: 0 })
  const alpha = room.addHuman({ name: 'ALPHA' })
  room.startMatch()
  room.setInput(alpha.id, { moveX: 99, moveZ: -99, yaw: Number.POSITIVE_INFINITY, pitch: 99, sprint: true, jump: true })
  assert.equal(alpha.input.moveX, 1)
  assert.equal(alpha.input.moveZ, -1)
  assert.equal(alpha.pitch, 1.25)

  alpha.pos = { x: 500, y: getHeight(500, 0), z: 0 }
  alpha.health = 100
  room.zone.radius = 10
  room.zone.center = { x: 0, z: 0 }
  room.zone.timer = 999
  room.zoneTick = 0
  room._updateZone(1.01)
  assert.equal(alpha.health, 100 - PHASES[0].dps)
})

test('dedicated server accepts a client, starts a match and streams snapshots', async t => {
  const app = createServer({ startDelay: 0.25, seed: 42 })
  const address = await app.start(0)
  t.after(async () => { await app.stop() })
  const base = `127.0.0.1:${address.port}`
  const client = await connect(`ws://${base}/ws`)
  const ws = client.ws
  t.after(() => client.close())

  const hello = await client.next('hello')
  assert.equal(hello.protocol, 1)
  assert.equal(hello.tickRate, 20)

  ws.send(JSON.stringify({ type: 'join', name: 'TEST-01', mode: 'solo', matchSize: 6 }))
  const joined = await client.next('joined')
  assert.match(joined.room, /^room-/)
  assert.ok(joined.playerId)

  const firstSnapshot = await client.next('snapshot')
  assert.equal(firstSnapshot.type, 'snapshot')
  assert.equal(firstSnapshot.matchSize, 6)

  const started = await (async () => {
    for (let i = 0; i < 40; i++) {
      const snap = await client.next('snapshot')
      if (snap.started) return snap
    }
    throw new Error('match did not start')
  })()
  assert.equal(started.started, true)
  assert.ok(started.entities.length >= 2)

  const me = started.entities.find(e => e.id === joined.playerId)
  assert.ok(me)
  const startX = me.x, startZ = me.z
  ws.send(JSON.stringify({
    type: 'input', seq: 1, yaw: 0, pitch: 0,
    input: { moveX: 0, moveZ: 1, sprint: true, fire: false },
  }))
  await wait(700)
  const movedSnap = await client.next('snapshot')
  const moved = movedSnap.entities.find(e => e.id === joined.playerId)
  assert.ok(moved)
  assert.ok(Math.hypot(moved.x - startX, moved.z - startZ) > 0.4)

  const health = await fetch(`http://${base}/health`).then(r => r.json())
  assert.equal(health.ok, true)
  assert.ok(health.players >= 1)
  const stats = await fetch(`http://${base}/stats`).then(r => r.json())
  assert.equal(stats.ok, true)
  assert.ok(stats.rooms.length >= 1)
})
