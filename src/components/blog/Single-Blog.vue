<template>
    <Header />
        <div class="w-full" data-aos="fade-up" id="product">
            <div class="w-full h-52 overflow-hidden">
                <div class="absolute mt-20 z-10 text-center w-full ">
                    <p class="text-white font-bold text-2xl md:text-3xl">hito</p>
                    <hr class="w-48 mx-auto opacity-70 mt-1 bg-gray-100">
                    <p class="text-gray-100 text-small md:text-lg">
                        <span class="mr-3">2022-9-16</span><span class="mr-3">22 : 19</span><span class="mr-3">By : admin</span>
                    </p>
                </div>
                <div class="mt-8 sm:mt-0 img-hed relative">

                    <img src="../../assets/img/1-26.jpg" id="img-head" class="w-full -mt-80" alt="">
                </div>
            </div>
            <div class="flex md:flex-row flex-col">
                
                <div class="w-full md:w-7/12 px-6 md:px-0 m-auto">
                    <!-- <h4 class="text-2xl font-bold Acme mt-5 mb-2 capitalize notranslate" >hi</h4> -->
                    <div class="mt-3 ml-1">
                        <div class="text-base ml-4 text-gray-600">
                            <p class="mt-4" >
                                An old man would see you in the neighborhood every day. A boy with tattered shoes and naked feet playing with plastic balls, went shopping some day and went to the boy and told the boy to put on these shoe pants ... he was wearing a shoe box and happy He said to the old man: 'You are God?' The old man picked his lips and said no! The boy said, 'God's friend, because last night I just said to God that I had no shoes ...
                            </p>
                            <p class="mt-4" >
                                This is a test piece that helps designers and programmers to use these test letters to demonstrate their completed designs and designs to the employer, using this test text can speed up the progress of the project. Instead of typing and writing text, designers can replace this text in different boxes with a single copy and post. This entry was posted in Persian by Lourm Ipsum.
                            </p>
                        </div>
                        
                    </div>
                    <img src="../../assets/img/1-26.jpg" class="w-full rounded-lg m-8" alt="">
                    
                </div>
            </div><!---->
           
           
        </div>
        <br>
        <hr>
        <br>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 md:w-8/12 m-auto items--slider">
            <div class="rounded-xl shadow-md mx-2 mt-4 bg-gray-100 item--slider">
                <div class="w-full h-44 overflow-hidden">
                    <v-lazy-image class="w-full rounded-t-xl"
                    :src-placeholder="require('../../assets/gif/loader-img.gif')"
                    :src="require('../../assets/img/images.jpg')" alt="Image blog"/> 
                </div>
                
                <div class="py-3 px-1">
                    <p class="text-sm text-gray-400"> <i class="ti-time"></i> 2022-11-25 </p>
                    <h2 class="text-lg ml-3 mt-2">Lorem ipsum, dolor sit amet consectetur</h2>
                    <div class="flex items-center justify-around  mt-6">
                        <button class=" "><i class="ti-heart text-red-400"></i> +158</button>
                        <router-link :to="{name:'Blog' , params:{id: 1 } }" class="px-6 py-2 text-sm bg-gray-150 rounded-lg text-blue-400 shadow text-bold">Read more</router-link>
                    </div>
                </div>
            </div>
            
            <div class="rounded-xl shadow-md mx-2 mt-4 item--slider">
                <div class="w-full h-44 overflow-hidden">
                    <v-lazy-image class="w-full rounded-t-xl"
                    :src-placeholder="require('../../assets/gif/loader-img.gif')"
                    :src="require('../../assets/img/21.jpg')" alt="Image blog"/> 
                </div>
                
                <div class="py-3 px-1">
                    <p class="text-sm text-gray-400"> <i class="ti-time"></i> 2022-11-25 </p>
                    <h2 class="text-lg ml-3 mt-2">Lorem ipsum, dolor sit amet consectetur</h2>
                    <div class="flex items-center justify-around  mt-6">
                        <button class=" "><i class="ti-heart"></i> +20</button>
                        <button class="px-6 py-2 text-sm bg-gray-150 rounded-lg text-blue-400 shadow text-bold">Read more</button>
                    </div>
                </div>
            </div>
            
            <div class="rounded-xl shadow-md mx-2 mt-4 item--slider">
                <div class="w-full h-44 overflow-hidden">
                    <v-lazy-image class="w-full rounded-t-xl"
                    :src-placeholder="require('../../assets/gif/loader-img.gif')"
                    :src="require('../../assets/img/s_limestone_6272.jpg')" alt="Image blog"/> 
                </div>
                
                <div class="py-3 px-1">
                    <p class="text-sm text-gray-400"> <i class="ti-time"></i> 2022-11-25 </p>
                    <h2 class="text-lg ml-3 mt-2">Lorem ipsum, dolor sit amet consectetur</h2>
                    <div class="flex items-center justify-around  mt-6">
                        <button class=" "><i class="ti-heart"></i> +36</button>
                        <button class="px-6 py-2 text-sm bg-gray-150 rounded-lg text-blue-400 shadow text-bold">Read more</button>
                    </div>
                </div>
            </div>
            
        </div>
    <Footer />
</template>
   
<script setup>
 import Footer from '../home-sections/footer.vue'
 import Header from '../home-sections/hed.vue'
 import VLazyImage from "v-lazy-image";

</script>
<style scoped>
#img-head{
    filter: blur(2px) grayscale(.8);
    background-color: rgba(0, 0, 0, .5);
}
</style>