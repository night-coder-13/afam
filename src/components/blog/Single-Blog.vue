<template>
    <Header />
        <div class="w-full" data-aos="fade-up" id="product">
            <div class="w-full h-52 overflow-hidden">
                <div class="absolute mt-20 z-10 text-center w-full ">
                    <p class="text-white font-bold text-2xl md:text-3xl" v-text="singleBlog.title"></p>
                    <hr class="w-48 mx-auto opacity-70 mt-1 bg-gray-100">
                    <p class="text-gray-100 text-small md:text-lg">
                        <span class="mr-3" v-text="singleBlog.date"></span><span class="mr-3">By : {{ singleBlog.author }}</span>
                    </p>
                </div>
                <div class="mt-8 sm:mt-0 img-hed relative">
                    <div class="cover-head-singleblog"></div>
                    <img :src="singleBlog.image" id="img-head" class="w-full -mt-10" alt="">
                </div>
            </div>
            <div class="flex md:flex-row flex-col">
                <div class="w-full md:w-9/12 lg:w-7/12 px-6 md:px-0 m-auto">
                    <!-- <h4 class="text-2xl font-bold Acme mt-5 mb-2 capitalize notranslate" >hi</h4> -->
                    <div class="">
                        <div class="text-base text-gray-600">
                            <img :src="singleBlog.image" class="md:mx-4 my-4 rounded-lg" alt="">
                            <div v-html="singleBlog.content">
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div><!---->
           
           
        </div>
        
        <hr class="my-4">
        <div class="w-11/12 md:w-8/12 m-auto mt-2 mb-1">
            <h3 class="font-bold Acme">Suggested</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 md:w-8/12 m-auto items--slider">
            <router-link :to="{name:'Blog' , params:{id: b.id } }" v-for="(b,index) in blog" :key="index" class="rounded-xl shadow-md mx-2 mt-4 bg-gray-100 item--slider">
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
                        <router-link :to="{name:'Blog' , params:{id: b.id } }" class="px-6 py-2 text-sm bg-gray-150 rounded-lg text-blue-400 shadow text-bold">Read more</router-link>
                    </div>
                </div>
            </router-link>
            
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
import {clickScroll} from '../../scroll'


onMounted(()=>{
    clickScroll('.items--slider')
})

    const route=useRoute();
    const store=useStore();
    const slod=computed(()=>store.getters.getLoader)
    const singleBlog=computed(()=>store.state.singleBlog)
    const blog=computed(()=>store.state.blog)

    async function getBlog(){
        if(!slod.value)
            store.commit('ChangeLoader')
        await store.dispatch('GetSingleBlog',route.params.id)
        await store.dispatch('GetBlog')
        if(slod.value)
            store.commit('ChangeLoader')
    }
    getBlog()
</script>
<style >
.cover-head-singleblog{
    position: absolute;
    background: #0000005c;
    z-index: 9;
    width: 100%;
    height: 100%;
}
img{
    border-radius: 10px;
    margin: auto;
}
#img-head{
    filter: blur(2px) grayscale(.8);
    background-color: rgba(0, 0, 0, .5);
}
.title{
    font-size: 2.5em !important;
    margin: 10px 0;
}
.description{
    font-size: 1em !important;
    margin: 8px 5px;
}
.btn-blog-lg{
    width: 200px;
    text-align: center;
    padding: 8px;
    border-radius: 10px;
    font-size: 1.1em !important;
    background-color: #33a1f5;
    color: #fefefe;
    margin: 8px;
}
.btn-blog-md{
    width: 150px;
    text-align: center;
    padding: 8px;
    border-radius: 10px;
    font-size: 1.1em !important;
    background-color: #33a1f5;
    color: #fefefe;
    margin: 8px;
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

