# cell 单元格

<h3 class="default">代码演示</h3>

#### 基本用法
```vue
<template>
  <amber-cell title="我是标题" desc="描述文字"></amber-cell>
  <amber-cell title="我是标题" sub-title="副标题描述" desc="描述文字"></amber-cell>
  <amber-cell title="点击测试" @click="testClick"></amber-cell>
  <amber-cell title="圆角设置 0" round-radius="0"></amber-cell>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const methods = {
      testClick() {
        console.log('click')
      }
    }

    return {
      ...methods
    }
  }
})
</script>
```

#### 直接使用插槽(slot)

```vue
<template>
  <amber-cell title="我是标题" desc="描述文字">
    <div>自定义内容</div>
  </amber-cell>
</template>
```

#### 链接 | 分组用法
```vue
<template>
  <amber-cell-ground>
    <amber-cell title="链接" is-link></amber-cell>
    <amber-cell
      is-link
      title="URL 跳转"
      desc="https://www.google.com.hk/"
      url="https://www.google.com.hk/"
    ></amber-cell>
    <amber-cell is-link title="路由跳转'/'" to="/"></amber-cell>
  </amber-cell-ground>
</template>
```

#### 自定义左侧Icon区域
```vue
<template>
  <amber-cell title="图片">
    <template v-slot:icon>
      <amber-icon name="yonghu" size="16"></amber-icon>
    </template>
  </amber-cell>
</template>
```

#### 自定义右侧箭头区域
```vue
<template>
  <amber-cell title="图片">
    <template v-slot:link>
      <amber-icon name="shouqi" size="16"></amber-icon>
    </template>
  </amber-cell>
</template>
```

#### 只展示desc,可通过desc-text-align调整位置
```vue
<template>
  <amber-cell desc-text-align="left" desc="描述文字"></amber-cell>
</template>
```

<h3 class="default">API</h3>

#### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---  | --- |  ---    | --- |
| title | 标题名称 | String | - | - |
| subTitle | 左侧副标题 | String | - | - |
| desc | 描述文本 | String | - | - |
| descTextAlign | 描述文本对齐方式 | String | - | `right` |
| isLink | 是否展示右侧箭头并开启点击反馈 | Boolean | - | `false` |
| roundRadius | 单元格圆角 | String\|Number | - | - |
| to | 点击后跳转的目标路由对象,同 vue-router 的 to 属性 属性 | String | - | - |
| url | 点击后跳转的链接地址 | String | - | - |

#### Event

| 事件名 | 说明 | 回调参数 |
| --- | ---  | --- |
| click | 点击单元格触发 | event: Event |

#### Slots
| 事件名 | 说明 |
| --- | ---  |
| default | 自定义区域 |
| icon | 自定义左侧icon区域 |
| link | 自定义右侧link区域 |
