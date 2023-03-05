import { defineStore } from 'pinia';

interface CounterOptionsState {
	count: number;
	lastChanged?: Date;
}

export const useCounterOptionsStore = defineStore('counter-options', {
	state: () =>
		({
			count: 0,
			lastChanged: new Date(),
		} as CounterOptionsState),

	getters: {
		doubleCount(): number {
			return this.count * 2;
		},
	},
	actions: {
		increment(): void {
			this.count++;
			this.lastChanged = new Date();
		},
		incrementBy(amount: number): void {
			this.count += amount;
			this.lastChanged = new Date();
		},
	},
});
