<template>
  <div class="Aside">
    <ul class="aside-items">
      <li class="items-header">指南</li>
      <li class="items">入门</li>
      <li class="items">快速开始</li>
      <li class="items">更换主题</li>
    </ul>
    <ul class="aside-items">
      <li class="items-header">基础组件</li>
      <li class="items active">Button 按钮</li>
      <li class="items">Color 颜色</li>
      <li class="items">Tips 提示</li>
      <li class="items">Tree 树形控件</li>
      <li class="items">Steps 步骤条</li>
      <li class="items">Divider 分割线</li>
    </ul>
    <ul class="aside-items">
      <li class="items-header">基础组件</li>
      <li class="items">Button 按钮</li>
      <li class="items">Color 颜色</li>
      <li class="items">Tips 提示</li>
      <li class="items">Tree 树形控件</li>
      <li class="items">Steps 步骤条</li>
      <li class="items">Divider 分割线</li>
    </ul>
    <ul class="aside-items">
      <li class="items-header">基础组件</li>
      <li class="items">Button 按钮</li>
      <li class="items">Color 颜色</li>
      <li class="items">Tips 提示</li>
      <li class="items">Tree 树形控件</li>
      <li class="items">Steps 步骤条</li>
      <li class="items">Divider 分割线</li>
    </ul>
    <ul class="aside-items">
      <li class="items-header">基础组件</li>
      <li class="items">Button 按钮</li>
      <li class="items">Color 颜色</li>
      <li class="items">Tips 提示</li>
      <li class="items">Tree 树形控件</li>
      <li class="items">Steps 步骤条</li>
      <li class="items">Divider 分割线</li>
    </ul>
    <ul class="aside-items">
      <li class="items-header">基础组件</li>
      <li class="items">Button 按钮</li>
      <li class="items">Color 颜色</li>
      <li class="items">Tips 提示</li>
      <li class="items">Tree 树形控件</li>
      <li class="items">Steps 步骤条</li>
      <li class="items">Divider 分割线</li>
    </ul>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
  .Aside {
    position: relative;
    width: 12%;
    height: 90%;
    background-color: #FAFAFA;
    border-right: 2px solid #eeeeee;
    overflow-y: auto;
    .aside-items {
      list-style: none;
      margin-top: 8px;
      .items-header {
        font-size: 0.9em;
        font-weight: bold;
        color: #b1b1b1;
        padding-left:.8em ;
      }
      .items {
        font-size: 0.95em;
        padding: 0.35rem 0rem 0.35rem 1.25rem;
        cursor: pointer;
        color: #555;
        text-align: left;
      }
      .items:hover {
        color: #1A9Dff;
      }
      .active {
        background: #E3F1FF;
        border-left: 4px solid #1A9Dff;
        box-sizing: border-box;
        color: #1A9Dff;
      }
    }
  }
</style>
