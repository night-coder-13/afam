<template>
    <Header />
    <div class="w-full">
        <div id="header"></div>
        <section>
            <h3>Our Travertine & Marble Quarries</h3>
            <p class="ml-2 text-sm">Esfahan Travertine materials have been extracted from our quarries since 1993. From the same quarry basin the ancient Iranians extracted Travertine to build the most important Iranian cultural monuments. Today, our company continues to produce, extract, process and market Travertine & Marble and Made in Iran stone all over the world. Currently we operate throughout 24 hectares of land with three active quarries.</p>
            <p class="ml-2 text-sm">Throughout this century of operations, our company has entered important partnership agreements with other leading quarries in the marble and granite field both in Iran and across the Globe. We offer on top of Roman Travertine materials additional natural stones seeking to be a reference point in qualitative stone supply leveraging on our Made in Iran brand.</p>
        </section>
    </div>
    <!-- <Footer /> -->
</template>

<script setup>
import Header from '../home-sections/hed.vue'
// import Footer from '../home-sections/footer.vue'
import Slider from './slider.vue'
import { onBeforeRouteLeave } from 'vue-router';
onBeforeRouteLeave((to, from) =>{
    console.log(to, from)
    // called when the route that renders this component is about to be navigated away from.
    // As with `beforeRouteUpdate`, it has access to `this` component instance.
  })
</script>

<style scoped>

</style>