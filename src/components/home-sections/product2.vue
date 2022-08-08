<template>
   <div class="w-full lg:w-10/12 m-auto px-12 my-32">
    <p class="text-3xl font-bold text-center mb-6 Acme">Product</p>
    <div class="grid grid-cols-2 lg:grid-cols-4">
      <router-link :to="{name:'Archive'}">
         <div class="box-productimg mx-2 my-3 rounded-xl relative overflow-hidden">
            <div class="w-full absolute h-full flex justify-center items-center"><p class="text-lg text-white">lorem ipsum</p></div>
            <img src="../../assets/img/1-26.jpg" class="h-full w-full" alt="">
         </div>
      </router-link>
      <router-link :to="{name:'Archive'}">
         <div class="box-productimg relative mx-2 my-3 rounded-xl overflow-hidden">
            <div class="w-full absolute h-full flex justify-center items-center"><p class="text-lg text-white">lorem ipsum</p></div>
            <img src="../../assets/img/1-27.jpg" class="img h-full w-full" alt="">
         </div>
      </router-link>
      <router-link :to="{name:'Archive'}">
         <div class="box-productimg relative mx-2 my-3 rounded-xl overflow-hidden">
            <div class="w-full absolute h-full flex justify-center items-center"><p class="text-lg text-white">lorem ipsum</p></div>
            <img src="../../assets/img/1-29.jpg" class="img h-full w-full" alt="">
         </div>
      </router-link>
      <router-link :to="{name:'Archive'}">
         <div class="box-productimg relative mx-2 my-3 rounded-xl overflow-hidden">
            <div class="w-full absolute h-full flex justify-center items-center"><p class="text-lg text-white">lorem ipsum</p></div>
            <img src="../../assets/img/1-26.jpg" class="img h-full w-full" alt="">
         </div>
      </router-link>
      <router-link :to="{name:'Archive'}">
         <div class="box-productimg mx-2 my-3 rounded-xl relative overflow-hidden">
            <div class="w-full absolute h-full flex justify-center items-center"><p class="text-lg text-white">lorem ipsum</p></div>
            <img src="../../assets/img/1-26.jpg" class="h-full w-full" alt="">
         </div>
      </router-link>
      <router-link :to="{name:'Archive'}">
         <div class="box-productimg relative mx-2 my-3 rounded-xl overflow-hidden">
            <div class="w-full absolute h-full flex justify-center items-center"><p class="text-lg text-white">lorem ipsum</p></div>
            <img src="../../assets/img/1-27.jpg" class="img h-full w-full" alt="">
         </div>
      </router-link>
      <router-link :to="{name:'Archive'}">
         <div class="box-productimg relative mx-2 my-3 rounded-xl overflow-hidden">
            <div class="w-full absolute h-full flex justify-center items-center"><p class="text-lg text-white">lorem ipsum</p></div>
            <img src="../../assets/img/1-29.jpg" class="img h-full w-full" alt="">
         </div>
      </router-link>
      <router-link :to="{name:'Archive'}">
         <div class="box-productimg relative mx-2 my-3 rounded-xl overflow-hidden">
            <div class="w-full absolute h-full flex justify-center items-center"><p class="text-lg text-white">lorem ipsum</p></div>
            <img src="../../assets/img/1-26.jpg" class="img h-full w-full" alt="">
         </div>
      </router-link>
       
       
      
       
       
        
    </div>
   </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-productimg div{
   opacity: 0;
   z-index: 99;
   background: rgba(12, 12, 12, 0.103);
}
.box-productimg:hover div{
   opacity: 1;
   transition: .5s;
}
.box-productimg:hover img{
    filter: grayscale(1);
    transform: scale(1.2);
    transition: .7s;
    
}
</style>
