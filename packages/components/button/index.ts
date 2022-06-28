import Button from './button'

// 提供 install 安装方法，供按需引入
Button.install = (Vue: any) => {
  // 注册组件
  Vue.component(Button.name, Button)
}

export default Button
