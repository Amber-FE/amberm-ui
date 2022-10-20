# Button

--- 

### Install
```
import { createApp } from 'vue';
import { Button } from 'amberm-ui';

const app = createApp();
app.use(Button);
```


#### Type

```vue
<template>
  <amber-button type="default">Default</amber-button>
  <amber-button type="primary">Primary</amber-button>
  <amber-button type="success">Success</amber-button>
  <amber-button type="info">Info</amber-button>
  <amber-button type="warning">Warning</amber-button>
  <amber-button type="danger">Danger</amber-button>
</template>
```

#### Disabled

```vue
<template>
  <amber-button type="default" disabled>disabled</amber-button>
  <amber-button type="success" disabled>disabled</amber-button>
  <amber-button type="info" disabled>disabled</amber-button>
</template>
```

#### Shape
```vue
<template>
  <amber-button type="primary">Defalut</amber-button>
  <amber-button round type="success">Round</amber-button>
</template>
```

#### Size

```vue
<template>
  <amber-button size="large">Large</amber-button>
  <amber-button size="normal">Normal</amber-button>
  <amber-button size="small">Small</amber-button>
  <amber-button size="mini">Mini</amber-button>
</template>
```

<h3 class="default">API</h3>

#### Props

| Attribute | Description | Type  | Default |
| --- | ---  | --- |   --- |
| type | Can be set to `default`、`primary`、`success`、`info`、`warning`、`danger` | String  | `default` |
| disabled | - | Boolean | `false` |
| round | - | Boolean | - | `false` |
| size | Can be set to `large`、`normal`、`small`、`mini`   | String | `normal` |
| loading | - | Boolean  | `false` |
| loadingText |  | String | "" | |


#### Event


| Event | Description | 	Arguments |
| --- | ---  | --- |
| click | Emitted when button is clicked and not disabled or loading | event: Event |
