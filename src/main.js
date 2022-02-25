import { createApp } from 'vue'
import App from './App.vue'
import { followMinix } from './followMixin'
createApp(App).mixin(followMinix).mount('#app')
// const app = createApp(App)
// app.mixin(followMinix)
// app.mount('#app')

 