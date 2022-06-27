# Divider 分割线

<h3 class="default">代码演示</h3>

#### 基本用法

```vue
<template>
  <amber-divider></amber-divider>
</template>
```

#### 展示文本

```vue
<template>
  <amber-divider>文本</amber-divider>
</template>
```

#### 内容位置

```vue
<template>
  <amber-divider content-position="left">文本</amber-divider>
  <amber-divider content-position="right">文本</amber-divider>
</template>
```

#### 虚线

```vue
<template>
  <amber-divider dashed>文本</amber-divider>
</template>
```

#### 垂直分割线

```vue
<template>
  <section>
    文本
    <amber-divider direction="vertical"></amber-divider>
    文本
    <amber-divider direction="vertical"></amber-divider>
    文本
  </section>
</template>
```

<h3 class="default">API</h3>

#### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---  | --- |  ---    | --- |
| contentPosition | 内容位置 | String | `left`、`center`、`right` | `center` |
| dashed | 是否展示虚线 | Boolean | - | `false` |
| direction | 分割线水平或垂直类型 | String | `horizontal`、`vertical` | `horizontal` |
