import { createApp } from 'vue'
import './style/index.less'
import { createVuetify } from 'vuetify'
import App from './App.vue'

// Translations provided by Vuetify
import { pl, zhHans } from 'vuetify/locale'

const app = createApp(App)

const vuetify = createVuetify({
  locale: {
    locale: 'zhHans',
    messages: { zhHans, pl },
  },
})

app.use(vuetify)
app.mount('#app')
