import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Catalog from "../views/Catalog.vue";
import Profile from "../views/Profile.vue";
import Cart from "../views/Cart.vue";
import Item_page from "../views/Item_page.vue";
import Authorization from "../views/Authorization.vue";
import Registration from "../components/Registration.vue";
import Login from "../components/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: Catalog,
    meta: { transition: "slide-left" },
  },
  {
    path: "/auth",
    name: "Authorization",
    component: Authorization,
    meta: { transition: "slide-left" },
    children: [
      {
        path: "login",
        component: Login,
        meta: { transition: "slide-left" },
      },
      {
        path: "registration",
        component: Registration,
        meta: { transition: "slide-left" },
      },
    ],
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { transition: "slide-left" },
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    meta: { transition: "slide-left" },
  },
  {
    path: "/item/:itemID",
    name: "Item_page",
    component: Item_page,
    meta: { transition: "slide-left" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
