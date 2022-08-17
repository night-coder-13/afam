<!-- <template>
  <div class="product--slider items">
    <div class="box-productimg">d</div>
    <div class="box-productimg">f</div>
    <div class="box-productimg">f</div>
    <div class="box-productimg">f</div>
    <div class="box-productimg">f</div>
    <div class="box-productimg">f</div>
    <div class="box-productimg">f</div>
    <div class="box-productimg">f</div>
    <div class="box-productimg">f</div>
    <div class="box-productimg">f</div>
  </div>
  <div class=" w-96 flex overflow-scroll">
    <div class="w-32 m-4 h-32 bg-red-500"></div>
    <div class="w-32 m-4 h-32 bg-red-500"></div>
    <div class="w-32 m-4 h-32 bg-red-500"></div>
    <div class="w-32 m-4 h-32 bg-red-500"></div>
    <div class="w-32 m-4 h-32 bg-red-500"></div>
    <div class="w-32 m-4 h-32 bg-red-500"></div>
    <div class="w-32 m-4 h-32 bg-red-500"></div>
    <div class="w-32 m-4 h-32 bg-red-500"></div>
    <div class="w-32 m-4 h-32 bg-red-500"></div>
  </div>
</template>
<script setup>
import { onMounted } from "@vue/runtime-core";

onMounted(()=>{
  const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;
console.log(slider)
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft ;
  })
  slider.addEventListener('mouseleave', () =>{
    isDown = false;
    slider.classList.remove("active");
  })
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove("active");
  })
  slider.addEventListener('mousemove', (e) =>{
    if(!isDown) return; 
    e.preventDefault () ;
    const x = e.pageX - slider.offsetLeft
    const walk = (x - startX)* 3;
    slider.scrollLeft = scrollLeft - walk;
  })
})

</script>
<style> -->
<!-- .product--slider{
   display: flex;
   overflow-x: scroll;
   width: 300px;
   scroll-snap-type: x mandatory;
   scroll-padding: 24px;
   gap: 12px;
}
.product--slider .box-productimg{
   flex: 0 0 100%;
   scroll-snap-align: start;
}
.items div{
   flex: 0 0 50%;
   scroll-snap-align: start;
} -->
<!-- </style> new_file.riv-->
<template>
  <div>
    <canvas ref="canvas" width="400" height="400"></canvas>
  </div>
</template>

<script>
import { Rive } from '../../node_modules/@rive-app/webgl/rive';

export default {
  name: 'Rive',
  props: {
    src: String,
    fit: String,
    alignment: String
  },
  mounted() {
    new Rive({
        canvas: this.$refs.canvas,
        src: 'assets/new_file.riv',
        
        autoplay: true
    })
  }
}
</script>