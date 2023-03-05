import CounterPage from '@/counter/pages/CounterPage.vue';
import CounterSetupPage from '@/counter/pages/CounterSetupPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: CounterPage,
		},
		{
			path: '/counter-setup',
			name: 'counter-setup',
			component: CounterSetupPage,
		},
	],
});

export default router;
