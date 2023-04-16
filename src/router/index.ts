import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  routes,
  history: createWebHistory(),
});

// 全局导航守卫
router.beforeEach((to, from, next) => {
  next();
});

export default router;
