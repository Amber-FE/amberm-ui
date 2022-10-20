// 导入读取文件夹和读取文件的函数
import fs from 'fs'

// 存储所有icon文件名称
const iconNames: string[] = []

const svgTitle = /<svg([^>+].*?)>/ // 匹配svg开头、svg结尾的标签
const clearHeightWidth = /(width|height)="([^>+].*?)"/g
const hasViewBox = /(viewBox="[^>+].*?")/g
const clearReturn = /(\r)|()/g
const clearFill = /(fill="[^>+].*?")/g

function findSvgFile(dir: string, prefix = 'amberm'): string[] {
  const svgRes: string[] = [] // 一个目录下所有的svg文件资源

  // 指定目录下所有文件名称的数组对象
  const dirents = fs.readdirSync(dir, {
    withFileTypes: true
  })

  for (const dirent of dirents) {
    // 替换掉.svg文件后缀,然后存入预设的图标名称到数组内
    iconNames.push(`${prefix}-${dirent.name.replace('.svg', '')}`)
    // 检查对象是否为文件夹
    if (dirent.isDirectory()) {
      svgRes.push(...findSvgFile(`${dir + dirent.name}/`))
    } else {
      // 读取svg文件内容,并对内容进行处理,组装为一个symbol元素,该元素的id属性是文件名称
      const svg = fs
        .readFileSync(`${dir}/${dirent.name}`, { encoding: 'binary' })
        .toString()
        .replace(clearReturn, '')
        .replace(clearFill, 'fill=""')
        .replace(svgTitle, ($1, $2) => {
          let width = 0
          let height = 0
          let content = $2.replace(clearHeightWidth, (s1: string, s2: string, s3: number) => {
            if (s2 === 'width') {
              width = s3
            } else if (s2 === 'height') {
              height = s3
            }
            return ''
          })
          if (!hasViewBox.test($2)) {
            content += `viewBox="0 0 ${width}" ${height}`
          }
          return `<symbol id="${prefix}-${dirent.name.replace('.svg', '')}" ${content}>`
        })
        .replace('</svg>', '</symbol>')

      svgRes.push(svg)
    }
  }

  return svgRes
}

const svgBuilder = (path: string, prefix = 'amberm') => {
  if (path === '') {
    return
  }

  // 使用以上定义的查找svg函数,获得所有的.svg文件
  const res = findSvgFile(path, prefix)
  return {
    name: 'svg-transform',
    transformIndexHtml(html: string) {
      return html.replace(
        '<body>',
        `<body>
        <svg id="amberm-icon" data-icon-name="${iconNames.join(
          ','
        )}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0">
      ${res.join('')}
      </svg>
        `
      )
    }
  }
}

export { svgBuilder }
