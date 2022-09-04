
<template>
	 <swiper
    ref="mySwiperRef"
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 20000,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="false"
    :modules="modules"
    class="mySwiper cursor-pointer"
  >
  <swiper-slide  class="relative ">
    <div class="absolute top-52 left-20 rounded-lg shadow-lg text-white box--slider px-3 sm:px-5 py-2 sm:py-8 w-11/12 md:w-7/12">
      <h3 >Quarries</h3>
      <p class="ml-3 mt-1 h-16 md:h-32 overflow-hidden text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.</p>
    </div>
    <v-lazy-image class="w-full h-full img-slider"
    :src-placeholder="require('../../assets/gif/loader-img.gif')"
    :src="require('../../assets/img/q1.jpg')" alt="slider"/> 
  </swiper-slide>
  <swiper-slide  class="relative">
    <div class="absolute top-52 left-20 rounded-lg shadow-lg text-white box--slider px-3 sm:px-5 py-2 sm:py-8 w-11/12 md:w-7/12">
      <h3 >Quarries</h3>
      <p class="ml-3 mt-1 h-16 md:h-32 overflow-hidden text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.</p>
    </div>
    <v-lazy-image class="w-full h-full img-slider"
    :src-placeholder="require('../../assets/gif/loader-img.gif')"
    :src="require('../../assets/img/q2.jpg')" alt="slider"/> 
  </swiper-slide>
</swiper>
<div id="bullet" class="bg-red-400"></div>
	
</template>

<script >
import { Swiper, SwiperSlide } from 'swiper/vue';
import VLazyImage from "v-lazy-image";

import "../../../node_modules/swiper/swiper.min.css";
  // Import Swiper styles
  import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
    VLazyImage
  },
  setup() {
    
    return {
      modules: [Autoplay, Pagination],
    };
  },
  mounted(){
    const pagination_bullet=document.getElementsByClassName('swiper-pagination-bullet')
    for (const p of pagination_bullet) {
      p.style.background="#33a1f5"
    }
    const pagination=document.querySelector('.swiper-pagination')
    document.getElementById('bullet').appendChild(pagination)
    console.log(pagination)
    
  }
};
</script>
<style scoped>
.mySwiper{
  height: 90vh;
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
}
</style>

