import { readFile } from 'fs/promises'

import { createServer } from 'vite'
import figlet from 'figlet'
import Printer from '@darkobits/lolcatjs'

// eslint-disable-next-line import/extensions
import { getViteConfigDev } from '../config/vite.site.js'

const { name, version } = JSON.parse(await readFile(new URL('../../package.json', import.meta.url)))

export async function compileSite() {
  console.log(`${name} dev site 启动中..`)
  const devConfig = getViteConfigDev()
  const server = await createServer(devConfig)
  const textColor = Printer.fromString(figlet.textSync(`${name} dev`))
  console.log(textColor)
  console.log(`当前 ${name}版本: ${version} \n`)
  await server.listen()
  server.printUrls()
}
