<template>
    <Hed />
    <Header data-aos="fade-up" />
    <About  data-aos="fade-up" />
    <Whatsapp />
    <Product data-aos="fade-up" />
    <Newsletter data-aos="fade-up" />
    <!-- <Feature data-aos="fade-up" /> -->
    <Vision data-aos="fade-up" />
    <!-- <Quarries data-aos="fade-up" /> -->
    <!-- <Blog data-aos="fade-up" /> -->
    <Contact data-aos="fade-up" />
    <Footer />
</template>

<script setup>
import Whatsapp from './whatsapp.vue'
import Hed from './home-sections/hed.vue'
import Header from './home-sections/header.vue'
import About from './home-sections/about.vue'
import Vision from './home-sections/vision.vue'
import Feature from './home-sections/feature.vue'
import Product from './home-sections/product.vue'
// import Quarries from './home-sections/quarries.vue'
import Blog from './home-sections/blog.vue'
import Contact from './home-sections/contact.vue'
import Footer from './home-sections/footer.vue'
import Newsletter from './home-sections/newsletter.vue'
// import { onBeforeRouteUpdate } from 'vue-router'


// onBeforeRouteUpdate(async (to, from) => {
//     console.log(to.fullPath)
//     console.log(from.fullPath)
// })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
#develop{
    width: 90%;
    height: 100%;
    display: block;
    position: absolute;
    z-index: 99;
    background-color: #e5e5f7;
    opacity: 0.7;
    border-radius: 5px;
    background: repeating-linear-gradient( 45deg, #f78a45, #f78a45 3.5px, #e5e5f7 3.5px, #e5e5f7 17.5px );
}
</style>
