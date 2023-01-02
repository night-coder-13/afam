<template>
    <!-- <div id="develop"></div> -->
   <div class="w-full px-8 lg:px-12 my-10 sm:my-28 md:my-32">
    <!-- <p class="text-2xl font-bold text-center mb-6">Blog</p> -->
    <div class="flex flex-col lg:flex-row items-center">
        <div class="w-full hidden sm:block md:w-6/12 lg:w-4/12">
            <div class="blog-title flex justify-center items-center">
                <div class="w-9/12 sm:w-6/12 m-auto relative">
                    <h3 class="font-bold Acme">Blog</h3>
                    <p class="text-base text-gray-500 ml-3 mt-1">Discover AFAM Trade (marble and Travertine) latest News.
Click on your preferred article or choose a news category.</p>
                    <a class="absolute right-8 -bottom-10 text-blue-500" href="#">Show all <i class="ti-arrow-circle-right text-sm"></i></a>

                </div>
            </div>
        </div>
        <div class="sm:hidden block">
            <h3 class="font-bold Acme">Blog</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 md:w-8/12 m-auto items--slider">
            <div class="rounded-xl shadow-md mx-2 mt-4 bg-gray-100 item--slider">
                <div class="w-full h-44 overflow-hidden">
                    <v-lazy-image class="w-full rounded-t-xl"
                    :src-placeholder="require('../../assets/gif/loader-img.gif')"
                    :src="require('../../assets/img/images.jpg')" alt="Image blog"/> 
                </div>
                
                <div class="py-3 px-1">
                    <p class="text-sm text-gray-400"> <i class="ti-time"></i> 2022-11-25 </p>
                    <h2 class="text-lg ml-3 mt-2">Lorem ipsum, dolor sit amet consectetur</h2>
                    <div class="flex items-center justify-around  mt-6">
                        <button class=" "><i class="ti-heart text-red-400"></i> +158</button>
                        <button class="px-6 py-2 text-sm bg-gray-150 rounded-lg text-blue-400 shadow text-bold">Read more</button>
                    </div>
                </div>
            </div>
            
            <div class="rounded-xl shadow-md mx-2 mt-4 item--slider">
                <div class="w-full h-44 overflow-hidden">
                    <v-lazy-image class="w-full rounded-t-xl"
                    :src-placeholder="require('../../assets/gif/loader-img.gif')"
                    :src="require('../../assets/img/21.jpg')" alt="Image blog"/> 
                </div>
                
                <div class="py-3 px-1">
                    <p class="text-sm text-gray-400"> <i class="ti-time"></i> 2022-11-25 </p>
                    <h2 class="text-lg ml-3 mt-2">Lorem ipsum, dolor sit amet consectetur</h2>
                    <div class="flex items-center justify-around  mt-6">
                        <button class=" "><i class="ti-heart"></i> +20</button>
                        <button class="px-6 py-2 text-sm bg-gray-150 rounded-lg text-blue-400 shadow text-bold">Read more</button>
                    </div>
                </div>
            </div>
            
            <div class="rounded-xl shadow-md mx-2 mt-4 item--slider">
                <div class="w-full h-44 overflow-hidden">
                    <v-lazy-image class="w-full rounded-t-xl"
                    :src-placeholder="require('../../assets/gif/loader-img.gif')"
                    :src="require('../../assets/img/s_limestone_6272.jpg')" alt="Image blog"/> 
                </div>
                
                <div class="py-3 px-1">
                    <p class="text-sm text-gray-400"> <i class="ti-time"></i> 2022-11-25 </p>
                    <h2 class="text-lg ml-3 mt-2">Lorem ipsum, dolor sit amet consectetur</h2>
                    <div class="flex items-center justify-around  mt-6">
                        <button class=" "><i class="ti-heart"></i> +36</button>
                        <button class="px-6 py-2 text-sm bg-gray-150 rounded-lg text-blue-400 shadow text-bold">Read more</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
   </div>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core'
import {clickScroll} from '../../scroll.js'
import VLazyImage from "v-lazy-image";

onMounted(()=>{
    clickScroll('.items--slider')
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.blog-title{
    width: 100%;
    height: 350px;
    /* background: url(../../assets/Path\ 2106.svg);
    background-size: 105% 100%;
    background-position: center;
    background-repeat: no-repeat; */
}
@media only screen and (max-width: 500px){
   .items--slider{
   display: flex;
   flex-wrap: nowrap;
   overflow-x: scroll;
   /* scroll-snap-type: x mandatory; */
   scroll-padding: 0px;
   gap: 0;
}
.items--slider.active{
      cursor: grab;
   }
.items--slider .item--slider{
   flex: 0 0 85%;
   scroll-snap-align: start;
}
}
</style>
