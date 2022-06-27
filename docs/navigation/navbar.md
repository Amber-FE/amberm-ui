# Navbar 导航栏

<h3 class="default">代码演示</h3>

#### 基本用法

```vue
<template>
  <amber-navbar
    left-arrow
    title="标题"
    left-text="返回"
    right-text="按钮"
    @click-left="onClickLeft"
    @click-right="onClickRight"
    @click-title="onClickTitle"
  ></amber-navbar>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const methods = {
      onClickLeft() {
        console.log('click-left')
      },
      onClickTitle() {
        console.log('click-title')
      },
      onClickRight() {
        console.log('click-right')
      }
    }

    return {
      ...methods
    }
  }
})
</script>
```

#### 高级用法

```vue
<template>
  <amber-navbar left-arrow title="标题" left-text="返回">
    <template v-slot:rightIcon>
      <amber-icon name="icon-xiaoxi"></amber-icon>
    </template>
  </amber-navbar>
  <amber-navbar title="标题" left-text="返回" right-text="按钮">
    <template v-slot:leftIcon>
      <amber-icon name="icon-xiaoxi"></amber-icon>
    </template>
  </amber-navbar>
</template>
```

<h3 class="default">API</h3>

#### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---  | --- |  ---    | --- |
| leftText | 左侧文案 | String | - | - |
| leftArrow | 是否显示左侧箭头 | Boolean | - | `false` |
| rightText | 右侧文案 | String | - | - |
| title | 标题 | String | - | - |

#### Slot
| 名称 | 说明 |
| --- | ---  |
| leftIcon | 自定义左侧图标 |
| rightIcon | 自定义右侧区域内容 |

#### Event

| 事件名 | 说明 | 回调参数 |
| --- | ---  | --- |
| click-left | 点击左侧按钮触发 | event: Event |
| click-right | 点击右侧按钮触发 | event: Event |
| click-title | 点击标题按钮触发 | event: Event |
