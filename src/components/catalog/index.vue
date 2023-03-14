<template>
    <Header />
    <Suspense>
        <template #default>
            <Slider />
        </template>
        <template #fallback>
           
        </template>
    </Suspense>
    <!-- <Footer /> -->
</template>

<script setup>
import Header from '../home-sections/hed.vue'
// import Footer from '../home-sections/footer.vue'
import Slider from './slider.vue'
// import { onBeforeRouteLeave } from 'vue-router';
// onBeforeRouteLeave((to, from) =>{
//     console.log(to, from)
    // called when the route that renders this component is about to be navigated away from.
    // As with `beforeRouteUpdate`, it has access to `this` component instance.
//   })
</script>

<style scoped>

</style>