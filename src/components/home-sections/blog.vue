<template>
    <!-- <div id="develop"></div> -->
   <div class="w-full px-8 lg:px-12 mb-10 sm:my-10 sm:my-28 md:my-32">
    <!-- <p class="text-2xl font-bold text-center mb-6">Blog</p> -->
    <div class="flex flex-col lg:flex-row items-center">
        <div class="w-full  md:w-6/12 lg:w-4/12 h-80">
            <div class="blog-title flex justify-center items-center">
                <div class="w-full sm:w-6/12 sm:m-auto sm:mb-12 -mt-20 relative">
                    <h3 class="font-bold Acme">Blog</h3>
                    <p class="text-base text-gray-500 ml-2 sm:ml-3 mt-1">
                        Read and subscribe to AFAM Stone company latest News, updates and products surrounding natural stones, quarries, transportation and us.
                    </p>
                    <router-link :to="{name : 'Blog'}" class="absolute left-2 -bottom-12 text-gray-800 border-blue-400 border-2 px-5 py-1 rounded-full hover:bg-blue-400 hover:text-white">Show all</router-link>

                </div>
            </div>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-11/12 md:w-8/12 m-auto items--slider">
            <router-link :to="{name:'SingleBlog' , params:{id: b.id } }" v-for="(b,index) in blog" :key="index" class="rounded-xl shadow-md mx-2 mt-4 bg-gray-100 item--slider">
                <div class="w-full h-44 overflow-hidden">
                    <v-lazy-image class="h-full w-full rounded-t-xl"
                    :src-placeholder="require('../../assets/gif/loader-img.gif')"
                    :src="b.image" alt="Image blog"/> 
                </div>
                
                <div class="py-3 px-1">
                    <p class="text-sm text-gray-400"> <i class="ti-time"></i> {{ b.date }} </p>
                    <h2 class="text-lg ml-3 mt-2" v-text="b.title"></h2>
                    <div class="flex items-center justify-around  mt-6">
                        <!-- <button class=" "><i class="ti-heart text-red-400"></i> +158</button> -->
                        <router-link :to="{name:'SingleBlog' , params:{id: b.id } }" class="px-6 py-2 text-sm bg-gray-150 rounded-lg text-blue-400 shadow text-bold">Read more</router-link>
                    </div>
                </div>
            </router-link>
            
        </div>
    </div>
   </div>
</template>

<script setup>
import { onMounted , computed } from '@vue/runtime-core'
import {clickScroll} from '../../scroll.js'
import VLazyImage from "v-lazy-image";
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

onMounted(()=>{
    clickScroll('.items--slider')
})
    const route=useRoute();
    const store=useStore();
    const slod=computed(()=>store.getters.getLoader)
    const blog=computed(()=>store.state.blog)
    async function getBlog(){
        await store.dispatch('GetBlog')
    }
    getBlog()
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
