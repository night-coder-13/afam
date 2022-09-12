<template>
  
  <div class="fixed w-full h-full top-0 z-50 loader center--center" v-if="loadingPage">
    <img src="./assets/gif/loader.gif" class="w-full md:w-6/12 lg:w-4/12 m-auto" alt="">
  </div>
<div class="w-full" >
  <!-- <Hed /> -->
  <router-view > 
  </router-view>
  
</div>
  <div >
    <button @click="scrollTop('hed')" :class="upBtn" class="bg-blue-400 shadow-md text-white w-10 h-10 rounded-full upBtn fixed bottom-8 font-bold right-10 animate__animated animate__slideInUp"><i class="ti-angle-up text-xl"></i></button>
  </div>
</template>

<script setup>
// import Hed from './components/home-sections/hed.vue'
import { ref } from '@vue/reactivity';
import {smoothScroll} from './scroll'
import 'animate.css';
import { computed, onMounted } from "vue";
import AOS from "aos";
import { useStore } from 'vuex';
const store =useStore()

const loadingPage=computed(() => store.state.statusLoader)

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
@font-face {
  font-family: 'iransans';
  src: url('./assets/font/iranSans/IRANSansWeb.woff2') format('woff2'),
         url('./assets/font/iranSans/IRANSansWeb.woff') format('woff'),
         url('./assets/font/iranSans/IRANSansWeb.ttf') format('truetype');
}
body{
  font-family: iransans !important;
  background-color: rgb(245, 245, 245);
  direction: rtl;
}
.loader{
  background: linear-gradient(179deg, #0b1726, #0c1a2b);
}
.Anton{
  font-family: iransans, sans-serif !important;
}
.Acme{
  font-family: iransans !important;
  /* font-style: italic; */
}
.upBtn{
  display: none;
  z-index: 9999;
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
