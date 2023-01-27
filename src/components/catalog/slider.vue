
<template>
	 <swiper
   :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper"
  >
  <swiper-slide class="m-auto rounded-lg shadow-lg text-white bg-gray-400 overflow-hidden w-11/12 md:w-7/12">
    <div >
      <img src="../../assets/catalog/page-product-limestone.jpg" class="w-full" alt="">
    </div>
  </swiper-slide>
  <swiper-slide class="m-auto rounded-lg shadow-lg text-white bg-gray-400 overflow-hidden w-11/12 md:w-7/12">
    <div >
      <img src="../../assets/catalog/page-product-granite.jpg" class="w-full" alt="">
    </div>
  </swiper-slide>
  <swiper-slide class="m-auto rounded-lg shadow-lg text-white bg-gray-400 overflow-hidden w-11/12 md:w-7/12">
    <div >
      <img src="../../assets/catalog/page-product-marble1.jpg" class="w-full" alt="">
    </div>
  </swiper-slide>
  <swiper-slide class="m-auto rounded-lg shadow-lg text-white bg-gray-400 overflow-hidden w-11/12 md:w-7/12">
    <div >
      <img src="../../assets/catalog/page-product-travertine.jpg" class="w-full" alt="">
    </div>
  </swiper-slide>
  
  
  
  </swiper>
	
</template>

<script >
import { Swiper, SwiperSlide } from 'swiper/vue';

import "../../../node_modules/swiper/swiper.min.css";
  // Import Swiper styles
  import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCards } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCards],
    };
  },
};
</script>
<style scoped>
.mySwiper{
  width: 350px;
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
}
</style>

