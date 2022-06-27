<template>
  <div class="container">
    <h2>基本用法</h2>
    <section class="container-content">
      <amber-row>
        <amber-col :span="12">col-12</amber-col>
        <amber-col :span="12">col-12</amber-col>
      </amber-row>
      <amber-row>
        <amber-col :span="8">col-8</amber-col>
        <amber-col :span="8">col-8</amber-col>
        <amber-col :span="8">col-8</amber-col>
      </amber-row>
      <amber-row>
        <amber-col :span="6">col-6</amber-col>
        <amber-col :span="6">col-6</amber-col>
        <amber-col :span="6">col-6</amber-col>
        <amber-col :span="6">col-6</amber-col>
      </amber-row>
    </section>
    <h2>对齐</h2>
    <section class="container-content">
      <amber-row justify="center" align="top">
        <amber-col :span="4">col-4</amber-col>
        <amber-col :span="4">col-4</amber-col>
        <amber-col :span="4">col-4</amber-col>
        <amber-col :span="4">col-4</amber-col>
      </amber-row>
      <amber-row justify="space-around" align="middle">
        <amber-col :span="4">col-4</amber-col>
        <amber-col :span="4">col-4</amber-col>
        <amber-col :span="4">col-4</amber-col>
        <amber-col :span="4">col-4</amber-col>
      </amber-row>
      <amber-row justify="space-between" align="bottom">
        <amber-col :span="4">col-4</amber-col>
        <amber-col :span="4">col-4</amber-col>
        <amber-col :span="4">col-4</amber-col>
        <amber-col :span="4">col-4</amber-col>
      </amber-row>
    </section>
    <h2>间隔</h2>
    <section class="container-content">
      <amber-row :gutter="16">
        <amber-col :span="6" class="gutter-row"><div class="gutter-box">col-6</div></amber-col>
        <amber-col :span="6" class="gutter-row"><div class="gutter-box">col-6</div></amber-col>
        <amber-col :span="6" class="gutter-row"><div class="gutter-box">col-6</div></amber-col>
        <amber-col :span="6" class="gutter-row"><div class="gutter-box">col-6</div></amber-col>
      </amber-row>
    </section>
    <h2>偏移</h2>
    <section class="container-content">
      <amber-row :gutter="16">
        <amber-col :span="6" :offset="6">col-6</amber-col>
        <amber-col :span="6" :offset="6">col-6</amber-col>
      </amber-row>
    </section>
    <h2>Flex填充</h2>
    <section class="container-content">
      <amber-divider orientation="left">Percentage columns</amber-divider>
      <amber-row>
        <amber-col :flex="2">2 / 5</amber-col>
        <amber-col :flex="3">3 / 5</amber-col>
      </amber-row>
      <amber-divider orientation="left">Fill rest</amber-divider>
      <amber-row>
        <amber-col flex="100px">100px</amber-col>
        <amber-col flex="auto">auto</amber-col>
      </amber-row>
      <amber-divider orientation="left">Raw flex style</amber-divider>
      <amber-row>
        <amber-col flex="1 1 100px">1 1 100px</amber-col>
        <amber-col flex="0 1 200px">0 1 200px</amber-col>
      </amber-row>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {}
})
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  h2 {
    padding: 10px 0;
    font-weight: 400;
    font-size: 14px;
    color: #5e6d82;
  }
  &-content {
    overflow: hidden;
  }
}
</style>
