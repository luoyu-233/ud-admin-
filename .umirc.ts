import { defineConfig } from "@umijs/max";

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: "@umijs/max",
  },
  apiRoute: {
    platform: 'vercel'
  },
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      name: "登录页",
      path: "/login",
      component: "./Login",
      hideInBreadcrumb: true, // 在面包屑中隐藏
      hideInMenu: true  // 隐藏自己和子菜单
    },
    {
      name: "首页",
      path: "/home",
      component: "./Home",
    },

    {
      name: "权限演示",
      path: "/access",
      component: "./Access",
    },

    {
      name: " CRUD 示例",
      path: "/table",
      component: "./Table",
    },
  ],

  npmClient: "npm",
  tailwindcss: {},
});
