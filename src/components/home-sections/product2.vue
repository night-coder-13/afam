<template>
   <div class="w-full lg:w-10/12 m-auto px-12 my-32">
    <p class="text-3xl font-bold text-center mb-6 Acme">Product</p>
    <div class="sm:grid sm:grid-cols-2 lg:grid-cols-4 items product--slider">
      <router-link :to="{name:'Archive'}">
         <div class="box-productimg mx-2 my-3 rounded-xl relative overflow-hidden">
            <div class="w-full absolute h-full flex justify-center items-center"><p class="text-lg text-white">lorem ipsum</p></div>
            <img src="../../assets/img/1-26.jpg" class="h-full w-full" alt="">
         </div>
      </router-link>
      <router-link :to="{name:'Archive'}" class="item--slider">
         <div class="box-productimg relative mx-2 my-3 rounded-xl overflow-hidden">
            <div class="w-full absolute h-full flex justify-center items-center"><p class="text-lg text-white">lorem ipsum</p></div>
            <img src="../../assets/img/1-27.jpg" class="img h-full w-full" alt="">
         </div>
      </router-link>
      <router-link :to="{name:'Archive'}" class="item--slider">
         <div class="box-productimg relative mx-2 my-3 rounded-xl overflow-hidden">
            <div class="w-full absolute h-full flex justify-center items-center"><p class="text-lg text-white">lorem ipsum</p></div>
            <img src="../../assets/img/1-29.jpg" class="img h-full w-full" alt="">
         </div>
      </router-link>
      <router-link :to="{name:'Archive'}" class="item--slider">
         <div class="box-productimg relative mx-2 my-3 rounded-xl overflow-hidden">
            <div class="w-full absolute h-full flex justify-center items-center"><p class="text-lg text-white">lorem ipsum</p></div>
            <img src="../../assets/img/1-26.jpg" class="img h-full w-full" alt="">
         </div>
      </router-link>
      <router-link :to="{name:'Archive'}" class="item--slider">
         <div class="box-productimg mx-2 my-3 rounded-xl relative overflow-hidden">
            <div class="w-full absolute h-full flex justify-center items-center"><p class="text-lg text-white">lorem ipsum</p></div>
            <img src="../../assets/img/1-26.jpg" class="h-full w-full" alt="">
         </div>
      </router-link>
      <router-link :to="{name:'Archive'}" class="item--slider">
         <div class="box-productimg relative mx-2 my-3 rounded-xl overflow-hidden">
            <div class="w-full absolute h-full flex justify-center items-center"><p class="text-lg text-white">lorem ipsum</p></div>
            <img src="../../assets/img/1-27.jpg" class="img h-full w-full" alt="">
         </div>
      </router-link>
      <router-link :to="{name:'Archive'}" class="item--slider">
         <div class="box-productimg relative mx-2 my-3 rounded-xl overflow-hidden">
            <div class="w-full absolute h-full flex justify-center items-center"><p class="text-lg text-white">lorem ipsum</p></div>
            <img src="../../assets/img/1-29.jpg" class="img h-full w-full" alt="">
         </div>
      </router-link>
      <router-link :to="{name:'Archive'}" class="item--slider">
         <div class="box-productimg relative mx-2 my-3 rounded-xl overflow-hidden">
            <div class="w-full absolute h-full flex justify-center items-center"><p class="text-lg text-white">lorem ipsum</p></div>
            <img src="../../assets/img/1-26.jpg" class="img h-full w-full" alt="">
         </div>
      </router-link>
        
    </div>
   </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import {clickScroll} from '../../scroll.js'

onMounted(()=>{
    clickScroll('.items')
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-productimg div{
   opacity: 0;
   z-index: 99;
   background: rgba(12, 12, 12, 0.103);
}
.box-productimg:hover div{
   opacity: 1;
   transition: .5s;
}
.box-productimg:hover img{
    filter: grayscale(1);
    transform: scale(1.2);
    transition: .7s;
    
}

@media only screen and (max-width: 500px){
   .product--slider{
      display: flex;
      flex-wrap: nowrap;
      overflow-x: scroll;
      /* scroll-snap-type: x mandatory; */
      scroll-padding: 4px;
      gap: 0;
   }
   .product--slider:focus{
      cursor: grabbing;
   }
   .product--slider .item--slider{
      flex: 0 0 47%;
      scroll-snap-align: start;
   }
}
</style>
