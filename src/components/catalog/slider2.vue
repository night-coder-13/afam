
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
  <div id="zoomC"></div>

	
</template>

<script >
import { Swiper, SwiperSlide } from 'swiper/vue';

import "../../../node_modules/swiper/swiper.min.css";
  // Import Swiper styles
  import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCards } from "swiper";
import { ref } from '@vue/reactivity';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
var mouse = ref(false);
    // CREDITS : https://www.cssscript.com/image-zoom-pan-hover-detail-view/
var addZoom = target => {
  // (A) GET CONTAINER + IMAGE SOURCE
  let container = document.getElementById(target),
      imgsrc = container.currentStyle || window.getComputedStyle(container, false);
      imgsrc = imgsrc.backgroundImage.slice(4, -1).replace(/"/g, "");
 
  // (B) LOAD IMAGE + ATTACH ZOOM
  let img = new Image();
  img.src = imgsrc;
  img.onload = () => {
    // (B1) CALCULATE ZOOM RATIO
    let ratio = img.naturalHeight / img.naturalWidth,
        percentage = ratio * 100 + "%";
 
    // (B2) ATTACH ZOOM ON MOUSE MOVE
    container.onmousedown = e =>{
      mouse.value = true
    }
    container.onmouseup = e =>{
      mouse.value = false
    }
    container.onmousemove = e => {
      console.log(mouse.value)
      if(mouse.value){
        let rect = e.target.getBoundingClientRect(),
        xPos = e.clientX - rect.left,
        yPos = e.clientY - rect.top,
        xPercent = xPos / (container.clientWidth / 100) + "%",
        yPercent = yPos / ((container.clientWidth * ratio) / 100) + "%";
        console.log( rect.left)
  
        Object.assign(container.style, {
          backgroundPosition: xPercent + " " + yPercent,
          backgroundSize: img.naturalWidth + "px"
        });
      }
      
    };
 
    // (B3) RESET ZOOM ON MOUSE LEAVE
    container.onmouseleave = e => {
      mouse.value = false;
      Object.assign(container.style, {
        backgroundPosition: "center",
        backgroundSize: "cover"
      });
      
    };
  }
};
 
// (C) ATTACH FOLLOW ZOOM
window.onload = () => addZoom("zoomC");

    return {
      modules: [EffectCards],
    };
  },
};
</script>
<style scoped>
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

