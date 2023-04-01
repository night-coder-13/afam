import { createRouter, createWebHistory } from 'vue-router'
import store from './store/index.js'
    // const store=useStore();
    const routes = [
      {
        path: '/', name: 'Home', component: () => import('./components/home.vue'),meta :{title:'AFAM Trading | HOME',description: "This is the home page",},
        // beforeEnter: (to, from,next) => {
        //   console.log(to.path)
        //   console.log(from.name)
        //   if(from.name === 'Archive')
        //     next()
        // },  
      },
      {
        path: '/product/:id', name: 'Product', component: () => import('./components/product/index.vue'),meta :{title:'AFAM Trading | Product'}
      },
      {
        path: '/archive/:id', name: 'Archive', component: () => import('./components/archive/index.vue'),meta :{title:'AFAM Trading | Archive Product'}
      },
      {
        path: '/about', name: 'About', component: () => import('./components/about/index.vue'),meta :{title:'AFAM Trading | About us'}
      },
      {
        path: '/quarries', name: 'Quarries', component: () => import('./components/quarries/index.vue'),meta :{title:'AFAM Trading | Quarries'}
      },
      {
        path: '/catalog', name: 'Catalog', component: () => import('./components/catalog/index.vue'),meta :{title:'AFAM Trading | Catalog'}
      },
      {
        path: '/single-blog/:id', name: 'SingleBlog', component: () => import('./components/blog/Single-Blog.vue'),meta :{title:'AFAM Trading | Blog'}
      },
      {
        path: '/blog', name: 'Blog', component: () => import('./components/blog/index.vue'),meta :{title:'AFAM Trading | All Blog'}
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
      document.title = `${to.meta.title}`;
      if(to.fullPath !== from.fullPath)
        store.getters.changeLoader;
      
      // if the user is not authenticated, `next` is called twice
      // console.log(from.name)
      // if(from.name === 'Archive')
      //   next({name : 'Home' , hash : '#products'})
      // else
        next()
    })
    router.afterEach((to,from) => {
      if(to.fullPath !== from.fullPath)
        store.getters.changeLoader;
      
      // sendToAnalytics(to.fullPath)
    })
    export default router