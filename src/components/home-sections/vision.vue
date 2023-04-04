<template>
    <div class="w-full m-auto relative pt-8 sm:pb-24 flex flex-col lg:flex-row pl-1 lg:pl-0 justify-end content-center">
        <div class="grid w-4/12 pt-5 pb-16 pl-6 pr-4 md:bg-blue-900 md:text-white z-10 content-center sm:order-1 sm:shadow-lg box-vision">
            <!-- <img src="../../assets/arrow.png" class="pl-8" alt=""> -->

            <h3 class="text-2xl font-bold mb-2 Acme" >Registration to Sending process</h3>
            <p class="text-sm sm:text-base ml-4 max-h-56 overflow-hidden">
                Our compony mission is to provide high quality materials and great customer services all around the world, that's why we participate in exhibitions, design objects and site-specific installations to extend the boundaries of these materials.
            </p>
           
        </div>
        <div id="bg--image" class="w-full md:w-8/12 center--center lg:w-9/12 h-80 sm:h-96 md:h-128 sm:order-2 mb-8 sm:mb-0 overflow-hidden rounded relative">
            <div class="absolute w-full bottom-0 ">
                <p v-for="(title , i) in list_image" :key="i" class="hidden px-4 pb-4 pt-6 text-base md:text-xl font-bold animate__animated title--img" id="title" v-text="title.title" :id="i == showimg ? 'active' : ''"></p>
            </div>
            <div v-for="(img , i) in list_image" :key="i" :style="' background: url('+require('../../assets/slider/'+img.img)+');'" class="relative bg--image block w-full h-full animate__animated " :id="i == showimg ? 'active' : ''">
                <p class="absolute w-full bottom-0 px-4 pt-2 pb-6 text-base md:text-xl font-bold" id="title" v-text="img.title" ></p>
            </div>
        </div>
    </div>
</template>

<script setup>
const { onMounted, ref }=require("@vue/runtime-core")

const list_image=[
    {img:'1.png' , title : '1. Customer consultation and order registration'},
    {img:'2.jpg' , title : '2. Purchase order with best quality'},
    {img:'3.jpg' , title : '3. Stone processing under the direct supervision of experts'},
    {img:'4.jpg' , title : '4. Loading packages'},
    {img:'5.jpg' , title : '5. Transfer all over the world'},
]
let showimg= ref(0)
let imgbg=''
onMounted(()=>{
    setTimeout(nextSlide , 8000)
})

// var nSlide = setInterval(nextSlide , 8000)
function nextSlide(){
    const listItem = document.getElementsByClassName('bg--image')
    for (let i = 0; i < listItem.length; i++) {
        listItem[i].classList.remove('animate__fadeOutLeft');
        listItem[i].classList.remove('animate__fadeInRight');
    }
    listItem[showimg.value].classList.add('animate__fadeOutLeft')
    listItem[(showimg.value < listItem.length -1 ? showimg.value + 1 : 0 )].classList.add('animate__fadeInRight')
   
    setTimeout(()=>{
        if(showimg.value < (list_image.length-1)){
            showimg.value++
        }else{
            showimg.value=0
        }
    },1000)
    setTimeout(nextSlide , 8000)
    
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#title{
    background: linear-gradient(to top, #ffffff00  5%, #ffffff  100%);
    z-index: 99;
    position: relative;
}
.animate__fadeOutLeft{
    animation-delay: .3s;
}
.animate__animated{
    z-index: 1 !important;
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
.box-vision{
   
}
.bg--image{
    background-size: 100% auto !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    display: none;
}
.bg-buler{
    position: absolute;
    background-size: cover !important;
    backdrop-filter: blur(10px);
    filter: blur(5px);
}
.bg--image#active{
    display: inline-block;
}
.title--img#active{
    display: block;
}
@media only screen and (max-width: 650px){
.box-vision{
    position: unset;
    top: unset;
    bottom: 0px;
    left: 0;
    width: auto;
    background: transparent;
    margin: 0 15px;
    border-radius: 10px;
    padding: 10px;
    padding-bottom: 40px;
    /* backdrop-filter: blur(1px); */
}
#title::before{
    content: '';
    
}
}
</style>
