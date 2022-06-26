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
      hideInMenu: true,  // 隐藏自己和子菜单
      headerRender: false, // 不显示顶栏
      footerRender: false, // 不显示页脚
      menuRender: false, // 不显示菜单
      menuHeaderRender: false, // 不显示菜单的 title 和 logo
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
