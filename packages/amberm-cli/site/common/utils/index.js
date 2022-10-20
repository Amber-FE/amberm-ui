const camelizeRE = /-(\w)/g
const pascalizeRE = /(\w)(\w*)/g
export function copyToClipboard(str) {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)

  const selection = document.getSelection()

  if (!selection) {
    return
  }

  const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false

  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)

  if (selected) {
    selection.removeAllRanges()
    selection.addRange(selected)
  }
}
export function camelize(str) {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase())
}

export function pascalize(str) {
  return camelize(str).replace(pascalizeRE, (_, c1, c2) => c1.toUpperCase() + c2)
}
export function normalizePath(path) {
  return path.replace(/\\/g, '/')
}
