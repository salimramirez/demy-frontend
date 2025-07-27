import { createApp } from 'vue';
import './style.css';
import App from './app.vue';
import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';
import 'primeicons/primeicons.css';

import {
    Button
} from "primevue";

createApp(App)
    .use(PrimeVue, {
        theme: {
            preset: Material,
            options: {
                prefix: 'p',
                darkModeSelector: 'system'
            }
        },
        ripple: true
    })
    .component('pv-button', Button)
    .mount('#app');