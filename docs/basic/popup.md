# Popup 弹出层

<h3 class="default">代码演示</h3>

#### 基础用法

visible 控制显示/隐藏
```vue
<template>
  <amber-button @click="showBasic = true">展示弹出层</amber-button>
  <amber-popup v-model:visiable="showBasic">展示弹出层</amber-popup>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const data = {
      showBasic: false,
      position: 'bottom'
    }

    const state = reactive(data)

    return {
      ...toRefs(state)
    }
  }
})
</script>
```

#### 弹出位置

```vue
<template>
  <amber-button @click="showLeft = true">左侧弹出</amber-button>
  <amber-button @click="showRight = true">右侧弹出</amber-button>
  <amber-button @click="showTop = true">顶部弹出</amber-button>
  <amber-button @click="showBottom = true">底部弹出</amber-button>
  <amber-popup position="left" v-model:visiable="showLeft">左侧弹出</amber-popup>
  <amber-popup position="right" v-model:visiable="showRight">右侧弹出</amber-popup>
  <amber-popup position="top" v-model:visiable="showTop">顶部弹出</amber-popup>
  <amber-popup position="bottom" v-model:visiable="showBottom">底部弹出</amber-popup>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const data = {
      showLeft: false,
      showRight: false,
      showTop: false,
      showBottom: false
    }

    const state = reactive(data)

    return {
      ...toRefs(state)
    }
  }
})
</script>
```

#### 关闭图标

```vue
<template>
  <amber-button @click="showIcon = true">关闭图标</amber-button>
  <amber-button @click="customIcon = true">自定义图标</amber-button>
  <amber-popup closeable position="bottom" v-model:visiable="showIcon"></amber-popup>
  <amber-popup
    close-icon="error"
    closeable
    position="bottom"
    v-model:visiable="customIcon"
  ></amber-popup>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const data = {
      showIcon: false,
      customIcon: false,
    }

    const state = reactive(data)

    return {
      ...toRefs(state)
    }
  }
})
</script>
```

#### 圆角弹窗

```vue
<template>
  <amber-button @click="showRound = true">圆角弹窗</amber-button>
  <amber-popup round position="bottom" v-model:visiable="showRound"></amber-popup>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const data = {
      showRound: false
    }

    const state = reactive(data)

    return {
      ...toRefs(state)
    }
  }
})
</script>
```

<h3 class="default">API</h3>

#### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---  | --- |  ---    | --- |
| v-model:visible | 当前组件是否显示 | Boolean | - | `false` |
| closeable | 是否显示关闭按钮 | Boolean | - | `false` |
| closeIcon | 关闭图标 | String | - | `close` |
| position | 弹窗显示位置 | String | `left`、`right`、`top`、`bottom`、`center` | `center` |
| round | 是否显示圆角 | Boolean | - | `false` |
| zIndex | 弹窗层级 | Number | - | `1000` |

#### Event

| 事件名 | 说明 | 回调参数 |
| --- | ---  | --- |
| close | 关闭弹出层时触发 | event: Event |
| closed | 遮罩层关闭动画结束时触发 | event: Event |
| click-overlay | 点击遮罩层触发 | event: Event |
