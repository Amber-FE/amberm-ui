# Icon 图标

<h3 class="default">代码演示</h3>

#### 基础用法

Icon的name属性支持传入图标名称或图标类名

```vue
<template>
  <amber-icon name="close"></amber-icon>
</template>
```

#### 图标大小

Icon的size属性支持修改图标大小

```vue
<template>
  <amber-icon name="close" size="28px"></amber-icon>
</template>
```

#### 图标颜色

Icon的color属性支持修改图标颜色

```vue
<template>
  <amber-icon name="close" color="red"></amber-icon>
</template>
```

<h3 class="default">API</h3>

#### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---  | --- |  ---    | --- |
| name(required) | 图标名称或图标类名 | String | - | - |
| color | 图标颜色 | String | - | `#314659` |
| size | 图标大小 | String\|Number | - | `20px` |

#### Event

| 事件名 | 说明 | 回调参数 |
| --- | ---  | --- |
| click | 点击图标时触发 | event: Event |
