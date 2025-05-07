/*
 * @Description: 
 * @Version: 0.1
 * @Autor: GiottoLLL7
 * @Date: 2024-05-25 12:38:23
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2025-02-19 21:44:41
 */
/*
 * @Description: main.ts
 * @Version: 0.1
 * @Autor: GiottoLLL7
 * @Date: 2024-05-25 12:38:23
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2024-05-26 00:04:36
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入font anwesome图标
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone,faEnvelope,faUser,faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


// 引入Tailwind.css
import "./styles/Tailwind.css"

library.add(faPhone, faEnvelope, faUser, faSquarePollHorizontal, faWhatsapp);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
