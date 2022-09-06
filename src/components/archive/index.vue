<template>
    <Header />
        <div class="w-full" data-aos="fade-up">
            <div class="w-full h-52 overflow-hidden">
                <div class="mt-10 sm:mt-0 img-hed relative">
                    <img src="../../assets/img/21.jpg" id="img-head" class="w-full -mt-80" alt="">
                </div>
            </div>
            <div class="flex md:flex-row flex-col">
                <div class="w-full md:w-5/12 p-5">
                    <div>
                        <v-lazy-image class="w-9/12 md:w-10/12 m-auto rounded-xl shadow-md -mt-32"
                            :src-placeholder="require('../../assets/gif/loader-img.gif')"
                            :src="require('../../assets/img/1-1.jpg')" alt="Image blog"/> 
                    </div>
                    
                </div>
                <div class="w-full md:w-7/12 px-6 md:px-0">
                    <h4 class="text-2xl font-bold Acme mt-5 mb-2">Trevanter</h4>
                    <div class="text-base ml-4 text-gray-600">
                        <p class="mb-2 ">The subtle elegance of travertine tile and slabs add rustic warmth to any room. Created by natural forces and subterranean springs and rivers, this attractive natural stone represents the mid-stage of limestone’s transformation into marble. Travertine possesses its own unique beauty with small, random pits and markings that give it depth and Old-World charm (fun fact: it was used by the Romans to build the Coliseum). Perfect for kitchens, bathrooms and many other living spaces, Arizona Tile offers travertine from a variety of sources to ensure you can find the tone, pattern and color ideal for your project.</p>
                    </div>
                </div>
            </div><!---->
            <div class="flex mt-16" data-aos="fade-up">
                <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 w-10/12 md:w-11/12 lg:w-10/12 m-auto items--slider">
                    
                    <div v-for="img in imgs" :key="img.a" class="item--slider">
                    <router-link :to="{name:'Product'}">
                        <div class="mx-4 mt-3 mb-5 h-60 relative archive">
                            <div class="w-full bg-name rounded-b-xl h-full"></div>
                            <v-lazy-image class="img h-full w-full rounded-xl"
                                :src-placeholder="require('../../assets/gif/loader-img.gif')"
                                :src="require('../../assets/img/'+img.a)" :alt="img.a"/> 
                            <div>
                                <v-lazy-image class="box-img img rounded-lg absolute -right-4 shadow-md -bottom-4 w-5/12 h-24"
                                    :src-placeholder="require('../../assets/gif/loader-img.gif')"
                                    :src="require('../../assets/img/'+img.b)" :alt="img.b"/> 
                                <div class="absolute text-white bottom-0 p-2 pl-3 w-7/12">
                                    <p class="text-base">TORREON STONE</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    </div> 
                </div>
            </div>
           
        </div>

    <Footer />
</template>

<script setup>
import Header from '../home-sections/hed.vue'
import Footer from '../home-sections/footer.vue'
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import {clickScroll} from '../../scroll'
import VLazyImage from 'v-lazy-image'

onMounted(()=>{
    clickScroll('.items--slider')
})
const imgs = ref([
    {
        a:'1-29.jpg',
        b:'1-1.jpg'
    },
    {
        a:'slider-stone-house-1.jpg',
        b:'Cloud-Onyx-Marble.jpg'
    },
    {
        a:'TRAVERTINE-MARBLE-12.jpg',
        b:'travertine-stone-7.jpg'
    },
    {
        a:'a-3.jpg',
        b:'340719-200.png'
    },
    {
        a:'21.jpg',
        b:'Classic-Cream-Travertine-Tile.jpg'
    },
    {
        a:'a-2.jpg',
        b:'granite-wall_1122-1299.jpg'
    },
]);
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
    background: linear-gradient(180deg , rgba(255, 255, 255, 0) 70%, rgba(0, 0, 0, 0.644));
}
.archive:hover .box-img{
    /* bottom: -27px; */
    transform: scale(1.05) translateY(-10px);
    transition: .5s ease-in-out;
}
.archive:hover img:not(.box-img){
    transition: .5s;
    filter: grayscale(1);
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