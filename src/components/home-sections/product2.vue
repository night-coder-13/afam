<template>
   <div class="w-full lg:w-10/12 m-auto px-4 md:px-12 mt-10 mb-24 sm:my-32">
    <h3 class="font-bold text-center mb-6 Acme">Product</h3>
    <div class="sm:grid sm:grid-cols-2 lg:grid-cols-4 items product--slider">
      <div v-for="item in items" :key="item.id" class="item--slider">
         <router-link :to="{name:'Archive',params:{id:item.id}}">
            <div class="box-productimg mx-2 my-3 rounded-xl relative overflow-hidden">
               <div class="w-9 h-9 bg-gray-50 center--center absolute z-30 rounded-full top-4 right-3 text-blue-500
               hover:text-white hover:bg-blue-500 
               ">
                  <i class="ti-bookmark font-bold text-xl"></i>
               </div>
               <div class="w-full absolute h-full flex justify-center items-center title"><p class="text-lg text-white" v-text="item.title"></p></div>
               <v-lazy-image :src="require('../../assets/img/'+item.img)" class="h-full w-full" alt=""/>
            </div>
         </router-link>
      </div>
        
    </div>
   </div>
</template>

<script setup>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import {clickScroll} from '../../scroll.js'
// import VueScrollTo  from 'vue-scrollto';
import VLazyImage from "v-lazy-image";

const store=useStore();
const items=computed(()=>store.state.category)

onMounted(()=>{
    clickScroll('.items')
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-productimg .title{
   opacity: 0;
   z-index: 20;
   background: rgba(12, 12, 12, 0.103);
}
.box-productimg:hover .title{
   opacity: 1;
   transition: .5s;
}
.box-productimg:hover img{
    filter: grayscale(1);
    transform: scale(1.2);
    transition: .7s;
    
}

@media only screen and (max-width: 500px){
   .product--slider{
      display: flex;
      flex-wrap: nowrap;
      overflow-x: scroll;
      
      scroll-snap-type: x mandatory;
      scroll-padding: 4px;
      gap: 0;
   }
   .product--slider:focus{
      cursor: grabbing;
   }
   .product--slider .item--slider{
      flex: 0 0 47%;
      scroll-snap-align: start;
   }
}
</style>
