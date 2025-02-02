// Plugins
import { registerPlugins } from '@/plugins';

import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

const app = createApp(App)

registerPlugins(app)

app.use(router).mount('#app');
