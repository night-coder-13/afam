<template>
    <Header />
        <div class="w-full" data-aos="fade-up">
            <div class="w-full pb-4 overflow-hidden relative">
                <div class="w-full h-full bg-black absolute top-0 opacity-30 "></div>
                <div class="mt-10 sm:mt-0 img-hed " >
                    <img v-if="contentArchive.img_bg" :src="contentArchive.img_bg" id="img-head" class="w-full -mt-80" style="z-index: -99;" alt="">
                    <img v-else :src="contentArchive.img" id="img-head" class="w-full sm:-mt-80" style="z-index: -99;" alt="">
                    <div class="w-full p-4 -mt-14 sm:mt-0 z-10 relative">
                        <h4 class="text-2xl text-white font-bold Acme mt-5 mb-2 capitalize notranslate center--center" v-text="contentArchive.name"></h4>
                        <div class="text-base m-auto text-gray-100 w-11/12 md:w-7/12">
                            <p class="mb-2 text-center" v-text="contentArchive.description"></p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="flex mt-16" data-aos="fade-up">
                <Waypoint @change="onChange" class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 w-10/12 md:w-11/12 lg:w-10/12 m-auto items--slider">
                    <div v-for="item in archive" :key="item.id" class="item--slider">
                        <div v-if="loader" class="center-center">
                            <img :src="require('../../assets/gif/loader-img.gif')" alt="">
                        </div>      
                        <div v-else>
                            <div @click="lightImage(item.image1)">
                                <div class="mx-4 mt-3 mb-5 h-48 sm:h-60 relative archive rounded-xl overflow-hidden cursor-pointer">
                                    <div class="w-full bg-name rounded-b-xl h-full relative">
                                        <p class="absolute text-white bottom-3 text-lg left-2 font-bold" v-text="item.title"></p>
                                    </div>
                                    <v-lazy-image v-if="item.image1" class="img h-full w-full box-img"
                                        :src-placeholder="require('../../assets/gif/loader-img.gif')"
                                        :src="item.image1" :alt="item.name"/> 
                                    <v-lazy-image v-else class="img h-full w-full rounded-xl"
                                        :src-placeholder="require('../../assets/gif/loader-img.gif')"
                                        :src="require('../../assets/img/340719-200.png')" :alt="item.name == '' ? item.title : item.name"/> 
                                </div>
                            </div>
                        </div>
                    </div> 
                </Waypoint>
            </div>
        </div>

        <div class="hidden z-50 top-0 w-full h-full center--center lightimage animate__animated">
            <div @click="close()" class="bg-black w-full h-full opacity-40 absolute z-40"></div>
            <div class="grid items-center content-center h-full z-50 pt-10">
                <div class="pb-4 flex justify-center">
                    <i @click="close()" class=" text-black p-2 text-lg bg-white ti-close cursor-pointer font-bold hover:border-red-400 border border-white rounded-full"></i>
                    <i @click="viewgallery" class="bg-white ml-3 ti-layers-alt cursor-pointer text-black p-2 text-xl rounded-full"></i>
                </div>
                <div class="overflow-hidden mb-4">
                    <!-- <img src="../../assets/img/blog.jpg" class="h-120 rounded-md border-1 border-white" alt=""> -->
                    <Image :src="src" />  
                </div>
                <!-- <div class="text-center pb-10"></div> -->
            </div>
        </div>

        <div :class="view == true ? 'block' : 'hidden'" class="fixed inline-gallery-body top-0">
            <div :class="view == true ? 'block' : 'hidden'" id="inline-gallery-container" class="inline-gallery-container " ></div>
            <i @click="viewgallery" class="z-50 absolute btn-close left-2 ti-close text-gray-400 hover:text-gray-600 cursor-pointer font-bold mr-1 top-2 hover:border-red-400 border border-gray-400 p-1 rounded-full"></i>
        </div>
        
    <Footer />
</template>

<script setup>
import Header from '../home-sections/hed.vue'
import Footer from '../home-sections/footer.vue'
import { ref } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'
import {clickScroll} from '../../scroll'
import VLazyImage from 'v-lazy-image'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { Waypoint } from "vue-waypoint";
import Image from './image.vue'

