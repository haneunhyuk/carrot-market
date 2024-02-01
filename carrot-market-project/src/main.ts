import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/scss/style.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

createApp(App).use(router).mount('#app')
