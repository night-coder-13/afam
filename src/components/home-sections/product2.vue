<template>
   <div class="w-10/12 m-auto px-12 my-32">
    <p class="text-3xl font-bold text-center mb-6 Acme">Product</p>
    <div class="grid grid-cols-4">
      <router-link :to="{name:'Archive'}">
         <div class="mx-2 my-3 rounded-xl overflow-hidden">
            <img src="../../assets/img/1-26.jpg" class="img h-full w-full" alt="">
         </div>
      </router-link>
      <router-link :to="{name:'Archive'}">
         <div class="mx-2 my-3 rounded-xl overflow-hidden">
            <img src="../../assets/img/1-27.jpg" class="img h-full w-full" alt="">
         </div>
      </router-link>
      <router-link :to="{name:'Archive'}">
         <div class="mx-2 my-3 rounded-xl overflow-hidden">
            <img src="../../assets/img/1-29.jpg" class="img h-full w-full" alt="">
         </div>
      </router-link>
      <router-link :to="{name:'Archive'}">
         <div class="mx-2 my-3 rounded-xl overflow-hidden">
            <img src="../../assets/img/1-26.jpg" class="img h-full w-full" alt="">
         </div>
      </router-link>
      <router-link :to="{name:'Archive'}">
         <div class="mx-2 my-3 rounded-xl overflow-hidden">
            <img src="../../assets/img/1-26.jpg" class="img h-full w-full" alt="">
         </div>
      </router-link>
      <router-link :to="{name:'Archive'}">
         <div class="mx-2 my-3 rounded-xl overflow-hidden">
            <img src="../../assets/img/1-27.jpg" class="img h-full w-full" alt="">
         </div>
      </router-link>
      <router-link :to="{name:'Archive'}">
         <div class="mx-2 my-3 rounded-xl overflow-hidden">
            <img src="../../assets/img/1-29.jpg" class="img h-full w-full" alt="">
         </div>
      </router-link>
      <router-link :to="{name:'Archive'}">
         <div class="mx-2 my-3 rounded-xl overflow-hidden">
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
.img:hover{
    filter: grayscale(1);
    transform: scale(1.2);
    transition: .7s;
    
}
</style>
