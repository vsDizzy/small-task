import fs from 'node:fs/promises'
import path from 'path'

run()

async function run() {
  const items = (await fs.readdir('../root', { withFileTypes: true })).map(
    (d) => ({ type: d.isDirectory() ? 'dir' : 'file', name: d.name })
  )
  // console.log(items)

  const r = path.resolve('.', '../root/file1.txt')
  path.relative('.'.r)
}
