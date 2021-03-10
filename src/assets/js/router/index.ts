// ==|== Imports ===================================================================================
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// ==|== Routes ====================================================================================
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "about" */ "@/views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  }
];

// ==|== Router ====================================================================================
const router = createRouter({
  history: createWebHistory(),
  routes
});

// ==|== Export ====================================================================================
export default router;
