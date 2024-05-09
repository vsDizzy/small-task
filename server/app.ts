import { createServer } from 'node:http'
import config from './config.json'
import { listFiles } from './list-files'

const server = createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')

  try {
    const dir = req.url.replace(/^\//, '')
    const files = await listFiles(dir)

    const json = JSON.stringify(files, undefined, 2)
    res.setHeader('Content-Type', 'application/json')
    res.end(json)
  } catch (e) {
    console.error(e)

    res.statusCode = 400
    res.end(e.message)
  }
})

server.listen(config.port, () => {
  console.log(`listening on port ${config.port}..`)
})
