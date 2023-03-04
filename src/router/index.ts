import { createRouter, createWebHistory } from 'vue-router';
import CounterPage from '@/pages/CounterPage.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: CounterPage,
		},
	],
});

export default router;
