import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const dirName = dirname(fileURLToPath(import.meta.url))

export const SITE_SRC_DIR = join(dirName, '..', '..', 'site')

export const SITE_OUTPUT_DIR = join(dirName, '..', '..', '..', '..', 'docs')

export const DEV_SERVER = {
  port: 8099,
  host: '0.0.0.0',
  cors: true
}
