## tabbar

### Install

```js
import { createApp } from 'vue'
import { tabbar, tabbarItem } from 'amberm'

const app = createApp()
app.use(tabbar)
app.use(tabbarItem)
```

### 基本用法

```js
<am-tabbar v-model="activeName" @change="change">
      <am-tabbar-item icon="amberm-desktop" title="首页" name="首页" />
      <am-tabbar-item icon="amberm-desktop" title="我的" name="我的" />
      <am-tabbar-item icon="amberm-desktop" title="商城" name="商城" />
      <am-tabbar-item icon="amberm-desktop" title="分类" name="分类" />
      <am-tabbar-item icon="amberm-desktop" title="购物车" name="购物车" />
    </am-tabbar>
```

### 自定义图标

```js

<am-tabbar v-model="activeName"  @change="change">
    <am-tabbar-item name="首页">
      <template #icon="props">
        <am-icon size="26" :name="props.isActive?'amberm-package':'amberm-desktop'" />
      </template>
    </am-tabbar-item>
    <am-tabbar-item icon="amberm-desktop" name="我的" />
    <am-tabbar-item icon="amberm-desktop" name="商城" />
    <am-tabbar-item icon="amberm-desktop" name="分类" />
    <am-tabbar-item icon="amberm-desktop" name="购物车" />
  </am-tabbar>
```

### 自定义颜色

```js
<am-tabbar v-model="activeName" in-active-color="green" active-color="red" @change="change">
    <am-tabbar-item name="首页">
      <template #icon="props">
        <am-icon size="26" :name="props.isActive?'amberm-package':'amberm-desktop'" />
      </template>
    </am-tabbar-item>
    <am-tabbar-item icon="amberm-desktop"  name="我的" />
    <am-tabbar-item icon="amberm-desktop" name="商城" />
    <am-tabbar-item icon="amberm-desktop" name="分类" />
    <am-tabbar-item icon="amberm-desktop" name="购物车" />
  </am-tabbar>
```

## API

### tabbar

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前选中标签的名称 | _string,number_ | - |
| fixed | 是否固定在底部 | _boolean_ | true |
| z-index | 元素的z-index | _number_ | 1 |
| active-color | 选中的颜色 | _string_ | rgb(25, 137, 250) |
| in-active-color | 没有选中的颜色 | _string_ | rgb(125, 126, 128) |

### tabbar Event

| 事件名 | 说明 | 回调参数 |
| change | 切换标签时触发 | name |

### tabbarItem


| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标签的名称，匹配标识符 | _stirng_ | required |
| icon | 图标名称或图片链接，等同于 Icon 组件的 name 属性 | _string_ | - |
| url | 点击后跳转的链接地址 | _string_ | - |
| to | 点击后跳转的目标路由对象，等同于 vue-router 的 to 属性 | _string \| object_ |
| replace | 是否在跳转时替换当前页面历史 | _boolean_ | false |

