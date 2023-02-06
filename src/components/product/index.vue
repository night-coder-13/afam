<template>
    <div class="lightimage z-999 hidden w-full h-full animate__animated">
        <div @click="close" class="absolute z-10 bg-gray-700 opacity-20 w-full h-full "></div>

        <div class="relative w-full h-full center--center px-3 py-5">
            <div @click="close" class="z-999 absolute right-4 top-4 w-8 h-8 bg-gray-100 rounded-full center--center cursor-pointer"><i class="ti-close"></i></div>
            <img :src="product.image1[0]" id="image" class="max-h-100 m-3 z-20 rounded-lg " alt="">
        </div>
    </div>
    
    <Header />
        <div class="w-full" data-aos="fade-up" id="product">
            <div class="w-full h-52 overflow-hidden">
                <div class="mt-8 sm:mt-0 img-hed relative">
                    <img :src="product.image1[0]" id="img-head" class="w-full -mt-80" alt="">
                </div>
            </div>
            <div class="flex md:flex-row flex-col">
                <div class="w-full md:w-5/12 p-5">
                    <div @click="lightImage">
                        <v-lazy-image v-if="product.image2 !== undefined" class="w-10/12 m-auto rounded-xl shadow-md -mt-32"
                            :src-placeholder="require('../../assets/gif/loader-img.gif')"
                            :src="product.image2[0]" alt="Image blog"/> 
                        <v-lazy-image v-else class="w-10/12 m-auto rounded-xl shadow-md -mt-32"
                            :src-placeholder="require('../../assets/gif/loader-img.gif')"
                            :src="product.image1[0]" alt="Image blog"/> 
                    </div>
                </div>
                <div class="w-full md:w-7/12 px-6 md:px-0">
                    <h4 class="text-2xl font-bold Acme mt-5 mb-2 capitalize notranslate" v-text="product.title"></h4>
                    <div class="mt-3 ml-1">
                        <div class="text-base ml-4 text-gray-600">
                            <p class=" " v-text="product._description"></p>
                        </div>
                        
                    </div>
                    <div class="w-full sm:w-9/12 lg:w-7/12 m-auto mt-4">
                        <p class="text-xl font-bold mb-10">Usage :</p>
                        <div class="grid grid-cols-3 justify-items-center text-center">
                            <div>
                                <img src="../../assets/svg/p1.svg" class="w-14 h-14 m-auto" alt="">
                                <p class="text-base text-gray-500 font-bold mt-2">Bathroom and toilet</p>
                            </div>
                            <div>
                                <img src="../../assets/svg/p2.svg" class="w-14 h-14 m-auto" alt="">
                                <p class="text-base text-gray-500 font-bold mt-2">Offices</p>
                            </div>
                            <div>
                                <img src="../../assets/svg/p3.svg" class="w-14 h-14 m-auto" alt="">
                                <p class="text-base text-gray-500 font-bold mt-2">Buildings</p>
                            </div>
                        </div>
                    </div><!-- usage --->
                </div>
            </div><!---->
           
            <div class="w-full px-4 lg:w-8/12 m-auto mt-10 relative lg:order-none">
                <form class="w-full p-2 pb-3 mb-8 m-auto rounded-xl shadow-md bg-gray-50" action="">
                    <p class="text-lg font-bold mt-2 ml-1">Request registration</p>
                    <div class="grid md:grid-cols-2 grid-cols-1 ml-2">
                        <div>
                            <div class="grid my-4 mx-2">
                                <label for="">Name</label>
                                <input type="text" placeholder="Name" required class="w-11/12 rounded-lg px-3 py-2 mx-3 my-2 bg-gray-50 border border-gray-400">
                            </div>
                            <div class="grid my-4 mx-2">
                                <label for="">Number</label>
                                <input type="number" placeholder="Number" required class="w-11/12 rounded-lg px-3 py-2 mx-3 my-2 bg-gray-50 border border-gray-400">
                            </div>
                        </div>
                        <div>
                            <div class="grid my-4 mx-2">
                                <label for="">Email</label>
                                <input type="email" placeholder="Email" required class="w-11/12 rounded-lg px-3 py-2 mx-3 my-2 bg-gray-50 border border-gray-400">
                            </div>
                            <div class="grid my-4 mx-2">
                                <label for="">Discription</label>
                                <textarea type="text" placeholder="Discription" required class="rounded-lg  px-3 py-2 mx-3 my-2 bg-gray-50 border border-gray-400"></textarea>
                            </div>
                        </div>
                    </div>
                    
                    
                    <button class="ml-10 flex items-center -mt-2 px-5 py-1 text-lg rounded-lg bg-blue-400 text-white">send <img src="../../assets/Untitled-1-Recdovered.svg" class="w-6 mx-2" alt=""></button>
                </form>
            </div>
           
        </div>

    <Footer />


</template>

<script setup>
import Header from '../home-sections/hed.vue'
import Footer from '../home-sections/footer.vue'
import VLazyImage from "v-lazy-image";
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed, ref } from '@vue/runtime-core';


const route=useRoute();
const store=useStore();
const slod=computed(()=>store.getters.getLoader)
const product=computed(()=>store.state.product)
async function getArchive(){
    if(!slod.value)
        store.commit('ChangeLoader')
    await store.dispatch('GetProduct',route.params.id)
    if(slod.value)
        store.commit('ChangeLoader')

}
function lightImage(){
    // console.log(document.getElementById('image').height +'//'+ window.innerHeight) // for test
   
    document.querySelector('.lightimage').classList.remove('hidden')
    document.querySelector('.lightimage').classList.add('fixed')
    document.querySelector('.lightimage').classList.add('animate__fadeIn')
    document.querySelector('.lightimage').classList.remove('animate__fadeOut')

}
function close(){
    document.querySelector('.lightimage').classList.remove('animate__fadeIn')
    document.querySelector('.lightimage').classList.add('animate__fadeOut')
    setTimeout(()=>{
        document.querySelector('.lightimage').classList.remove('fixed')
        document.querySelector('.lightimage').classList.add('hidden')
    },700)
}

getArchive();

</script>

<style scoped>
#image{

}
.max-h-100{
    max-height: 100% !important;
}
.z-999{
    z-index: 99999;
}
#img-head{
    filter: grayscale(.9) blur(1px);
    position: absolute;
    z-index: -99;
}
.first-row-analysis th{
    padding: 0 10px;
}
@media only screen and (max-width: 400px){
    .img-hed{
        margin-top: 140px !important;
    }
}

</style>