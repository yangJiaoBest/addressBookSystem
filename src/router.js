import { createRouter, createWebHistory } from 'vue-router'

// 固定的路由表
export const fixedRouter = [
  {
    path: '/',
    name: 'index',
    component: () => import('./views/index.vue'),
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('./views/index.vue'),
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('./views/LoginPage.vue'),
  },
  {
    // 404页面配置
    path: '/:catchAll(.*)',
    component: () => import('./views/404.vue')
  }
];

export const permissionRouter = [
  {
    path: '/addressBook/groupManagement',
    name: 'groupManagement',
    component: () => import('./views/GroupManagement/GroupList.vue'),
    meta: {
      parentName: '分组管理',
      title: '分组列表',
    }
  },
  {
    path: '/addressBook/addGroup',
    name: 'addGroup',
    component: () => import('./views/GroupManagement/AddGroup.vue'),
    meta: {
      parentName: '分组管理',
      title: '添加分组',
    }
  },
  {
    path: '/addressBook/editGroup/:id',
    name: 'editGroup',
    component: () => import('./views/GroupManagement/EditGroup.vue'),
    meta: {
      parentName: '分组管理',
      title: '添加分组',
    }
  },
  {
    path: '/addressBook/roleManagement',
    name: 'roleManagement',
    component: () => import('./views/RoleManage/RoleList.vue'),
    meta: {
      parentName: '角色管理',
      title: '角色列表',
    }
  },
  {
    path: '/addressBook/addRole',
    name: 'addRole',
    component: () => import('./views/RoleManage/AddRole.vue'),
    meta: {
      parentName: '角色管理',
      title: '新增角色',
    }
  },
  {
    path: '/addressBook/editRole/:id',
    name: 'editRole',
    component: () => import('./views/RoleManage/EditRole.vue'),
    meta: {
      parentName: '角色管理',
      title: '编辑角色',
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: fixedRouter
})

export default router
