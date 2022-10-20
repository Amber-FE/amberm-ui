/* eslint-disable no-underscore-dangle */
import { existsSync } from 'fs'
import { pathToFileURL } from 'url'
import { join, dirname, isAbsolute } from 'path'

function findRootDir(dir) {
  if (existsSync(join(dir, 'amberm.desktop.mjs'))) {
    return dir
  }

  const parentDir = dirname(dir)
  if (dir === parentDir) {
    return dir
  }

  return findRootDir(parentDir)
}

// Root paths
export const CWD = process.cwd()
export const ROOT = findRootDir(CWD)
export const AMBER_DESKTOP_FILE = join(ROOT, 'amberm.desktop.mjs')
export const DOCS_DIR = join(ROOT, 'docs')
async function getAmbermConfigAsync() {
  try {
    // https://github.com/nodejs/node/issues/31710
    // absolute file paths don't work on Windows
    return (await import(pathToFileURL(AMBER_DESKTOP_FILE).href)).default
  } catch (err) {
    return {}
  }
}
const ambermConfig = await getAmbermConfigAsync()
export function getAmbermConfig() {
  return ambermConfig
}
function getSrcDir() {
  const ambermconfig = getAmbermConfig()
  const srcDir = ambermconfig.build?.srcDir
  if (srcDir) {
    if (isAbsolute(srcDir)) {
      return srcDir
    }

    return join(ROOT, srcDir)
  }

  return join(ROOT, 'components')
}
export const SRC_DIR = getSrcDir()
