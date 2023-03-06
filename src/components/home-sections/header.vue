<template>

<header class="w-full">
    <div data-aos="fade-up" class="flex flex-col sm:flex-row w-full mt-3 sm:mt-0 md:py-9 px-8 sm:px-16 justify-between items-center">
        <div class="md:p-4 pt-4 w-full lg:w-7/12 sm:w-6/12 order-2">
            <small class="text-sm sm:text-base -mb-1 text-gray-500">AFAM TRADE</small>
            <h1 class="text-xl sm:text-4xl font-bold ml-2 Acme">NATURE's ETERNAL STONE</h1>
            <h3 class="text-sm sm:text-lg ml-6 w-full sm:w-10/12">We supply and transport all kinds of stone to meet the needs of our customers globally. we use our skills and expertise in extraction and production of stone to promote Esfahan, Iran and our brand worldwide.</h3>
            <div class="flex mt-9">
                <router-link :to="{name : 'Catalog'}" class="mr-2 w-40 h-11 cursor-pointer rounded-full text-base md:text-lg flex justify-start items-center text-white bg-blue-400 
                hover:bg-transparent border-2 border-blue-400 hover:text-gray-900
                "> <span class="ml-4 mr-8">Catalog</span> <div class="w-9 h-9 bg-white rounded-full ml-2 center--center"><img src="../../assets/map.png" class="w-6" alt=""></div></router-link>
                <router-link  @click.prevent="Scroll('contact-us')" :to="{ name: 'Home', hash: '#contact-us' }"
                class="ml-4 w-40 h-10 cursor-pointer rounded-full text-base md:text-lg flex justify-center items-center border-blue-400 border-2
                hover:bg-blue-400 hover:text-white
                "
                >Contact us</router-link>
            </div>
            <div class="grid grid-cols-3 w-11/12 mt-5">
                <div class="mt-4 lg:mt-0 flex grid grid-cols-1 justify-items-center items-center px-4 py-8">
                    <p class="text-4xl flex Anton"><span class="font-bold">+</span> <count-up :end-val="number.product > 0 ? number.product : 0"></count-up></p>
                    <p class="mt-3 font-bold uppercase text-center">Product</p>
                </div>
                <div class="mt-4 lg:mt-0 flex grid grid-cols-1 justify-items-center items-center px-4 py-8">
                    <p class="text-4xl flex Anton"><span class="font-bold">+</span> <count-up :end-val="number.years > 0 ? number.years : 0"></count-up></p>
                    <p class="mt-3 font-bold uppercase text-center">years of experience</p>
                </div>
                <div class="mt-4 lg:mt-0 grid grid-cols-1 justify-items-center items-center px-4 py-8">
                    <p class="text-4xl flex Anton"><span class="font-bold">+</span> <count-up :end-val="number.work > 0 ? number.work : 0"></count-up></p>
                    <p class="mt-3 font-bold uppercase text-center">Work samples</p>
                </div>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row w-full md:w-5/12 lg:w-5/12 lg:mr-10 mr-0 order-1"> 
            <div class="h-56 sm:h-96 w-full sm:w-7/12 overflow-hidden rounded-xl bg-cover bg-center bg-img-heder">
            </div>
            <div class="flex sm:flex-col mt-3 sm:mt-0 flex-row w-full sm:w-5/12 sm:mx-2">
                <div class="h-36 sm:h-44 mr-1 sm:mb-3 w-full sm:w-8/12 rounded-xl bg-cover bg-center bg-img-heder1"></div>
                <div class="h-36 sm:h-48 ml-1 w-full sm:w-8/12 rounded-xl bg-cover bg-center bg-img-heder2"></div>
            </div>
        </div>
    </div>
</header>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import CountUp from 'vue-countup-v3'

let number=ref({})

setTimeout(()=>{
            number.value={
                product:125,
                years:80,
                work:700,
            }
        },200)

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-img-heder{
    background-image: url('../../assets/img/a-4.jpg');
}
.bg-img-heder1{
    background-image: url('../../assets/img/a-3.jpg');
}
.bg-img-heder2{
    background-image: url('../../assets/img/a-2.jpg');
}
</style>
