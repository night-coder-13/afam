
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
  <swiper-slide  class="relative">
    <div class="absolute top-60 left-20 rounded-lg shadow-lg text-white box--slider px-5 py-8">
      <h3>Quarries</h3>
      <p class="ml-3 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolor</p>
    </div>
    <v-lazy-image class="w-full h-full img-slider"
      :src-placeholder="require('../../assets/gif/loader-img.gif')"
      :src="require('../../assets/img/q1.jpg')" alt="slider"/> 
  </swiper-slide>
  <swiper-slide  class="relative">
    <div class="absolute top-52 left-20 rounded-lg shadow-lg text-white box--slider px-5 py-8 w-7/12">
      <h3>Quarries</h3>
      <p class="ml-3 mt-1 h-32 overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.</p>
      <button class="px-4 py-1 border rounded-md border-gray-100 mt-4 ml-10 hover:bg-gray-100 hover:text-black">Read more</button>
    </div>
    <v-lazy-image class="w-full h-full img-slider"
      :src-placeholder="require('../../assets/gif/loader-img.gif')"
      :src="require('../../assets/img/q2.jpg')" alt="slider"/> 
  </swiper-slide>
  <swiper-slide  class="relative">
    <div class="absolute top-60 left-20 rounded-lg shadow-lg text-white box--slider px-5 py-8">
      <h3>Quarries</h3>
      <p class="ml-3 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolor</p>
    </div>
    <v-lazy-image class="w-full h-full img-slider"
      :src-placeholder="require('../../assets/gif/loader-img.gif')"
      :src="require('../../assets/img/q3.jpg')" alt="slider"/> 
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
<style scoped>
.mySwiper{
  height: 90vh;
}
.box--slider{
  backdrop-filter: blur(2px) brightness(0.9);
  border: 1px solid rgba(255, 255, 255, 0.656);
}

</style>

