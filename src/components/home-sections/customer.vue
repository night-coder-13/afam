<template>
    <Waypoint @change="onChange" class="grid grid-cols-2 lg:grid-cols-4 w-full sm:w-10/12 lg:w-11/12 m-auto my-12 sm:my-20 ">
        <div class="mt-4 lg:mt-0 flex grid grid-cols-1 justify-items-center items-center px-4 py-8">
            <p class="text-4xl flex Anton"><span class="font-bold">+</span> <count-up :end-val="number.product > 0 ? number.product : 0"></count-up></p>
            <p class="mt-3 font-bold uppercase text-center">محصولات</p>
        </div>
        <div class="mt-4 lg:mt-0 flex grid grid-cols-1 justify-items-center items-center px-4 py-8">
            <p class="text-4xl flex Anton"><span class="font-bold">+</span> <count-up :end-val="number.years > 0 ? number.years : 0"></count-up></p>
            <p class="mt-3 font-bold uppercase text-center">سال ها تجربه ما</p>
        </div>
        <div class="mt-4 lg:mt-0 grid grid-cols-1 justify-items-center items-center px-4 py-8">
            <p class="text-4xl flex Anton"><span class="font-bold">+</span> <count-up :end-val="number.work > 0 ? number.work : 0"></count-up></p>
            <p class="mt-3 font-bold uppercase text-center">پروژه های ما</p>
        </div>
        <div class="mt-4 lg:mt-0 ">
            <div class="w-full sm:bg-blue-900 px-4 py-8 rounded-lg  sm:text-gray-100 font-bold grid grid-cols-1 justify-items-center items-center ">
                <Waypoint @change="onChangeImg" class="flex mr-4 img-wapper">
                    <img src="../../assets/img/img(10).webp" class="img-profile w-10 h-10 grayscale rounded-full -mr-4 " alt="">
                    <img src="../../assets/img/img(10).webp" class="img-profile w-10 h-10 grayscale rounded-full -mr-4 " alt="">
                    <img src="../../assets/img/img(10).webp" class="img-profile w-10 h-10 grayscale rounded-full -mr-4 " alt="">
                    <img src="../../assets/img/img(10).webp" class="img-profile w-10 h-10 grayscale rounded-full -mr-4 " alt="">
                    <img src="../../assets/img/img(10).webp" class="img-profile w-10 h-10 grayscale rounded-full -mr-4 " alt="">
                </Waypoint>
                <p class="mt-3 font-bold uppercase text-center">رضایت مشتریان ما</p>
            </div>
            
        </div>
    </Waypoint>
  
</template>

<script setup>
import { ref } from '@vue/reactivity';
import CountUp from 'vue-countup-v3'
import { Waypoint } from "vue-waypoint";

let number=ref({})

function onChange(waypointState) {
    if(waypointState.going === 'IN'||waypointState.direction === 'UP'){
        // countUp.start()
        setTimeout(()=>{
            number.value={
                product:125,
                years:80,
                work:700,
            }
        },200)
        // const img = document.querySelectorAll('.grayscale');
        // img.forEach((element,i) => {
        //     setTimeout(()=>{
        //         element.classList.add('animate__animated', 'animate__zoomInLeft' , 'active');
        //     },(i*220))
        // });
       
    }
}
function onChangeImg(waypointState) {
    if(waypointState.going === 'IN'||waypointState.direction === 'UP'){
        const img = document.querySelectorAll('.grayscale');
        img.forEach((element,i) => {
            setTimeout(()=>{
                element.classList.add('animate__animated', 'animate__zoomInLeft' , 'active');
            },(i*220))
        });
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-profile{
    visibility: hidden;
}
.img-profile.active{
    visibility: visible;
}
.grayscale{
-webkit-filter: grayscale(1);
        filter: grayscale(1);
}
.grayscale:hover{
-webkit-filter: grayscale(0);
        filter: grayscale(0);
        transition: .5s;
}
</style>
