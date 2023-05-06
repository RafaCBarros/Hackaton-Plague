import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LayoutNavigation from "@/layout/Navigation.vue";

const routes = [
  {
    path: "/*",
    name: "LayoutTela",
    component: LayoutNavigation,
    children: [
      {
        path: "/",
        name: "Inicial",
        component: HomeView,
      },
      {
        path: "/sobre",
        name: "SobreNos",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/AboutView.vue"),
      },
      {
        path: "/blog",
        name: "BlogFatos",
        component: () => import("@/views/BlogView.vue"),
      },
      {
        path: "/cidadao",
        name: "AreaCidadao",
        component: () => import("@/views/CidadaoView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