import lightGallery from '../../../node_modules/lightgallery/lightgallery.min.js'
import lgZoom from '../../../node_modules/lightgallery/plugins/zoom/lg-zoom.min.js'
import lgThumbnail from '../../../node_modules/lightgallery/plugins/thumbnail/lg-thumbnail.min.js'
import { watchEffect } from 'vue'

const router= useRouter();
const route=useRoute();
const store=useStore();
const slod=computed(()=>store.getters.getLoader)
const loader=ref(true)
const archive=computed(()=>store.state.archive)
const contentArchive=computed(()=>store.state.contentArchive)
const view = ref(false);
const src = ref('');
const oldRouteId = ref(0);
oldRouteId.value = oldRouteId.value === 0 ? route.params.id : oldRouteId;

// onBeforeRouteLeave( (to, from) => {
//     console.log('to')
//     console.log(to.fullPath)
//     console.log('from')
//     console.log(from.fullPath)
//     // router.push({ name: 'Home', hash: '#products' })
//     // console.log(location.host+'/#products')
//     // location.href = location.host+'/#products'
// })

watchEffect(async ()=>{
    let id = route.params.id
    await store.dispatch('GetContentArchive',id)
    await store.dispatch('GetArchive',id)
})

async function getArchive(){
    if(!slod.value)
        store.commit('ChangeLoader')
    
    await store.dispatch('GetContentArchive',route.params.id)
    if(slod.value)
        store.commit('ChangeLoader')

}

async function onChange(waypointState) {
    if(waypointState.going === 'IN'||waypointState.going === 'OUT'||waypointState.direction === 'UP'){
        if(!loader.value)
        loader.value = !loader.value
        await store.dispatch('GetArchive',route.params.id)
        if(loader.value)
        loader.value = !loader.value 
    }
}

onMounted(async ()=>{
    getArchive();
    await store.dispatch('GetArchive',route.params.id)
    clickScroll('.items--slider')
    
    const lgContainer = document.getElementById('inline-gallery-container');
    const inlineGallery = lightGallery(lgContainer, {
        container: lgContainer,
        dynamic: true,
        hash: true,
        closable: false,
        showMaximizeIcon: true,
        appendSubHtmlTo: '.lg-item',
        slideDelay: 400,
        plugins: [lgZoom, lgThumbnail],
        dynamicEl: archive.value,
    });
    
// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery.openGallery();


});
    function lightImage(src_){   
        src.value = src_; 
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

function viewgallery(){
  view.value = !view.value;
  document.querySelector('.lg-img-wrap').style.padding = '0 0 90px 0'
  var html = document.querySelector('.lg-toolbar').innerHTML
  document.querySelector('.lg-toolbar').innerHTML = '<i @click="viewgallery" class="p-4"></i>'+html
}

</script>

<style >
 @import 'lightgallery/css/lightgallery.css';
  @import 'lightgallery/css/lg-thumbnail.css';
  @import 'lightgallery/css/lg-zoom.css';
  .inline-gallery-container {
    width: 100%;
    height: 100vh;
    padding-bottom: 65%;
}
.lg-img-wrap{
    /* height: 600px;
    margin-top: 40px; */
}
.lg-inline .lg-backdrop, .lg-inline .lg-outer{
    position: fixed !important;
}
.lg-outer .lg-inner{
    height: 85% !important;
}
.lg-image:not(.no-transition){
    /* width: 80% !important; */
    height: 80vh !important;
    margin-top: 55px !important;
}

.inline-gallery-body{
    width: 100%;
    height: 70vh !important;
    z-index: 9999;
}

.btn-close{
    z-index: 9999;
}

#img-head{
    filter: grayscale(.9) blur(1px);
    position: absolute;
    z-index: -99;
}
.first-row-analysis th{
    padding: 0 10px;
}
.bg-name{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: linear-gradient(180deg , rgba(255, 255, 255, 0) 65%, rgb(0 0 0 / 56%));
}
.archive:hover .box-img{
    transition: .5s ease-in-out;
    filter: grayscale(1);
    transform: scale(1.05);
}

@media only screen and (max-width: 400px){
    /* .img-hed{
        margin-top: 130px !important;
    } */
    .lg-image:not(.no-transition){
        width: 90% !important;
        height: auto !important;
        margin-top: 55px !important;
    }
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