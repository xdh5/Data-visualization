/* eslint-disable*/
import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
Vue.use(Router)

// 解决导航栏报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

const routes = [
  {
    path: "/",
    redirect: { name: "home" }
  }
]
const pages = ["home", "classify", "clustering", "search", "upload","waiting"]
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

// 强制跳转
router.beforeEach((to, from, next) => {
  if (store.state.mode !== 'normal' && to.name !== 'waiting') {
    next({ name: 'waiting' })
  } else {
    next()
  }
})

export default router
