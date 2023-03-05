import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCounterSetupStore = defineStore('counter-setup', () => {
	const count = ref<number>(0);
	const lastChange = ref<Date>();

	const incrementBy = (amount: number) => {
		count.value += amount;
		lastChange.value = new Date();
	};

	return {
		//state
		count,
		lastChange,
		//getters
		squaredCount: computed(() => count.value * count.value),
		//actions
		incrementBy,
		increment: () => incrementBy(1),
	};
});
