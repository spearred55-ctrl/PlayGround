import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

const root = path.resolve(import.meta.dirname, '..')
const isWindows = process.platform === 'win32'

function run(command, args, options = {}) {
  console.log(`\n$ ${command} ${args.join(' ')}`)
  const result = spawnSync(command, args, {
    cwd: root,
    stdio: 'inherit',
    env: { ...process.env, ...options.env },
    shell: isWindows,
  })
  if (result.status !== 0) {
    throw new Error(`${command} exited with code ${result.status}`)
  }
}

function javaMajor(home) {
  const exe = path.join(home, 'bin', isWindows ? 'java.exe' : 'java')
  if (!fs.existsSync(exe)) return 0
  const result = spawnSync(exe, ['-version'], { encoding: 'utf8' })
  const text = `${result.stderr || ''}${result.stdout || ''}`
  const match = text.match(/version "(\d+)/)
  return match ? Number(match[1]) : 0
}

function findJava21() {
  const candidates = [
    process.env.JAVA_HOME_21_X64,
    process.env.JAVA_HOME,
    '/usr/lib/jvm/temurin-21-jdk-amd64',
    '/usr/lib/jvm/java-21-openjdk-amd64',
    '/Library/Java/JavaVirtualMachines/temurin-21.jdk/Contents/Home',
  ].filter(Boolean)
  for (const home of candidates) {
    if (javaMajor(home) >= 21) return home
  }
  return null
}

const javaHome = findJava21()
if (javaHome) console.log(`Using JDK 21 at ${javaHome}`)
else console.warn('Warning: no JDK 21 found. Capacitor 8 Android builds need JDK 21.')

run(isWindows ? 'npm.cmd' : 'npm', ['run', 'build'])
run(isWindows ? 'npx.cmd' : 'npx', ['cap', 'sync', 'android'])

const gradle = isWindows ? 'gradlew.bat' : './gradlew'
const gradleResult = spawnSync(gradle, ['assembleDebug', '--no-daemon'], {
  cwd: path.join(root, 'android'),
  stdio: 'inherit',
  shell: isWindows,
  env: { ...process.env, ...(javaHome ? { JAVA_HOME: javaHome } : {}) },
})
if (gradleResult.status !== 0) {
  throw new Error(`Gradle exited with code ${gradleResult.status}`)
}

const apk = path.join(root, 'android', 'app', 'build', 'outputs', 'apk', 'debug', 'app-debug.apk')
if (!fs.existsSync(apk)) throw new Error('Gradle finished but app-debug.apk was not produced.')
const releaseDir = path.join(root, 'release')
fs.mkdirSync(releaseDir, { recursive: true })
const target = path.join(releaseDir, 'BATTLE-WORLD-ELITE-SURVIVAL-debug.apk')
fs.copyFileSync(apk, target)
const bytes = fs.readFileSync(target)
const sha = crypto.createHash('sha256').update(bytes).digest('hex')
console.log(`\nAPK ready: ${target}`)
console.log(`Size: ${(bytes.length / 1024 / 1024).toFixed(2)} MB`)
console.log(`SHA-256: ${sha}`)
