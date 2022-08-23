# Button按钮

常用的操作按钮。

## 基本用法
基础的按钮用法。

::: demo 
```html
<template>
    <button type="normal" class="hi-button">正常按钮</button>
    <button type="primary" class="hi-button">普通按钮</button>
    <button type="warning" class="hi-button" >警告按钮</button>
    <button type="error" class="hi-button">错误按钮</button>
    <button type="success" class="hi-button">成功按钮</button>
</template>
<style>
  @import '../packages/styles/button.css';
</style>
```
:::

## 禁用状态
按钮不可用状态。

::: demo
```html
<template>
    <button type="normal" class="hi-button" disabled>正常按钮</button>
    <button type="primary" class="hi-button" disabled>普通按钮</button>
    <button type="warning" class="hi-button" disabled>警告按钮</button>
    <button type="error" class="hi-button" disabled>错误按钮</button>
    <button type="success" class="hi-button" disabled>成功按钮</button>
</template>
<style>
  @import '../packages/styles/button.css';
</style>
```
:::

## 加载中

::: demo 要设置为 loading 状态，只要类中loading属性即可。
```html
<template>
    <button type="primary" class="hi-button loading">普通按钮</button>
</template>
<style>
  @import '../packages/styles/button.css';
</style>
```
:::