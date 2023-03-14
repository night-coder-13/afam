<template>
   <Waypoint @change="onchange"></Waypoint>

 <div :class="animate" class="whatsapp animate__animated rounded-md shadow-md bg-gray-100 fixed z-30 bottom-20 right-4 overflow-hidden w-56 h-60">
    <div class="hed h-12 bg-green-500 flex items-center justify-between">
      <p class="px-4 text-white">Whatsapp</p>
      <i @click="close" class="btn-close right-2 ti-close text-white hover:text-red-500 cursor-pointer font-bold mr-3 "></i>
    </div>
    <div class="body h-48 grid grid-cols-1 p-1 pb-3 content-end">
      <div>
         <p class="my-3 ml-2 mr-4 bg-gray-100 p-2 rounded-md">Do you need help?</p>
      </div>
      <div class="flex mt-2">
         <!-- <input class="w-9/12 h-8 border-0 rounded-md bg-gray-200" placeholder="type ..." type="text"> -->
         <a href="http://wa.me/9809132000823" class="w-8/12 text-center px-8 py=3 m-auto text-white bg-green-500 rounded-md border-1 border-green-500">Start chat</a>
      </div>
    </div>
 </div>
</template>

<script setup>
import { ref } from 'vue';
import { Waypoint } from "vue-waypoint";

const animate= ref('');


function onchange(waypointState){
    if(waypointState.going === 'IN'){
        if(sessionStorage.getItem('whatsapp') !== 'true'){
         animate.value = 'animate__fadeInRight'
         document.querySelector('.whatsapp').style.display='block'
        }
    }
}

setTimeout(()=>{
   if(sessionStorage.getItem('whatsapp') !== 'true'){
      animate.value = 'animate__fadeInRight'
      document.querySelector('.whatsapp').style.display='block'
   }
},12000)
function close (){
   sessionStorage.setItem('whatsapp', 'true');
   setTimeout(()=>{
        document.querySelector('.whatsapp').style.display='none'
    },800)
   if(animate.value !== ''){
      animate.value = 'animate__fadeOutRight';
   }else{
      animate.value = ''
   }
}
                
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.whatsapp {
   display: none;
}
.body{
   background-image: url(../assets/bg-whatsapp.jpg);
   background-size: cover;
   background-position: 70% 100%;
}
</style>
