<template>
    <Header />
    <Suspense>
        <template #default>
            <Awit />
        </template>
        <template #fallback>
            <span>Loading...</span>
        </template>
    </Suspense>
    <Footer />
</template>

<script setup>
import Header from '../home-sections/hed.vue'
import Footer from '../home-sections/footer.vue'
import Awit from '../awit.vue'
import { onBeforeRouteLeave } from 'vue-router';
onBeforeRouteLeave((to, from) =>{
    console.log(to, from)
    // called when the route that renders this component is about to be navigated away from.
    // As with `beforeRouteUpdate`, it has access to `this` component instance.
  })
</script>

<style scoped>

</style>