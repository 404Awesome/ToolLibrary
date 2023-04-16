<template>
  <n-result status="error" title="错误" description="页面不存在!">
    <template #footer>
      <n-button @click="$router.replace('/')">返回主页</n-button>
    </template>
  </n-result>
</template>
