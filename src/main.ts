import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './components/i18n/i18n'

import App from './App.vue'

// 1. Styles
import '@/assets/stylesheets/global.scss'
import '@/assets/stylesheets/card.scss'
import '@/assets/stylesheets/mixins.scss'

const app = createApp(App)

app.use(createPinia())
app.use(i18n)

app.mount('#app')
