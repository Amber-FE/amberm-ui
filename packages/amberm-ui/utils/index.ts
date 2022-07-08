// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { App as Application } from 'vue'

// eslint-disable-next-line import/no-mutable-exports
export let VueInstance: Application

export function useNameSpace(name: string) {
  return `am-${name}`
}

export const setVueInstance = (instance: Application) => {
  VueInstance = instance
}
