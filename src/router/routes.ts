import { RouteRecordRaw } from "vue-router";

export default <RouteRecordRaw[]>[
  {
    path: "/",
    component: () => import("@/views/home/Home.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("views/error/error.vue"),
  },
];
