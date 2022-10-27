# Button

---

### Install

``` js
import { createApp } from 'vue';
import { Button } from 'amberm-ui';

const app = createApp();
app.use(Button);
```

### Type

``` js
<template>
  <amber-button type="default">Default</amber-button>
  <amber-button type="primary">Primary</amber-button>
  <amber-button type="success">Success</amber-button>
  <amber-button type="info">Info</amber-button>
  <amber-button type="warning">Warning</amber-button>
  <amber-button type="danger">Danger</amber-button>
</template>
```

### Disabled

``` js
<template>
  <amber-button type="default" disabled>disabled</amber-button>
  <amber-button type="success" disabled>disabled</amber-button>
  <amber-button type="info" disabled>disabled</amber-button>
</template>
```

### Shape

```js
<template>
  <amber-button type="primary">Defalut</amber-button>
  <amber-button round type="success">Round</amber-button>
</template>
```

### Size

```js
<template>
  <amber-button size="large">Large</amber-button>
  <amber-button size="normal">Normal</amber-button>
  <amber-button size="small">Small</amber-button>
  <amber-button size="mini">Mini</amber-button>
</template>
```

### Props

| Attribute | Description | Type  | Default |
| --- | ---  | --- |   --- |
| type | Can be set to `default`、`primary`、`success`、`info`、`warning`、`danger` | string  | `default` |
| disabled | - | boolean | `false` |
| round | - | boolean | - | `false` |
| size | Can be set to `large`、`normal`、`small`、`mini`   | string | `normal` |
| loading | - | boolean  | `false` |
| loadingText |  | string | "" | |

### Event

| Event | Description |  Arguments |
| --- | ---  | --- |
| click | Emitted when button is clicked and not disabled or loading | event: Event |
