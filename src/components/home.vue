<template>
    <Hed />
    <Header data-aos="fade-up" />
    <Customer  data-aos="fade-up" />
    <Vision data-aos="fade-up" />
    <Newsletter data-aos="fade-up" />
    <Feature data-aos="fade-up" />
    <Product data-aos="fade-up" />
    <!-- <Quarries data-aos="fade-up" /> -->
    <Blog data-aos="fade-up" />
    <Contact data-aos="fade-up" />
    <Footer />
</template>

<script setup>
import Hed from './home-sections/hed.vue'
import Header from './home-sections/header.vue'
import Customer from './home-sections/customer.vue'
import Vision from './home-sections/vision.vue'
import Feature from './home-sections/feature.vue'
import Product from './home-sections/product.vue'
// import Quarries from './home-sections/quarries.vue'
import Blog from './home-sections/blog.vue'
import Contact from './home-sections/contact.vue'
import Footer from './home-sections/footer.vue'
import Newsletter from './home-sections/newsletter.vue'
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
