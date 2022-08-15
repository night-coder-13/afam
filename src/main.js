import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import './assets/components/themify-icons/themify-icons.css'
import router from './router'
// importing AOS css style globally
import 'aos/dist/aos.css'

const app=createApp(App)
app.use(router)
app.mount('#app')