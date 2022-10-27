# Navbar

 ---

### Install

 ```js

 import { createApp } from 'vue';
import { Navbar } from 'amberm-ui';

const app = createApp();
app.use(Navbar);
```

### 基本使用

通过title属性来设置导航栏标题

 ```js
 <am-navbar title="标题" />
 ```

### 返回上级

```js
     <am-navbar
        on-click-left="handleClick"
        title="标题"
        left-text="返回"
        right-text="确定"
        :border="true"
        left-arrow
      />
    </div>
```

### 颜色

```js
      <am-navbar
        on-click-left="handleClick"
        background-color="#1a9dff"
        left-arrow
        color="#fff"
        title="标题"
        left-text="返回"
        right-text="确定"
        :border="true"
      />
    
```

### 插槽

```js
<am-navbar
        on-click-left="handleClick"
        background-color="#1a9dff"
        left-arrow
        color="#fff"
        title="标题"
        left-text="返回"
        :border="true"
      >
        <template #right>
          <am-icon name="amberm-sousuo" color="#fff" />
        </template>
      </am-navbar>
```

### props

| 参数 | 说明 | 类型  | 默认 |
| --- | ---  | --- |   --- |
| color | 字体颜色 | string| '#000'|
| title | 标题 | string| ''|
| left-text | 左侧文字 | string| ''|
| right-text | 右侧文字 | string| ''|
| left-arrow | 是否显示左侧箭头 | boolean| false|
| border | 是否显示下边框 | boolean| false|
| z-index | 导航栏的z-index | boolean| false|
| fixed | 是否显示在顶部 | boolean| false|

### slots

|名字|描述|
|---|---|
| title | 自定义标题 |
| left  | 自定义左侧内容 |
| right  | 自定义右侧内容 |

### Event

|事件名|说明|回调参数|
|---|---|---|
|click-left|点击左侧按钮时触发| event: MouseEvent|
|click-right|点击右侧按钮时触发| event: MouseEvent|
