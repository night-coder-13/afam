<template>
    <Header />
        <div class="w-full" data-aos="fade-up" id="product">
            <div class="w-full h-52 overflow-hidden">
                <div class="absolute mt-20 z-10 text-center w-full ">
                    <p class="text-white font-bold text-2xl md:text-3xl" >Blog</p>
                    <hr class="w-48 mx-auto opacity-70 mt-1 bg-gray-100">
                    <p class="text-gray-100 text-xs md:text-lg">
                        Read and subscribe to AFAM Stone company latest News,<br> updates and products surrounding natural stones, quarries, transportation and us.
                    </p>
                </div>
                <div class="mt-8 sm:mt-0 img-hed relative">
                    <div class="cover-head-singleblog"></div>
                    <img src="../../assets/img/blog.jpg" id="img-head" class="w-full sm:-mt-24 md:-mt-96 -mt-10" alt="">
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-11/12 md:w-8/12 m-auto mt-8">
                <router-link :to="{name:'SingleBlog' , params:{id: b.id } }" v-for="(b,index) in blog" :key="index" class="rounded-xl shadow-md mx-2 mt-4 bg-gray-100 item--slider">
                    <div class="w-full h-44 overflow-hidden">
                        <v-lazy-image class="h-full w-full rounded-t-xl"
                        :src-placeholder="require('../../assets/gif/loader-img.gif')"
                        :src="b.image" alt="Image blog"/> 
                    </div>
                    
                    <div class="py-3 px-1">
                        <p class="text-sm text-gray-400"> <i class="ti-time"></i> {{ b.date }} </p>
                        <h2 class="text-lg ml-3 mt-2" v-text="b.title"></h2>
                        <div class="flex items-center justify-around  mt-6">
                            <!-- <button class=" "><i class="ti-heart text-red-400"></i> +158</button> -->
                            <router-link :to="{name:'SingleBlog' , params:{id: b.id } }" class="px-6 py-2 text-sm bg-gray-150 rounded-lg text-blue-400 shadow text-bold">Read more</router-link>
                        </div>
                    </div>
                </router-link>
                
            </div>
           
           
        </div>
        
    <Footer />
</template>
   
<script setup>
import Footer from '../home-sections/footer.vue'
import Header from '../home-sections/hed.vue'
import VLazyImage from "v-lazy-image";
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { onMounted , computed } from '@vue/runtime-core';

    const route=useRoute();
    const store=useStore();
    const slod=computed(()=>store.getters.getLoader)
    const singleBlog=computed(()=>store.state.singleBlog)
    const blog=computed(()=>store.state.blog)

    async function getBlog(){
        if(!slod.value)
            store.commit('ChangeLoader')
        await store.dispatch('GetBlog',12)
        if(slod.value)
            store.commit('ChangeLoader')
    }
    getBlog()
</script>
<style scoped>
.cover-head-singleblog{
    position: absolute;
    background: #0000005c;
    z-index: 9;
    width: 100%;
    height: 100%;
}
#img-head{
    filter: blur(1px) ;
}
.blog-title{
    width: 100%;
    height: 350px;
    /* background: url(../../assets/Path\ 2106.svg);
    background-size: 105% 100%;
    background-position: center;
    background-repeat: no-repeat; */
}
@media only screen and (max-width: 500px){
   .items--slider{
   display: flex;
   flex-wrap: nowrap;
   overflow-x: scroll;
   /* scroll-snap-type: x mandatory; */
   scroll-padding: 0px;
   gap: 0;
}
.items--slider.active{
      cursor: grab;
   }
.items--slider .item--slider{
   flex: 0 0 85%;
   scroll-snap-align: start;
}
}
</style>







marble, granular limestone or dolomite (i.e., rock composed of calcium-magnesium carbonate) that has been recrystallized under the influence of heat, pressure, and aqueous solutions. Commercially, it includes all decorative calcium-rich rocks that can be polished, as well as certain serpentines (verd antiques).

Petrographically marbles are massive rather than thin-layered and consist of a mosaic of calcite grains that rarely show any traces of crystalline form under the microscope. They are traversed by minute cracks that accord with the rhombohedral cleavage (planes of fracture that intersect to yield rhombic forms) of calcite. In the more severely deformed rocks, the grains show stripes and may be elongated in a particular direction or even crushed.

View marble quarrying in Carrara, Italy
View marble quarrying in Carrara, ItalySee all videos for this article
Marbles often occur interbedded with such metamorphic rocks as mica schists, phyllites, gneisses, and granulites and are most common in the older layers of Earth’s crust that have been deeply buried in regions of extreme folding and igneous intrusion. The change from limestones rich in fossils into true marbles in such metamorphic regions is a common phenomenon; occasionally, as at Carrara, Italy, and at Bergen, Norway, recrystallization of the rock has not completely obliterated the organic structures.

