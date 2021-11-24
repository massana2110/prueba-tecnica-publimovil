import {createApp} from 'vue';
import App from './App.vue';
import store from './store/index';
import Particles from 'particles.vue3';

import './tailwind.css';

createApp(App).use(Particles).use(store).mount('#app');
