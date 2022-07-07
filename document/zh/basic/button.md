# Button 按钮

<h3 class="default">代码演示</h3>

#### 按钮类型

支持`default`、`primary`、`success`、`info`、`warning`、`danger`六种类型，默认为`default`
```vue
<template>
  <amber-button type="default">默认按钮</amber-button>
  <amber-button type="primary">主要按钮</amber-button>
  <amber-button type="success">成功按钮</amber-button>
  <amber-button type="info">信息按钮</amber-button>
  <amber-button type="warning">警告按钮</amber-button>
  <amber-button type="danger">危险按钮</amber-button>
</template>
```

#### 禁用状态

通过`disabled`属性来禁用按钮，此时按钮不可点击
```vue
<template>
  <amber-button type="default" disabled>默认按钮</amber-button>
  <amber-button type="primary" disabled>主要按钮</amber-button>
  <amber-button type="success" disabled>成功按钮</amber-button>
  <amber-button type="info" disabled>信息按钮</amber-button>
  <amber-button type="warning" disabled>警告按钮</amber-button>
  <amber-button type="danger" disabled>危险按钮</amber-button>
</template>
```

#### 按钮形状
```vue
<template>
  <amber-button type="primary">主要按钮</amber-button>
  <amber-button round type="success">成功按钮</amber-button>
</template>
```

#### 按钮尺寸

支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`
```vue
<template>
  <amber-button size="large">大号按钮</amber-button>
  <amber-button size="normal">普通按钮</amber-button>
  <amber-button size="small">小型按钮</amber-button>
  <amber-button size="mimi">迷你按钮</amber-button>
</template>
```

<h3 class="default">API</h3>

#### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---  | --- |  ---    | --- |
| type | 类型 | String | `default`、`primary`、`success`、`info`、`warning`、`danger` | `default` |
| disabled | 禁用 | Boolean | - | `false` |
| round | 圆形按钮 | Boolean | - | `false` |
| size | 大小 | String | `large`、`normal`、`small`、`mini` | `normal` |
| loading | 加载 | Boolean | - | `false` |
| loadingText | 加载文案 | String | 与`loading`一起使用 |  |


#### Event

| 事件名 | 说明 | 回调参数 |
| --- | ---  | --- |
| click | 点击按钮触发 | event: Event |
