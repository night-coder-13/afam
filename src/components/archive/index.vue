<template>
    <Header />
        <div class="w-full" data-aos="fade-up">
            <div class="w-full h-52 overflow-hidden">
                <div class="mt-10 sm:mt-0 img-hed relative">
                    <img v-if="contentArchive.img_bg" :src="contentArchive.img_bg[0]" id="img-head" class="w-full -mt-80" alt="">
                    <img v-else :src="contentArchive.img[0]" id="img-head" class="w-full -mt-80" alt="">
                </div>
            </div>
            <div class="flex md:flex-row flex-col">
                <div class="w-full md:w-5/12 p-5">
                    <div>
                        <v-lazy-image class="w-9/12 md:w-10/12 m-auto rounded-xl shadow-md -mt-32"
                            :src-placeholder="require('../../assets/gif/loader-img.gif')"
                            :src="contentArchive.img[0]" alt="Image blog"/> 
                    </div>
                    
                </div>
                <div class="w-full md:w-7/12 px-6 md:px-0">
                    <h4 class="text-2xl font-bold Acme mt-5 mb-2 capitalize notranslate" v-text="contentArchive.name"></h4>
                    <div class="text-base ml-4 text-gray-600">
                        <p class="mb-2 " v-text="contentArchive.description"></p>
                    </div>
                </div>
            </div><!---->
            <div class="flex mt-16" data-aos="fade-up">
                <Waypoint @change="onChange" class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 w-10/12 md:w-11/12 lg:w-10/12 m-auto items--slider">
                    
                        <div v-for="item in archive" :key="item.id" class="item--slider">
                            <div v-if="loader" class="center-center">
                                <img :src="require('../../assets/gif/loader-img.gif')" alt="">
                            </div>      
                            <div v-else>
                                <router-link :to="{name:'Product',params:{id:item.id}}">
                                    <div class="mx-4 mt-3 mb-5 h-60 relative archive rounded-xl overflow-hidden">
                                        <div class="w-full bg-name rounded-b-xl h-full"></div>
                                        <v-lazy-image v-if="item.image1" class="img h-full w-full "
                                            :src-placeholder="require('../../assets/gif/loader-img.gif')"
                                            :src="item.image1[0]" :alt="item.name"/> 
                                        <v-lazy-image v-else class="img h-full w-full rounded-xl"
                                            :src-placeholder="require('../../assets/gif/loader-img.gif')"
                                            :src="require('../../assets/img/340719-200.png')" :alt="item.name == '' ? item.title : item.name"/> 
                                        <div>
                                            <v-lazy-image v-if="item.image2" class="box-img img rounded-lg absolute -right-4 shadow-md -bottom-4 w-5/12 h-24"
                                                :src-placeholder="require('../../assets/gif/loader-img.gif')"
                                                :src="item.image2[0]" :alt="item.name == '' ? item.title : item.name"/> 
                                            <!-- <v-lazy-image v-else class="box-img img rounded-lg absolute -right-4 shadow-md -bottom-4 w-5/12 h-24"
                                                :src-placeholder="require('../../assets/gif/loader-img.gif')"
                                                :src="require('../../assets/img/340719-200.png')" :alt="item.name"/>  -->
                                            <div class="absolute text-white bottom-0 p-3 pl-4 w-7/12">
                                                <p class="text-lg" v-text="item.title"></p>
                                            </div>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div> 
                    
                </Waypoint>
            </div>
           
        </div>

    <Footer />
</template>

<script setup>
import Header from '../home-sections/hed.vue'
import Footer from '../home-sections/footer.vue'
import { ref } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'
import {clickScroll} from '../../scroll'
import VLazyImage from 'v-lazy-image'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { Waypoint } from "vue-waypoint";


const route=useRoute();
const store=useStore();
const slod=computed(()=>store.getters.getLoader)
const loader=ref(true)
const archive=computed(()=>store.state.archive)
const contentArchive=computed(()=>store.state.contentArchive)
async function getArchive(){
    if(!slod.value)
        store.commit('ChangeLoader')
    
    await store.dispatch('GetContentArchive',route.params.id)
    if(slod.value)
        store.commit('ChangeLoader')

}
getArchive();

async function onChange(waypointState) {
    if(waypointState.going === 'IN'||waypointState.going === 'OUT'||waypointState.direction === 'UP'){
        if(!loader.value)
            loader.value = !loader.value
        await store.dispatch('GetArchive',route.params.id)
        if(loader.value)
            loader.value = !loader.value 
    }
}

onMounted(()=>{
    clickScroll('.items--slider')
})
</script>

<style scoped>
#img-head{
    filter: grayscale(.9) blur(1px);
    position: absolute;
    z-index: -99;
}
.first-row-analysis th{
    padding: 0 10px;
}
.bg-name{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: linear-gradient(180deg , rgba(255, 255, 255, 0) 65%, rgb(0 0 0 / 56%));
}
.archive:hover .box-img{
    /* bottom: -27px; */
    transform: scale(1.05) translateY(-10px);
    transition: .5s ease-in-out;
}
.archive:hover img:not(.box-img){
    transition: .5s ease-in-out;
    filter: grayscale(1);
    transform: scale(1.1);
}
@media only screen and (max-width: 400px){
    .img-hed{
        margin-top: 130px !important;
    }
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