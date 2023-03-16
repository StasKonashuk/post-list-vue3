import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import MainPage from "../components/pages/mainPage/mainPage.vue";
import AllPosts from "../components/pages/allPostsPage/allPostsPage.vue";
import ParticularPost from "../components/pages/particularPostPage/particularPostPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    component: MainPage,
  },
  {
    path: "/posts",
    name: "posts",
    component: AllPosts,
  },
  {
    path: "/posts/:id",
    name: "particularPost",
    component: ParticularPost,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
