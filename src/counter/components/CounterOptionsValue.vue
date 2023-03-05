<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/counter-options';

const counterStore = useCounterOptionsStore();
</script>
<template>
	<h4>El valor es:{{ counterStore.count }}</h4>
	<h5>Ultimo cambio:{{ counterStore.lastChanged }}</h5>
</template>
