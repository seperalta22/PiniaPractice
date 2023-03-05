<script setup lang="ts">
import { useCounterSetupStore } from '@/store/counter-setup';

const counterStore = useCounterSetupStore();
</script>
<template>
	<h4>El valor es:{{ counterStore.count }}</h4>
	<h5>Ultimo cambio:{{ counterStore.lastChange }}</h5>
</template>
