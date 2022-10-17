import { createApp } from 'vue'
import App from './App.vue'
import { store } from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import './assets/css/font.css'
import './assets/css/border.css'
import './assets/css/button.css'
import './assets/css/input.css'
import './assets/css/margin-padding.css'
import './assets/css/table.css'
import './assets/css/cards.css'
import './assets/css/popup.css'


import router from './router'
// createApp(App).mount('#app')

const app = createApp(App)


app.use(router)
app.use(store)

app.mount('#app')