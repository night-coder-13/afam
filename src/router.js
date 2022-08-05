import { createRouter, createWebHistory } from 'vue-router'
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
      }
    ]
    const router = createRouter({
        history : createWebHistory(),
        routes: routes
    })
    export default router