
<template>
    <swiper
      :effect="'cards'"
      :grabCursor="true"
      :modules="[EffectCards]"
      class="mySwiper"
      :class="view == true ? 'hidden' : 'block'"
    > 
    <swiper-slide v-for="(c , index) in catalog" :key="index" class="m-auto rounded-lg shadow-lg text-white bg-gray-400 overflow-hidden w-11/12 md:w-7/12">
      <div @click="lightImage('https://cor.afambuild.com/public/upload/'+c.image_url)">
        <img :src="'https://cor.afambuild.com/public/upload/'+c.image_url" class="w-full" :alt="c.title">
      </div>
    </swiper-slide>
    
  </swiper>
  <div class="w-full center--center">
    <a href="https://pdf.afambuild.com/catalog.pdf" class="m-auto h-14 rounded-lg text-white bg-blue-500 px-8 py-3 mb-6" download>Downloade PDF</a>
  </div>
  <div class="hidden z-50 top-0 w-full h-full center--center lightimage animate__animated">
      <div @click="close()" class="bg-black w-full h-full opacity-40 absolute z-40"></div>
      <div class="grid items-center content-center h-full z-50 pt-10">
          <div class="pb-4 flex justify-center">
              <i @click="close()" class=" text-black p-2 text-lg bg-white ti-close cursor-pointer font-bold hover:border-red-400 border border-white rounded-full"></i>
              <!-- <i @click="viewgallery" class="bg-white ml-3 ti-layers-alt cursor-pointer text-black p-2 text-xl rounded-full"></i> -->
          </div>
          <div class="overflow-hidden mb-4">
              <!-- <img src="../../assets/img/blog.jpg" class="h-120 rounded-md border-1 border-white" alt=""> -->
              <Image :src="src" />  
          </div>
          <!-- <div class="text-center pb-10"></div> -->
      </div>
  </div>
  <!-- <button :class="view == true ? 'hidden' : 'block'" @click="viewgallery">viwe gallery</button> -->
  <div class="relative">
    <div :class="view == true ? 'block' : 'hidden'" id="inline-gallery-container" class="inline-gallery-container " ></div>
    <i @click="viewgallery" :class="view == true ? 'block' : 'hidden'" class="z-50 absolute btn-close left-2 ti-close text-gray-400 hover:text-gray-600 cursor-pointer font-bold mr-1 top-2 hover:border-red-400 border border-gray-400 p-1 rounded-full"></i>
  </div>
  
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useStore } from 'vuex'

import "../../../node_modules/swiper/swiper.min.css";
  // Import Swiper styles
  import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCards } from "swiper";
import { onMounted, ref , computed } from '@vue/runtime-core';
import lightGallery from '../../../node_modules/lightgallery/lightgallery.min.js'
import lgZoom from '../../../node_modules/lightgallery/plugins/zoom/lg-zoom.min.js'
import lgThumbnail from '../../../node_modules/lightgallery/plugins/thumbnail/lg-thumbnail.min.js'
import { val } from 'dom7';
import Image from '../archive/image.vue'


const view = ref(false);
const ElCatalog = ref({});
const store=useStore();
const catalog=computed(()=>store.state.catalog)
const src = ref('');

onMounted(async ()=>{
  await store.dispatch('GetCatalog')
  
  const lgContainer = document.getElementById('inline-gallery-container');
const inlineGallery = lightGallery(lgContainer, {
    container: lgContainer,
    dynamic: true,
    hash: false,
    closable: false,
    showMaximizeIcon: true,
    appendSubHtmlTo: '.lg-item',
    slideDelay: 400,
    plugins: [lgZoom, lgThumbnail],
    dynamicEl: catalog.value,
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
<style scoped>
 @import 'lightgallery/css/lightgallery.css';
  @import 'lightgallery/css/lg-thumbnail.css';
  @import 'lightgallery/css/lg-zoom.css';
  .inline-gallery-container {
    width: 100%;
    height: 100vh;
    padding-bottom: 65%;
}


.mySwiper{
  width: 500px;
  padding: 20px 40px;
  /* height: 90vh; */
  overflow: visible;
}
.box--slider{
  backdrop-filter: blur(2px) brightness(0.9);
  border: 1px solid rgba(255, 255, 255, 0.656);
}
@media only screen and (max-width: 650px){
  .box--slider{
    color: #333;
    top: unset;
    background-color: #fff;
    bottom: 30px;
    left: 4%;
  }
  .mySwiper{
  width: 350px;
}
}
</style>

