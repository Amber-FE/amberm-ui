import { readFile } from 'fs/promises'

import { createServer } from 'vite'
import figlet from 'figlet'
import Printer from '@darkobits/lolcatjs'

import { getViteConfigDev } from '../config/vite.site.js'

const { name, version } = JSON.parse(await readFile(new URL('../../package.json', import.meta.url)))

export async function compileSite() {
  const devConfig = getViteConfigDev()
  const server = await createServer(devConfig)
  const textColor = Printer.fromString(figlet.textSync(`${name} dev`))
  console.log(textColor)
  console.log(`  current version: ${version} \n`)
  await server.listen()
  server.printUrls()
}
// import path from 'path'

// import uslug from 'uslug'
