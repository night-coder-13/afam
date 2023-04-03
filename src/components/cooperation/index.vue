<template>
   <Desktop v-if="width > 450" />
   <Mobail v-else />
</template>

<script setup>
import { ref } from 'vue';
import Desktop from './index_desktop.vue'
import Mobail from './index_mobail.vue'
const width = ref(screen.width)
</script>

<style scoped>

</style>