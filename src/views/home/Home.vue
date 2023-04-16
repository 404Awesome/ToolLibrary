<template>
  <main class="fatherBox">
    <!-- 头部描述 -->
    <header class="content">
      <h1 class="title">工具库</h1>
      <p class="description">"更新完善中..."</p>
    </header>

    <!-- 内容 -->
    <article class="main scrollBar">
      <!-- 搜索栏 -->
      <SearchBar />

      <!-- 分割线 -->
      <n-divider class="divider" dashed>工具列表</n-divider>

      <!-- 工具列表 -->
      <ToolList />
    </article>
  </main>
</template>

<script setup lang="ts">
import SearchBar from "./childComs/SearchBar.vue";
import ToolList from "./childComs/ToolList.vue";
</script>

<style lang="scss" scoped>
.fatherBox {
  background: no-repeat center url("@/assets/images/home_bg.jpg");
  background-size: cover;
  @apply relative h-100vh w-100vw flex justify-center overflow-hidden;
}

.content {
  @apply absolute;
  bottom: calc(60vh + 85px);

  .title {
    @apply font-smiley text-rose-600 font-normal text-5xl my-0px;
  }

  .description {
    @apply font-smiley mt-5px text-white text-xl;
  }
}

.main {
  @apply absolute bottom-0px rounded-t shadow-xl p-25px;
  @apply h-65vh w-90% md-w-45vw bg-white overflow-x-hidden overflow-y-auto;
}

.divider {
  @apply font-smiley text-rose-500;
}
</style>
