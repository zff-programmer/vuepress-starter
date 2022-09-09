# TextArea多文本框

## 基本用法
::: demo
```html
<template>
  <textarea class="hi-textarea" placeholder="请输入..." ></textarea>
</template>
<style>
  @import '../../packages/styles/textarea.css';
</style>
```
:::


## 禁用状态
::: demo
```html
<template>
  <textarea class="hi-textarea" placeholder="请输入..." disabled></textarea>
</template>
<style>
  @import '../../packages/styles/textarea.css';
</style>
```
:::


## 只读状态
::: demo
```html
<template>
  <textarea class="hi-textarea" placeholder="请输入..." readonly></textarea>
</template>
<style>
  @import '../../packages/styles/textarea.css';
</style>
```
:::


## 宽度100%
::: demo
```html
<template>
  <textarea class="hi-textarea" placeholder="请输入..." width="100%"></textarea>
</template>
<style>
  @import '../../packages/styles/textarea.css';
</style>
```
:::


## 水平垂直拉伸
::: demo
```html
<template>
  垂直拉伸
  <textarea class="hi-textarea" placeholder="请输入..." resize="vertical"></textarea>
  水平拉伸
  <textarea class="hi-textarea" placeholder="请输入..." resize="horizontal"></textarea>
  <br>
  双向拉伸
  <textarea class="hi-textarea" placeholder="请输入..." resize="both"></textarea>
</template>
<style>
  @import '../../packages/styles/textarea.css';
</style>
```
:::

## 内联嵌套
:::demo
```html
<template>
  <div class="hi-textarea"><textarea rows="4" resize></textarea></div>
</template>
<style>
  @import '../../packages/styles/textarea.css';
</style>
```
:::

## 块级嵌套
:::demo
```html
<template>
  <div class="hi-textarea"><textarea rows="4" resize="vertical" style="display:block;"></textarea></div>
</template>
<style>
  @import '../../packages/styles/textarea.css';
</style>
```
:::


## 文本域出错
:::demo 
```html
<template>
  非嵌套结构出错
  <textarea class="hi-textarea" is-error></textarea>
  <br>
  嵌套结构出错
  <div class="hi-textarea"><textarea is-error></textarea></div>
</template>
<style>
  @import '../../packages/styles/textarea.css';
</style>
```
:::
