/* eslint-disable*/
import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
Vue.use(Router)

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

const routes = [
  {
    path: "/",
    redirect: { name: "home" }
  },
  {
    path: '/user/login',
    name: 'login',
    component: () =>
      import(
        `../pages/user/login.vue`
      )
  },
  {
    path: '/user/register',
    name: 'register',
    component: () =>
      import(
        `../pages/user/register.vue`
      )
  },
  {
    path: '/user/forget',
    name: 'forget',
    component: () =>
      import(
        `../pages/user/forget.vue`
      )
  }
]
const pages = ["home", "atlas", "overview", "search", "recommend","upload","spider"]
pages.forEach(element => {
  routes.push({
    path: '/' + element,
    name: element,
    component: () =>
      import(
        `../pages/${element}/index.vue`
      )
  })
})

const router = new Router({
  routes,
  mode: "history"
})

router.beforeEach((to, from, next) => {
  // 未登录时跳转登陆页
  if (!store.state.user && to.name !== 'login' && to.name !== 'register') {
    router.push({ name: 'login' })
    return
  }
  next()
});

export default router
