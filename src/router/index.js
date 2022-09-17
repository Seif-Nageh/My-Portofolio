import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: AboutView,
  },
  {
    path: "/resume",
    name: "resume",
    component: () => import("../views/ResumeView.vue"),
  },
  {
    path: "/works",
    name: "works",
    component: () => import("../views/WorksView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
