import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import './assets/components/themify-icons/themify-icons.css'
import router from './router'
// importing AOS css style globally
import 'aos/dist/aos.css'
import VueScrollTo  from '../node_modules/vue-scrollto/vue-scrollto';
import Popper from "vue3-popper";
import store from './store/index.js'
import VueMeta from 'vue-meta'
import { createMetaManager } from 'vue-meta'
import { VueTypedJs } from 'vue-typed-js'



const app=createApp(App)
app.use(VueTypedJs)
app.use(store)
app.component("Popper", Popper)
app.use(router)
app.use(VueScrollTo)
app.use(VueMeta)
app.use(createMetaManager())

app.mount('#app')

//fkJcW9yI