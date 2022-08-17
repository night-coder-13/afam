<template>
<div class="w-full" >
  <!-- <Hed /> -->
  <router-view v-slot="{ Component , route }" > 
    <transition name="fade" >
      <component :is="Component" :key="route.path"></component>
    </transition>
    
  </router-view>
</div>
  <div class=" ">
    <button @click="scrollTop('hed')" :class="upBtn" class="upBtn fixed bottom-8 font-bold right-10 animate__animated animate__slideInUp"><i class="ti-arrow-circle-up text-2xl"></i></button>
  </div>
</template>

<script setup>
// import Hed from './components/home-sections/hed.vue'
import { ref } from '@vue/reactivity';

import {smoothScroll} from './scroll'

import 'animate.css';

import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})

const upBtn = ref('')
window.addEventListener('scroll',()=>{
  if(window.pageYOffset > 500){
    upBtn.value='active'
  }else{
    upBtn.value = ''
  }
})
function scrollTop(id){
    smoothScroll(id);
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  scrollbar-width: thin !important;          /* "auto" or "thin" */
  scrollbar-color: rgb(101, 101, 101) rgb(217, 217, 217) !important;   /* scroll thumb and track */ 
}
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Rokkitt:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Acme&family=Amatic+SC&family=Courgette&family=Crete+Round:ital@1&family=Heebo&family=Roboto+Slab&family=Ropa+Sans&family=Source+Sans+Pro&family=Volkhov:ital@0;1&display=swap');
body{
  font-family: Source Sans Pro !important;
  background-color: rgb(245, 245, 245);
 
}
.Acme{
  font-family: Volkhov !important;
  /* font-style: italic; */
}
.upBtn{
  display: none;
}
.upBtn.active{
  display: block;
}
.fade-enter-from , .fade-leave-to{
  background-color: #000;
  opacity: 0;
}
.fade-enter-active , .fade-leave-active{
  transition: all .3s ease-out;
  background-color: #000;
}
::-webkit-scrollbar{
   width: 10px;
   height: 8px;
   background: rgb(217, 217, 217);
   overflow: auto;
   border-radius: 5px;
}
::-webkit-scrollbar-thumb{
   width: 10px;
   margin: auto;
   background-color: rgb(101, 101, 101);
   border-radius: 5px;
}
</style>
