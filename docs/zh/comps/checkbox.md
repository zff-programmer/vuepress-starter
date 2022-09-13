# CheckBox复选框

## 基本用法
:::demo
```html
<template>
  <input type="checkbox" id="b1" class="hi-checkbox">
  <label for="b1">复选框1</label>
  <input type="checkbox" id="b2" class="hi-checkbox">
  <label for="b2">复选框2</label>
</template>
<style>
  @import '../../packages/styles/checkbox.css';
</style>
```
:::


## 禁用用法
:::demo
```html
<template>
  <input type="checkbox" id="b1" class="hi-checkbox" disabled checked>
  <label for="b1">复选框1</label>
  <input type="checkbox" id="b2" class="hi-checkbox" disabled>
  <label for="b2">复选框2</label>
</template>
<style>
  @import '../../packages/styles/checkbox.css';
</style>
```
:::

## 半选用法
:::demo 需要用js设置才能生效
```html
<template>
  <input type="checkbox" id="c1" class="hi-checkbox" >
  <label for="b1">复选框1</label>
  <input type="checkbox" id="c2" class="hi-checkbox" disabled>
  <label for="b2">复选框2</label>
</template>
<script>
  export default{
    mounted(){
      document.getElementById('c1').indeterminate  = true
      document.getElementById('c2').indeterminate  = true
    }
  }
</script>
<style>
  @import '../../packages/styles/checkbox.css';
</style>
```
:::