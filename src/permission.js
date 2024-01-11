// 取到需要权限判断的路由表
import { permissionRouter, fixedRouter } from './router'
import router from './router'

let addRouFlag = false;

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token');
  console.log(token);
  if (token) {
    next();
    if (!addRouFlag) { 
      addRouFlag = true;
      console.log(fixedRouter.concat(permissionRouter));
      fixedRouter.concat(permissionRouter).forEach((itemRouter) => { 
        router.addRoute(itemRouter)
      })
      
      // 5.push之后，会重新进入到beforeEach的钩子里,直接进入第一个if判断
      router.push({
        path: to.path
      })
    }
  } else {
    // 用户没登录，跳转到登录页面
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

// // 路由守卫
// router.beforeEach((to, from, next) => {
//   if (to.path !== '/') {
//     const store = useStore()
//     if (store.routes.length < 1) {

//       GetRoutes().then(res => {
//         store.addRoutes(res.data.data, router)
//         next({ path: to.path, replace: true })

//       }).catch(_ => {
//         next()
//       })

//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

console.log(router);

// // 静态路由表
// const routes: Array<RouteRecordRaw> = [
//   {
//     // 路由重定向配置
//     path: '/',
//     redirect: '/Home'
//   }, {
//     path: '/Home',
//     component: () => import('../views/HomePage.vue')
//   }, {
//     // 404页面配置
//     path: '/:catchAll(.*)',
//     component: () => import('../views/Errors/404.vue')
//   }
// ]

// // 路由对象
// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

// // 路由守卫
// router.beforeEach((to, from, next) => {
//   if (to.path !== '/Home' && to.path !== '/') {
//     const store = useStore()
//     if (store.routes.length < 1) {

//       GetDynamicRoutes().then(res => {
//         store.addRoutes(res.data.data, router)
//         next({ path: to.path, replace: true })

//       }).catch(_ => {
//         next()
//       })

//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

export default router