<template>
  <div v-if="toolRouteList">
    <section v-for="(item, index) in toolRouteList" :key="item.url" class="card">
      <div class="no">
        <span>{{ index }}</span>
      </div>
      <div p-10px>
        <h4 class="title">{{ item.cnName }}</h4>
        <p class="content">{{ item.description }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import toolRouteList from "@/router/toolRouteList.json";
</script>

<style lang="scss" scoped>
.card {
  @apply flex border-1 border-solid border-gray-200 rounded-md overflow-hidden cursor-default;

  &:hover {
    .no {
      @apply w-70px opacity-100;
    }
  }
}

.no {
  @apply w-0 opacity-0 transition-all duration-200 flex justify-center items-center bg-rose-500;

  &>span {
    @apply font-smiley text-2xl text-white;
  }
}

.title,
.content {
  @apply m-0;
}

.title {
  @apply mb-5px text-xl font-smiley text-gray-600 cursor-pointer;

  &:hover {
    @apply text-rose-500;
  }
}

.content {
  @apply truncate font-smiley text-gray-500;
}
</style>
