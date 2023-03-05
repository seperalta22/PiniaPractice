<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterSetupStore } from '../../store/counter-setup';
import CounterSetupValue from '../components/CounterSetupValue.vue';

const storedCounter = useCounterSetupStore();

const { count, squaredCount } = storeToRefs(storedCounter); //! storeToRefs is a helper function to convert the store to a reactive object
const { increment, incrementBy } = storedCounter; //! $reset is a special function that resets the store to its initial state
</script>

<template>
	<h1>Pinia Options</h1>
	<hr />
	<br />
	<h2>Counter : {{ count }}</h2>
	<h2>Square : {{ squaredCount }}</h2>

	<br />
	<button @click="increment()">+1</button>
	<button @click="incrementBy(2)">+2</button>
	<button @click="incrementBy(5)">+5</button>
	<button @click="storedCounter.$reset()">Reset</button>

	<br />
	<br />

	<CounterSetupValue />
</template>

<style scoped></style>
