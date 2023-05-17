import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    // {
    //   path: '/',
    //   redirect: '/home',
    // },
    // {
    //   name: '首页',
    //   path: '/home',
    //   component: './Home',
    // },
    // {
    //   name: '权限演示',
    //   path: '/access',
    //   component: './Access',
    // },
    // {
    //   name: ' CRUD 示例',
    //   path: '/table',
    //   component: './Table',
    // },
    {
      path: '/',
      //   component: '@/layouts/index.tsx',
      routes: [
        {
          path: '/app1',
          //   component: '@/layouts/app-layout.tsx',
          routes: [
            // 配置微应用 app1 关联的路由
            {
              // 带上 * 通配符意味着将 /app1/project 下所有子路由都关联给微应用 app1
              path: '/app1/*',
              microApp: 'app1',
            },
          ],
        },
        // 配置 app2 关联的路由
        {
          path: '/app2/*',
          microApp: 'app2',
        },
        {
          path: '/app3/*',
          microApp: 'app3',
        },
      ],
    },
  ],
  npmClient: 'yarn',
  qiankun: {
    master: {
      apps: [
        {
          name: 'app1',
          entry: '//localhost:8002',
        },
        {
          name: 'app2',
          entry: '//localhost:8003',
        },
        {
          name: 'app3',
          entry: '//localhost:8004',
        },
      ],
    },
  },
});
