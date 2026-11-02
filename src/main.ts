/*
 * @Description: 應用入口
 * @Version: 1.0
 * @Autor: GiottoLLL7
 * @Date: 2024-05-25 12:38:23
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2026-10-29 17:35:00
 */
import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

// 引入 Font Awesome 圖示
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faPhone,
  faEnvelope,
  faSquarePollHorizontal,
  faCheckCircle,
  faUsers,
  faBriefcase,
  faClock,
  faXmark,
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlassPlus
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

// 引入 Tailwind CSS
import './styles/Tailwind.css'

library.add(
  faPhone,
  faEnvelope,
  faSquarePollHorizontal,
  faCheckCircle,
  faUsers,
  faBriefcase,
  faClock,
  faXmark,
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlassPlus,
  faWhatsapp
)

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
