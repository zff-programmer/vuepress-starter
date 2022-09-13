# Progress进度条

## 基本用法
:::demo progress默认范围为0-1
```html
<template>
  <label for="zero">0</label>
  <progress  id="zero" class="hi-progress" ></progress>
  <br/>
  <label for="progress">30%</label>
  <progress  id="progress" class="hi-progress" value="0.3"></progress>
</template>
<style>
  @import '../../packages/styles/progress.css';
</style>
```
:::


## max值用法
:::demo
```html
<template>
  <label for="progress">30%</label>
  <progress  id="progress" class="hi-progress" value="30" max="100"></progress>
</template>
<style>
  @import '../../packages/styles/progress.css';
</style>
```
:::


## 宽度100%用法
:::demo
```html
<template>
  <label for="progress">30%</label>
  <progress  id="progress" class="hi-progress" value="30" max="100" width="100%"></progress>
</template>
<style>
  @import '../../packages/styles/progress.css';
</style>
```
:::


## 动态效果
:::demo
```html
<template>
  <button class="hi-button" @click="generateRandomNumber" type="primary">随机生成value</button> 
  <br/><br/>
  <progress id="progress" class="hi-progress" :value="value"></progress>
</template>
<script>
  export default{
    data(){
      return {
        value:0
      }
    },
    methods:{
      generateRandomNumber(){
        this.value = Math.random()
      }
    }
  }
</script>
<style>
  @import '../../packages/styles/progress.css';
  @import '../../packages/styles/button.css';
</style>
```
:::