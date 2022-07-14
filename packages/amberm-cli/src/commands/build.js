import { build as _build } from 'vite'

// eslint-disable-next-line import/extensions
import { getViteConfigBuild } from '../config/vite.site.js'

export async function build() {
  const buildConfig = getViteConfigBuild()
  await _build(buildConfig)
  console.log('打包完成!')
}
