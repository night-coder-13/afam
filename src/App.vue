<template>
<div class="w-full" >
  <router-view>  </router-view>
</div>
  <div class=" ">
    <button @click="scrollTop('hed')" :class="upBtn" class="upBtn fixed bottom-8 font-bold right-10 animate__animated animate__slideInUp"><i class="ti-arrow-circle-up text-2xl"></i></button>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';

import {smoothScroll} from './scroll'

import 'animate.css';
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
</style>
