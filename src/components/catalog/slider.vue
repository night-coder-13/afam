
<template>
    <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="[EffectCards]"
    class="mySwiper"
    :class="view == true ? 'hidden' : 'block'"
    > 
    <swiper-slide class="m-auto rounded-lg shadow-lg text-white bg-gray-400 overflow-hidden w-11/12 md:w-7/12">
      <div @click="viewgallery">
        <img src="../../assets/catalog/page-product-marble1.jpg" class="w-full" alt="">
      </div>
    </swiper-slide>
    <swiper-slide class="m-auto rounded-lg shadow-lg text-white bg-gray-400 overflow-hidden w-11/12 md:w-7/12">
      <div @click="viewgallery">
        <img src="../../assets/catalog/page-product-granite.jpg" class="w-full" alt="">
      </div>
    </swiper-slide>
    <swiper-slide class="m-auto rounded-lg shadow-lg text-white bg-gray-400 overflow-hidden w-11/12 md:w-7/12">
      <div @click="viewgallery">
        <img src="../../assets/catalog/page-product-limestone.jpg" class="w-full" alt="">
      </div>
    </swiper-slide>
    <swiper-slide class="m-auto rounded-lg shadow-lg text-white bg-gray-400 overflow-hidden w-11/12 md:w-7/12">
      <div @click="viewgallery">
        <img src="../../assets/catalog/page-product-travertine.jpg" class="w-full" alt="">
      </div>
    </swiper-slide>
    
  </swiper>
  <!-- <button :class="view == true ? 'hidden' : 'block'" @click="viewgallery">viwe gallery</button> -->
  <div class="relative">
    <div :class="view == true ? 'block' : 'hidden'" id="inline-gallery-container" class="inline-gallery-container " ></div>
    <i @click="viewgallery" :class="view == true ? 'block' : 'hidden'" class="z-50 absolute btn-close left-2 ti-close text-gray-400 hover:text-gray-600 cursor-pointer font-bold mr-1 top-2 hover:border-red-400 border border-gray-400 p-1 rounded-full"></i>
  </div>
  
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

import "../../../node_modules/swiper/swiper.min.css";
  // Import Swiper styles
  import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCards } from "swiper";
import { onMounted, ref } from '@vue/runtime-core';
import lightGallery from '../../../node_modules/lightgallery/lightgallery.min.js'
import lgZoom from '../../../node_modules/lightgallery/plugins/zoom/lg-zoom.min.js'
import lgThumbnail from '../../../node_modules/lightgallery/plugins/thumbnail/lg-thumbnail.min.js'

const view = ref(false);

onMounted(()=>{

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
    dynamicEl: [
        {
            src: 'http://mehdi-abasian.ir/page-product-marble1.jpg',
            thumb: 'http://mehdi-abasian.ir/page-product-marble1.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>marble</h4>
            </div>`,
        },
        {
            src: 'http://mehdi-abasian.ir/page-product-granite.jpg',
            thumb: 'http://mehdi-abasian.ir/page-product-granite.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>granite</h4>
            </div>`,
        },
        {
            src: 'http://mehdi-abasian.ir/page-product-limestone.jpg',
            thumb: 'http://mehdi-abasian.ir/page-product-limestone.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>limestone</h4>
            </div>`,
        },
        {
            src: 'http://mehdi-abasian.ir/page-product-travertine.jpg',
            thumb: 'http://mehdi-abasian.ir/page-product-travertine.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>travertine</h4>
            </div>`,
        },
       
    ],
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery.openGallery();


});
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

