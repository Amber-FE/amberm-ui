// eslint-disable-next-line import/extensions
import { compileSite } from '../compiler/compile.js'

export async function dev() {
  await compileSite()
}
