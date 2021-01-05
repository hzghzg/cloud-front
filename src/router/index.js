import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login";
import Home from "../components/Home";
import resource1 from "../components/Resource1";
import resource2 from "../components/Resource2";
import resource3 from "../components/Resource3";

Vue.use(VueRouter);
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err);
};
// const loginPage = () => import('../views/login');

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/home",
    component: Home,
    children: [
      { path: "resource2", component: resource2 },
      { path: "resource3", component: resource3 },
      { path: "", component: resource1 }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
