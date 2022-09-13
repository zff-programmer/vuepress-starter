# Radio单选框
通过鼠标或键盘选择

## 基本用法
:::demo
```html
<template>
  <input type="radio" id="r1" name="radio" class="hi-radio" >
  <label for="r1">单选项1</label>
  <input type="radio" id="r2" name="radio" class="hi-radio">
  <label for="r2">单选项2</label>
</template>
<style>
  @import '../../packages/styles/radio.css';
</style>
```
:::

## 禁用选项
:::demo
```html
<template>
  <input type="radio" id="r4" name="rd" class="hi-radio" disabled>
  <label for="r4">单选项4</label>
  <input type="radio" id="r5" name="rd" class="hi-radio" disabled checked>
  <label for="r5">单选项5</label>
</template>
<style>
  @import '../../packages/styles/radio.css';
</style>
```
:::