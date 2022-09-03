
<template>
	 <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="false"
    class="mySwiper cursor-pointer"
  >
  <swiper-slide  class="box--product flex w-11/12 m-auto my-3 rounded-xl items-center justify-center shadow-md py-2 px-4">
    <v-lazy-image :src="require('../../assets/img/q1.jpg')" class="h-full w-full" alt=""/>
  </swiper-slide>
  <swiper-slide  class="box--product flex w-11/12 m-auto my-3 rounded-xl items-center justify-center shadow-md py-2 px-4">
    <v-lazy-image :src="require('../../assets/img/q2.jpg')" class="h-full w-full" alt=""/>
  </swiper-slide>
  <swiper-slide  class="box--product flex w-11/12 m-auto my-3 rounded-xl items-center justify-center shadow-md py-2 px-4">
    <v-lazy-image :src="require('../../assets/img/q3.jpg')" class="h-full w-full" alt=""/>
  </swiper-slide>
  </swiper>
	
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import VLazyImage from "v-lazy-image";


import "../../../node_modules/swiper/swiper.min.css";
  // Import Swiper styles
  import 'swiper/css';
  
import "swiper/css/pagination";
import "swiper/css/navigation";

</script>
