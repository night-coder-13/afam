<template>
    <Header />
    <div class="w-full">
        <div id="header"></div>
        <section class="w-11/12 md:w-9/12 lg:w-7/12 m-auto py-8">
            <h3>Our Travertine & Marble Quarries</h3>
            <p class="mt-2 ml-2 md:ml-4 text-gray-600 text-sm md:text-lg">Esfahan Travertine materials have been extracted from our quarries since 1993. From the same quarry basin the ancient Iranians extracted Travertine to build the most important Iranian cultural monuments. Today, our company continues to produce, extract, process and market Travertine & Marble and Made in Iran stone all over the world. Currently we operate throughout 24 hectares of land with three active quarries.</p>
            <Slider class="my-4" />
            <p class="mt-2 ml-2 md:ml-4 text-gray-600 text-sm md:text-lg">Our company pursues the entire production process from the extraction to the transformation of products. We extract over 30,000 m³ of travertine & marble products per year and through the employment of block cutters and gang-saws we reach a total output of 20,000 m² of finished products per month. The highly specialized team of workers allows to meet the design needs of the greatest architects, engineers and designers in the worlds market.</p>
            
            <img src="../../assets/img/map.jpg" class="w-full mt-20 mb-4" alt="">
            <p class="mt-2 ml-2 md:ml-4 text-gray-600 text-sm md:text-lg">Throughout this century of operations, our company has entered important partnership agreements with other leading quarries in the marble and granite field both in Iran and across the Globe. We offer on top of Roman Travertine materials additional natural stones seeking to be a reference point in qualitative stone supply leveraging on our Made in Iran brand.</p>
        </section>
    </div>
    <Footer />
</template>

<script setup>
import Header from '../home-sections/hed.vue'
import Footer from '../home-sections/footer.vue'
import Slider from './slider.vue'
import { onBeforeRouteLeave } from 'vue-router';
onBeforeRouteLeave((to, from) =>{
    console.log(to, from)
    // called when the route that renders this component is about to be navigated away from.
    // As with `beforeRouteUpdate`, it has access to `this` component instance.
  })
</script>

<style scoped>
#header{
    background: url(../../assets/img/head-img-quarry.jpg);
    height: 65vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 80%;
}
@media only screen and (max-width: 991px){
    #header{
        padding-bottom: 40%;
    }
}
</style>