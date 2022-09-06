
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
    
    <v-lazy-image class="w-full h-full img-slider"
    :src-placeholder="require('../../assets/gif/loader-img.gif')"
    :src="require('../../assets/img/q1.jpg')" alt="slider"/> 
  </swiper-slide>
  <swiper-slide  class="relative">
    <v-lazy-image class="w-full h-full img-slider"
    :src-placeholder="require('../../assets/gif/loader-img.gif')"
    :src="require('../../assets/img/q2.jpg')" alt="slider"/> 
  </swiper-slide>
</swiper>
	
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
  }
};
</script>
<style scoped>
/* .mySwiper{
  height: 90vh;
} */
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
  /* .mySwiper{
  height: 60vh;
} */
}
</style>

