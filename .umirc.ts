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
  plugins: [require.resolve('@umijs/plugins/dist/tailwindcss')],
  tailwindcss: {},
});
