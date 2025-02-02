import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '@/view/HomeView.vue';
import AboutView from '@/view/AboutView.vue';
import SearchView from './view/SearchView.vue';
import NotFoundView from './view/NotFoundView.vue';

const routes = [
    { path: '/', component: HomeView }, // Página Inicial.
    { path: '/about', component: AboutView }, // Página Sobre.
    { path: '/search', component: SearchView }, // Página de Procura.
    { path: '/:pathMatch(.*)*', component: NotFoundView }, // Página 404.
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;