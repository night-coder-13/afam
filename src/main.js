import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import './assets/components/themify-icons/themify-icons.css'
import router from './router'

const app=createApp(App)
app.use(router)
app.mount('#app')