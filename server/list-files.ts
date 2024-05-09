import { existsSync } from 'node:fs'
import { lstat, readdir } from 'node:fs/promises'
import { join } from 'node:path'
import config from './config.json'

export async function listFiles(dir: string) {
  if (/\.{2}/.test(dir)) {
    throw new Error('Going parent directory is not allowed.')
  }

  const path = join(config.root, dir)
  if (!existsSync(path)) {
    throw new Error(`Path ${path} doesn't exist.`)
  }

  if (!(await lstat(path)).isDirectory()) {
    throw new Error(`Path ${path} is not a directory.`)
  }

  return (await readdir(path, { withFileTypes: true })).map((x) => ({
    type: x.isDirectory() ? 'dir' : 'file',
    name: x.name,
  }))
}
