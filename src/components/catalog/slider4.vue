
<template>
  <Lightgallery
        :settings="{ speed: 500 , plugins: [lgThumbnail,lgZoom] , }"
        :onInit="onInit"
        :onBeforeSlide="onBeforeSlide"
        
      > 
      <a class="hidden" href="http://localhost:8080/img/page-product-marble1.643c6044.jpg">
          <img alt="img2" src="../../assets/catalog/page-product-marble1.jpg" />
        </a>
        <a class="hidden" href="http://localhost:8080/img/page-product-limestone.5874fcef.jpg">
          <img alt="img1" src="../../assets/catalog/page-product-limestone.jpg" />
      </a>
    <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="[EffectCards]"
    class="mySwiper"
    > 
    <swiper-slide class="m-auto rounded-lg shadow-lg text-white bg-gray-400 overflow-hidden w-11/12 md:w-7/12">
     
      <a href="http://localhost:8080/img/page-product-granite.88021715.jpg">
            <img alt="img2" src="../../assets/catalog/page-product-granite.jpg" />
        </a>
      
    </swiper-slide>
    <swiper-slide class="m-auto rounded-lg shadow-lg text-white bg-gray-400 overflow-hidden w-11/12 md:w-7/12">
      <a href="http://localhost:8080/img/page-product-limestone.5874fcef.jpg">
          <img alt="img1" src="../../assets/catalog/page-product-limestone.jpg" />
      </a>
    </swiper-slide>
    <swiper-slide class="m-auto rounded-lg shadow-lg text-white bg-gray-400 overflow-hidden w-11/12 md:w-7/12">
      <div >
        <img src="../../assets/catalog/page-product-granite.jpg" class="w-full" alt="">
      </div>
    </swiper-slide>
    
  </swiper>
  <a href="http://localhost:8080/img/page-product-limestone.5874fcef.jpg">Viwe All</a>
</Lightgallery>
	
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

import "../../../node_modules/swiper/swiper.min.css";
  // Import Swiper styles
  import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCards } from "swiper";
import { ref } from '@vue/reactivity';

import Lightgallery from 'lightgallery/vue';
  import lgThumbnail from 'lightgallery/plugins/thumbnail';
  import lgZoom from 'lightgallery/plugins/zoom';

  const g = Lightgallery;
  function onInit() {
    console.log('lightGallery has been initialized');
    
  }
  function onBeforeSlide() {
    // console.log('calling before slide');
  }
  function click() {
    alert()
    g.openGallery;
  }

</script>
<style scoped>
 @import 'lightgallery/css/lightgallery.css';
  @import 'lightgallery/css/lg-thumbnail.css';
  @import 'lightgallery/css/lg-zoom.css';
#zoomC {
  /* (A) DIMENSIONS */
  width: 600px;
  height: 338px;
 
  /* (B) BACKGROUND IMAGE */
  background: url("../../assets/img/1-1.jpg");
  background-position: center;
  background-size: cover;
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

