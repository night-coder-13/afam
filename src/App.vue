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
    <a href="https://web.whatsapp.com/send?phone=989902774517" :class="upBtn" class="bg-green-500 shadow-md text-white w-10 h-10 rounded-full upBtn fixed bottom-20 font-bold right-10 animate__animated animate__slideInUp "><img src="./assets/whatsapp.png" class="w-7 m-auto mt-1" alt=""></a>
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
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Rokkitt:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Acme&family=Amatic+SC&family=Courgette&family=Crete+Round:ital@1&family=Heebo&family=Roboto+Slab&family=Ropa+Sans&family=Source+Sans+Pro&family=Volkhov:ital@0;1&display=swap');
body{
  font-family: Source Sans Pro !important;
  background-color: rgb(245, 245, 245);
 
}
.loader{
  background: linear-gradient(179deg, #0b1726, #0c1a2b);
}
.Anton{
  font-family: 'Anton', sans-serif !important;
}
.Acme{
  font-family: Volkhov !important;
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
