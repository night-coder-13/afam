
<template>
	 <swiper
   :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper"
  >
  <swiper-slide class="m-auto rounded-lg shadow-lg text-white bg-gray-400 h-96 px-3 sm:px-5 py-2 sm:py-8 w-11/12 md:w-7/12">
    <div >
      slide1
    </div>
  </swiper-slide>
  <swiper-slide class="m-auto rounded-lg shadow-lg text-white bg-red-400 h-96 px-3 sm:px-5 py-2 sm:py-8 w-11/12 md:w-7/12">
    <div >
      slide2
    </div>
  </swiper-slide>
  <swiper-slide class="m-auto rounded-lg shadow-lg text-white bg-blue-400 h-96 px-3 sm:px-5 py-2 sm:py-8 w-11/12 md:w-7/12">
    <div >
      slide3
    </div>
  </swiper-slide>
  <swiper-slide class="m-auto rounded-lg shadow-lg text-white bg-green-400 h-96 px-3 sm:px-5 py-2 sm:py-8 w-11/12 md:w-7/12">
    <div >
      slide4
    </div>
  </swiper-slide>
  <swiper-slide class="m-auto rounded-lg shadow-lg text-white bg-yellow-400 h-96 px-3 sm:px-5 py-2 sm:py-8 w-11/12 md:w-7/12">
    <div >
      slide5
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
  height: 90vh;
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

