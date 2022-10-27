# cell

### Install

```js
import { createApp } from 'vue'
import { Cell, CellGroup } from 'amberm'

const app = createApp()
app.use(Cell)
app.use(CellGroup)
```

### 基础用法

```js
<am-cell title="标题" label="元素" value="内容" />
<am-cell required title="标题" />
```

### 导航

可以通过 `url` 属性进行 URL 跳转，或通过 `to` 属性进行路由跳转。

```js
<am-cell title="标题"  to="/" is-link value="内容" />
<am-cell title="标题"  url="https://github.com/Amber-FE/amber-ui" is-link value="内容" />
```

### 插槽

```js
<am-cell is-link value="内容">
    <template #title>
     <span>标题</span>
     <am-button size="mini">
        666
    </am-button>
    </template>
</am-cell>
```

### 分组标题

```js
<am-cell-group title="分组1">
  <am-cell title="标题" label="元素" value="内容" />
  <am-cell required title="标题" />
</am-cell-group>
```

### 卡片

```js
<am-cell-group insert title="分组1">
  <am-cell title="标题" label="元素" value="内容" />
  <am-cell required title="标题" />
</am-cell-group>
```

## API

### Cell Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 左侧标题 | _number \| string_ | - |
| value | 右侧内容 | _number \| string_ | - |
| label | 标题下方的描述信息 | _string_ | - |
| size | 单元格大小，可选值为 `large` | _string_ | - |
| icon | 左侧图标名称或图片链接，等同于 Icon 组件的 [name 属性](#/zh-CN/icon#props) | _string_ | - |
| url | 点击后跳转的链接地址 | _string_ | - |
| to | 点击后跳转的目标路由对象，等同于 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | _string \| object_ | - |
| border | 是否显示内边框 | _boolean_ | `true` |
| replace | 是否在跳转时替换当前页面历史 | _boolean_ | `false` |
| clickable | 是否开启点击反馈 | _boolean_ | `null` |
| is-link | 是否展示右侧箭头并开启点击反馈 | _boolean_ | `false` |
| required | 是否显示表单必填星号 | _boolean_ | `false` |
| center | 是否使内容垂直居中 | _boolean_ | `false` |
| arrow-direction | 箭头方向，可选值为 `zuo` `up` `down` | _string_ | `you` |
| title-style | 左侧标题额外样式 | _string \| Array \| object_ | - |
| title-class | 左侧标题额外类名 | _string \| Array \| object_ | - |
| value-class | 右侧内容额外类名 | _string \| Array \| object_ | - |
| label-class | 描述信息额外类名 | _string \| Array \| object_ | - |

### Cell Slots

| 名称       | 说明                     |
| ---------- | ------------------------ |
| title      | 自定义左侧标题           |
| value      | 自定义右侧内容           |
| label      | 自定义标题下方的描述信息 |
| icon       | 自定义左侧图标           |
| right-icon | 自定义右侧图标           |
