import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store/index";

import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";

import Dashboard from "../views/Home.vue";
import Maps from "../views/Maps.vue";
import Profile from "../views/UserProfile.vue";
import Modules from "../views/Modules.vue";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: DashboardLayout,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "/home",
        name: "accueil",
        components: { default: Dashboard },
      },
      {
        path: "/maps",
        name: "maps",
        components: { default: Maps },
      },
      {
        path: "/profile",
        name: "Mon profil",
        components: { default: Profile },
      },
      {
        path: "/modules",
        name: "modules",
        components: { default: Modules },
      },
    ],
  },
  {
    path: "/",
    redirect: "login",
    component: AuthLayout,
    meta: {
      guest: true,
    },
    children: [
      {
        path: "/login",
        name: "login",
        components: { default: Login },
      },
      {
        path: "/register",
        name: "register",
        components: { default: Register },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

router.beforeEach((to, from, next) => {
  let auth = store.getters.isAuthenticated;
  // eslint-disable-next-line no-unused-vars
  let token = store.getters.getJwt;
  let admin = store.getters.isAdmin;
  let user = store.getters.getUser;
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!auth) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath },
      });
    } else {
      if (to.matched.some((record) => record.meta.is_admin)) {
        if (admin) next();
        else next({ name: "home" });
      } else {
        next();
      }
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (!user) next();
    else next({ name: "home" });
  } else next();
});

export default router;
