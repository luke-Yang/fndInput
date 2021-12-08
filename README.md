# fnd-input

> 一个可以控制输入正整数和小数的 input 组件

## Build Setup

```bash
# install dependencies
npm install fnd-input --dev-s

#use

>在main.js中全局注册
import FndInput from 'fnd-input'
Vue.use(FndInput);

>在组件中使用

   <fnd-input v-model="value" v-only-integer></fnd-input>
     <br>
     输入小数
  <fnd-input v-model="value1" v-can-decimal:2></fnd-input>
```
