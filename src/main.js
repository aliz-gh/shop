import './assets/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'


// import Swiper styles






const app = createApp(App)

app.use(router)

app.mount('#app')
document.querySelector("#home-news > svg")