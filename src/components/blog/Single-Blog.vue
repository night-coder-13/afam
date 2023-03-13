<template>
    <Header />
        <div class="w-full" data-aos="fade-up" id="product">
            <div class="w-full h-52 overflow-hidden">
                <div class="absolute mt-20 z-10 text-center w-full ">
                    <p class="text-white font-bold text-2xl md:text-3xl" v-text="singleBlog.title"></p>
                    <hr class="w-48 mx-auto opacity-70 mt-1 bg-gray-100">
                    <p class="text-gray-100 text-small md:text-lg">
                        <span class="mr-3">2022-9-16</span><span class="mr-3">22 : 19</span><span class="mr-3">By : admin</span>
                    </p>
                </div>
                <div class="mt-8 sm:mt-0 img-hed relative">
                    <div class="cover-head-singleblog"></div>
                    <img :src="singleBlog.image" id="img-head" class="w-full -mt-80" alt="">
                </div>
            </div>
            <div class="flex md:flex-row flex-col">
                
                <div class="w-full md:w-7/12 px-6 md:px-0 m-auto">
                    <!-- <h4 class="text-2xl font-bold Acme mt-5 mb-2 capitalize notranslate" >hi</h4> -->
                    <div class="mt-3 ml-1">
                        <div class="text-base ml-4 text-gray-600">
                            <img :src="singleBlog.image" class="m-4 rounded-lg" alt="">
                            <div v-html="singleBlog.content">
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div><!---->
           
           
        </div>
        
        <hr class="my-4">
        
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
                        <router-link :to="{name:'Blog' , params:{id: 1 } }" class="px-6 py-2 text-sm bg-gray-150 rounded-lg text-blue-400 shadow text-bold">Read more</router-link>
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
    <Footer />
</template>
   
<script setup>
import Footer from '../home-sections/footer.vue'
import Header from '../home-sections/hed.vue'
import VLazyImage from "v-lazy-image";
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core';
    const route=useRoute();
    const store=useStore();
    const slod=computed(()=>store.getters.getLoader)
    const singleBlog=computed(()=>store.state.singleBlog)
    async function getBlog(){
        if(!slod.value)
            store.commit('ChangeLoader')
        await store.dispatch('GetSingleBlog',route.params.id)
        if(slod.value)
            store.commit('ChangeLoader')
console.log(singleBlog.value);
    }
    getBlog()
</script>
<style >
.cover-head-singleblog{
    position: absolute;
    background: #0000005c;
    z-index: 9;
    width: 100%;
    height: 100%;
}
img{
    border-radius: 10px;
}
#img-head{
    filter: blur(2px) grayscale(.8);
    background-color: rgba(0, 0, 0, .5);
}
.title{
    font-size: 2.5em !important;
    margin: 10px 0;
}
.description{
    font-size: 1em !important;
    margin: 8px 5px;
}
.btn-blog-lg{
    width: 200px;
    text-align: center;
    padding: 8px;
    border-radius: 10px;
    font-size: 1.1em !important;
    background-color: #33a1f5;
    color: #fefefe;
    margin: 8px;
}
.btn-blog-md{
    width: 150px;
    text-align: center;
    padding: 8px;
    border-radius: 10px;
    font-size: 1.1em !important;
    background-color: #33a1f5;
    color: #fefefe;
    margin: 8px;
}
</style>