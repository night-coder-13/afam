import { createRouter, createWebHistory } from 'vue-router'
import store from './store/index.js'
    // const store=useStore();
    const routes = [
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './components/views/About.vue')
      },
      {
        path: '/', name: 'Home', component: () => import('./components/home.vue')
      },
      {
        path: '/product', name: 'Product', component: () => import('./components/product/index.vue')
      },
      {
        path: '/archive/:id', name: 'Archive', component: () => import('./components/archive/index.vue')
      },
      {
        path: '/about', name: 'About', component: () => import('./components/about/index.vue')
      },
      {
        path: '/quarries', name: 'Quarries', component: () => import('./components/quarries/index.vue')
      },
      {
        path: '/test', name: 'Test', component: () => import('./components/test.vue')
      },
    ]
    const router = createRouter({
        history : createWebHistory(),
        routes: routes,
        scrollBehavior (to) {
          if (to.hash) {
             return { el: to.hash }
          }
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve({ left: 0, top: 0 })
            }, 100)
          })
        }
    })
    router.beforeEach((to, from, next) => {
      store.getters.changeLoader;
      // if the user is not authenticated, `next` is called twice
      next()
    })
    router.afterEach(() => {
      store.getters.changeLoader;
      // sendToAnalytics(to.fullPath)
    })
    export default router