<template>
    <div class="w-full m-auto mb-8 sm:mb-0 relative py-8 pb-24 flex flex-col lg:flex-row pl-1 lg:pl-0 justify-end content-center">
        <div class="grid z-10 content-center sm:order-1 sm:shadow-lg box-vision">
            <!-- <img src="../../assets/arrow.png" class="pl-8" alt=""> -->

            <h3 class="font-bold mb-2 Acme" id="title">Building new visions</h3>
            <p class="text-sm sm:text-lg ml-4 max-h-56 overflow-hidden">
                Barsi Marmi's mission is to provide materials and high
                end quality services to customers around the world, but
                also to developa new language on design and
                communication in the world of marble. That's why we
                participate in exhibitions, design objects and site-specific
                installations to extend the boundaries of this unique
                material.
            </p>
        </div>
        <div id="bg--image" class="w-full center--center lg:w-9/12 h-80 sm:h-96 md:h-128 sm:order-2 mb-8 sm:mb-0 overflow-hidden rounded ">
            <div v-for="(img , i) in list_image" :key="i" :style="' background: url('+require('../../assets/img/'+img)+');'" class="bg--image block w-full h-full animate__animated " :id="i == showimg ? 'active' : ''">
            </div>
            <!-- <div v-for="(img , i) in list_image" :key="i" >
                <img v-show="i === showimg" :src="require('../../assets/img/'+img)" class="w-full" alt="">
            </div> -->
        </div>
    </div>
</template>

<script setup>

const { onMounted, watch, ref }=require("@vue/runtime-core")

const list_image=[
    'lq12.jpg',
    'lq1.jpg',
    'q1.jpg',
]
let showimg= ref(0)
let imgbg=''
onMounted(()=>{
    // console.log(document.getElementById('bg--image').childNodes[1])
})
// watch(showimg, (currentValue, oldValue) => {
//   console.log(currentValue);
//   console.log(oldValue);
// });


setInterval(()=>{
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
    

},3000)


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.animate__fadeOutLeft{
    animation-delay: .3s;
}
.animate__animated{
    z-index: 1 !important;
}
#title{
    position: relative;
}
#title::before{
    content: url(../../assets/arrow.png);
    /* background-image: url(../../assets/arrow.png);
    background-size:cover; */
    position:absolute;
    top: -10px;
    left: -55px;
    height: 50px;
    width: 50px;
    transform: rotateY(200deg);
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
    position: absolute;
    top: 220px;
    left: 200px;
    width: 550px;
    background: #ffffff;
    padding: 30px 10px 30px 40px;
    border-radius: 10px;
    /* backdrop-filter: blur(1px); */
}
.bg--image{
    background-size: auto !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    display: none;
}
.bg--image#active{
    display: inline-block;
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
