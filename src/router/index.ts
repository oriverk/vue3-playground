import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/playground",
    name: "Playground",
    component: () => import("../views/PlaygroundView.vue"),
  },
  {
    path: "/tutorials",
    name: "Tutorials",
    children: [
      {
        path: "",
        name: "top",
        component: () => import("../views/TutorialsView.vue"),
      },
      {
        path: "counter",
        name: "Counter",
        component: () => import("../components/tutorials/PlayCounter.vue"),
      },
      {
        path: "toggle",
        name: "Toggle",
        component: () => import("../components/tutorials/PlayToggle.vue"),
      },
      {
        path: "todo",
        name: "Todo",
        component: () => import("../components/tutorials/PlayTodo.vue"),
      },
      {
        path: "onmounted",
        name: "onMounted",
        component: () => import("../components/tutorials/PlayOnMounted.vue"),
      },
      {
        path: "watch",
        name: "watch",
        component: () => import("../components/tutorials/PlayWatch.vue"),
      },
      {
        path: "pass-props",
        name: "pass Props",
        component: () => import("../components/tutorials/PlayPassedProps.vue"),
      },
      {
        path: "emit-event",
        name: "emit Event",
        component: () => import("../components/tutorials/PlayEmittedEvent.vue"),
      },
      {
        path: "slot",
        name: "slot",
        component: () => import("../components/tutorials/PlayUseSlot.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
