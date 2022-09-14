# Range范围

## 基本用法
:::demo max默认为100，min默认为0，step默认为1
```html
<template>
  原生
  <input type="range" value="30" >
  <br/>
  范围
  <input type="range" class="hi-range" min="0" max="100" step="1" value="50"  data-tips="这里表示的是50px">
</template>
<style>
  @import '../../packages/styles/range.css';
</style>
```
:::


## 反转提示语用法
:::demo 
```html
<template>
  范围
  <input type="range" id="reverseTips" class="hi-range" min="0" max="100" step="1" value="50"  data-tips="这里表示的是50px" reverse>
</template>

<style>
  @import '../../packages/styles/range.css';
</style>
```
:::


## 禁用用法
:::demo 
```html
<template>
  范围
  <input type="range" class="hi-range" value="50" disabled >
</template>
<style>
  @import '../../packages/styles/range.css';
</style>
```
:::