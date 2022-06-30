import { createApp } from 'vue'

// import AmberMobileUI from '../dist/index/index'
// import '../dist/index/index.css'

import AmberMobileUI from '../packages/components/index'

// import AmButton from "../packages/components/button";

import App from './App.vue'
import router from './router'

createApp(App).use(router).use(AmberMobileUI).mount('#app')
