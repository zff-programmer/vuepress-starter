# Input 输入框

通过鼠标或键盘输入字符。

## 基本用法
基础的输入框用法。

::: demo 
```html
<template>
     <input type="text" class="hi-input" placeholder="请输入..." value="" autocomplete="off"/>
</template>
<style>
  @import '../../packages/styles/input.css';
</style>
```
:::


## 禁用状态

::: demo 
```html
<template>
     <input type="text" class="hi-input" placeholder="请输入..." disabled />
</template>
<style>
  @import '../../packages/styles/input.css';
</style>
```
:::



## 密码框

::: demo 
```html
<template>
      <input class="hi-input" type="password" placeholder="请输入内容"  autocomplete="off"/>
</template>
<style>
  @import '../../packages/styles/input.css';
</style>
```
:::


## 数字框

::: demo 
```html
<template>
      <input class="hi-input" type="number" placeholder="最大是10" max="10"  />
</template>
<style>
  @import '../../packages/styles/input.css';
</style>
```
:::


## 可清空

::: demo 
```html
<template>
      <input class="hi-input" type="search" placeholder="请输入内容" />
</template>
<style>
  @import '../../packages/styles/input.css';
</style>
```
:::


## 搜索框

::: demo
```html
<template>
  <span class="hi-input hi-input-search" align="end">
      <input type="search" placeholder="图标在后">
      <input type="submit" class="hi-icon-search" value="搜索">
  </span>
  <br/><br/>
  <span class="hi-input hi-input-search">
      <input type="search" placeholder="图标在前">
      <a href="javascript:" class="hi-icon-search">搜索</a>
  </span>
</template>
<style>
  @import '../../packages/styles/input.css';
</style>
```
:::


### Atributos
| 参数        | 说明           | 类型    | 可选值 | 默认值 |
| ----------- | -------------- | ------- | ------ | ------ |
| title       | título         | string  | —      | —      |
| disabled    | 禁用           | boolean | —      | false  |
| placeholder | 输入框占位文本 | string  | —      | —      |
