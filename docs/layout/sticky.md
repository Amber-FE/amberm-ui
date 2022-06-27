# Sticky 粘性布局

<h3 class="default">代码演示</h3>

#### 基础用法

```vue
<template>
  <amber-sticky :top="57">
    <amber-button type="primary">吸顶按钮</amber-button>
  </amber-sticky>
</template>
```

#### 吸顶距离
```vue
<template>
  <amber-sticky :top="120">
    <amber-button type="danger">吸顶距离120px</amber-button>
  </amber-sticky>
</template>
```

#### 指定容器
```vue
<template>
  <div class="sticky-container" ref="container">
    <amber-sticky :top="100" :container="container">
      <amber-button type="success">指定容器</amber-button>
    </amber-sticky>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const container = ref(null)

    return {
      container
    }
  }
})
</script>
```

#### 吸底距离
```vue
<template>
  <amber-sticky :bottom="150" position="bottom">
    <amber-button type="warning">吸底距离</amber-button>
  </amber-sticky>
</template>
```

<h3 class="default">API</h3>

#### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---  | --- |  ---    | --- |
| bottom | 吸底距离 | Number | - | `0` |
| container | 容器的 HTML 节点, 在小程序环境下需要同时指定 id | Element | - |  |
| position | 吸附位置 | String | `top`、`bottom` | `top` |
| top | 吸顶位置 | Number | - | `0` |
| z-index | 吸附时的层级 | Number | - | `2000` |
