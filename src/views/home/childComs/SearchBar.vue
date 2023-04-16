<template>
  <div class="search">
    <n-input v-model:value="value" type="text" placeholder="搜索工具" />
    <n-button strong secondary type="success">搜索</n-button>
  </div>
</template>

<script setup lang="ts">
let value = ref<string>("");
</script>

<style lang="scss" scoped>
.search {
  @apply flex gap-15px mx-auto w-full md-w-50%;
}
</style>
