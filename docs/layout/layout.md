# Layout 布局

<h3 class="default">代码演示</h3>

#### 基础用法

```vue
<template>
  <amber-row>
    <amber-col :span="12">col-12</amber-col>
    <amber-col :span="12">col-12</amber-col>
  </amber-row>
  <amber-row>
    <amber-col :span="8">col-8</amber-col>
    <amber-col :span="8">col-8</amber-col>
    <amber-col :span="8">col-8</amber-col>
  </amber-row>
  <amber-row>
    <amber-col :span="6">col-6</amber-col>
    <amber-col :span="6">col-6</amber-col>
    <amber-col :span="6">col-6</amber-col>
    <amber-col :span="6">col-6</amber-col>
  </amber-row>
</template>
```

#### 对齐
```vue
<template>
  <amber-row justify="center" align="top">
    <amber-col :span="4">col-4</amber-col>
    <amber-col :span="4">col-4</amber-col>
    <amber-col :span="4">col-4</amber-col>
    <amber-col :span="4">col-4</amber-col>
  </amber-row>
  <amber-row justify="space-around" align="middle">
    <amber-col :span="4">col-4</amber-col>
    <amber-col :span="4">col-4</amber-col>
    <amber-col :span="4">col-4</amber-col>
    <amber-col :span="4">col-4</amber-col>
  </amber-row>
  <amber-row justify="space-between" align="bottom">
    <amber-col :span="4">col-4</amber-col>
    <amber-col :span="4">col-4</amber-col>
    <amber-col :span="4">col-4</amber-col>
    <amber-col :span="4">col-4</amber-col>
  </amber-row>
</template>
```

#### 间隔
```vue
<template>
  <amber-row :gutter="16">
    <amber-col :span="6" class="gutter-row"><div class="gutter-box">col-6</div></amber-col>
    <amber-col :span="6" class="gutter-row"><div class="gutter-box">col-6</div></amber-col>
    <amber-col :span="6" class="gutter-row"><div class="gutter-box">col-6</div></amber-col>
    <amber-col :span="6" class="gutter-row"><div class="gutter-box">col-6</div></amber-col>
  </amber-row>
</template>
```

#### 偏移
```vue
<template>
  <amber-row :gutter="16">
    <amber-col :span="6" :offset="6">col-6</amber-col>
    <amber-col :span="6" :offset="6">col-6</amber-col>
  </amber-row>
</template>
```

#### Flex填充
```vue
<template>
  <amber-divider orientation="left">Percentage columns</amber-divider>
  <amber-row>
    <amber-col :flex="2">2 / 5</amber-col>
    <amber-col :flex="3">3 / 5</amber-col>
  </amber-row>
  <amber-divider orientation="left">Fill rest</amber-divider>
  <amber-row>
    <amber-col flex="100px">100px</amber-col>
    <amber-col flex="auto">auto</amber-col>
  </amber-row>
  <amber-divider orientation="left">Raw flex style</amber-divider>
  <amber-row>
    <amber-col flex="1 1 100px">1 1 100px</amber-col>
    <amber-col flex="0 1 200px">0 1 200px</amber-col>
  </amber-row>
</template>
```

<h3 class="default">API</h3>

#### Row Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
|align | flex 布局下的垂直对齐方式 | String | `top`、`middle`、`bottom` | `top` |
|gutter | 栅栏间隔 | Number | - | `0` |
|justify | flex 布局下的水平排列方式 | String | `start`、`end`、`center`、`space-around`、`space-between` | `start` |

#### Col Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
|flex | flex 布局填充 | String\|Number | - | - |
|span | 栅格占位格数 | Number | - | - |
|offset | 栅格左侧的间隔数 | Number | - | - |
