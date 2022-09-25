# DataList数据列表

## 基本用法
:::demo
```html
<template>
  <label for="ice-cream-choice">Choose a flavor:</label>
  <input list="d0" id="ice-cream-choice" name="ice-cream-choice" class="hi-input hi-datalist" v-model="value"/>
  <datalist id="d0" class="hi-datalist-datalist">
      <option value="Chocolate" selected></option>
      <option value="Coconut"></option>
      <option value="Mint"></option>
      <option value="Strawberry"></option>
      <option value="Vanilla"></option>
  </datalist>
  选中值{{value}}
</template>
<script>
  export default {
    data(){
      return {
        value:''
      }
    }
  }
</script>
<style>
  @import '../../packages/styles/input.css';
  @import '../../packages/styles/datalist.css';
</style>
```
:::
