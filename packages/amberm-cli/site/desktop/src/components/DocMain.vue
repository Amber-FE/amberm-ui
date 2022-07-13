<template>
  <div class="Main">
    <router-view />
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
  .Main {
    display: flex;
    position: relative;
    width: 70%;
    height: 100%;
    background-color: white;
    border-right: 2px solid #eeeeee;
  }
</style>
