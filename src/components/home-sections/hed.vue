<template>
    <nav class="flex w-full px-10 py-3 justify-between text-lg font-medium">
        <div>
            <ul class="flex ">
                <router-link class="px-2 m-1" :to="{name : 'Home'}">Home</router-link>
                <!-- <router-link :to="{name : 'Product'}"></router-link> -->
                <!-- <p @click.prevent="Scroll('contact-us')" :to="{}">Contact us</p> -->
                <router-link @click.prevent="Scroll('contact-us')" :to="{ name: 'Home', hash: '#contact-us' }">Contact Us</router-link>
                <router-link class="px-2 m-1" :to="{name : 'About'}">About us</router-link>
                <!-- <router-link :to="{name : 'Catalog'}">Catalog</router-link> -->
            </ul>
        </div>
        <div class="flex justify-center items-center pr-6">
            <img src="../../assets/logo.png" class="w-24" alt="">
            <p class="font-bold Acme">AFAM TREAD</p>
        </div>
    </nav>
</template>

<script setup>
import {smoothScroll} from '../../scroll'
// import { useRoute } from 'vue-router';

// const router=useRoute()
// function scroll(){
//     let el=document.getElementById("contact-us").offsetTop
//     let i=0
//     // alert(el)
//     // window.scrollTo(0, el)
    
//         setInterval(()=>{
//             if(i < el){
//                 window.scrollTo(0, i)
//                 i++
//             }else{
                
//             }
//     },1)
    
// }
function Scroll(id){
    smoothScroll(id);
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
