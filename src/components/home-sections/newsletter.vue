<template>
<Waypoint @change="onchange"></Waypoint>
<div class="bg hidden newsletter-desc center--center">
    <div @click="close" class="w-full h-full absolute"></div>
    <div class="relative body-newsletter-desc">
        <div id="image-newsletter" class="relative left-4 top-10 animate__animated animate__fadeInRight ">
            <img src="../../assets/img/email-messages-network.jpg" class="w-96 rounded-lg shadow h-48" alt="">
        </div>
        <div id="forme-newsletter" class="relative -top-14 -left-10 animate__animated animate__fadeInLeft">
            <div class="bg-white rounded-lg shadow-md w-96 h-44 center--center relative">
                <i @click="close" class="absolute btn-close right-2 ti-close text-gray-400 hover:text-gray-600 cursor-pointer font-bold mr-1 top-2 hover:border-red-400 border border-gray-400 p-1 rounded-full"></i>
                <div class="p-5 mt-5 w-11/12">
                    <h4 class="font-bold Acme text-lg" id="">Subscribe to AFMA Newsletter</h4>
                    <div class="mt-4 mb-4 text-center relative">
                        <input type="text" placeholder="Email" class="rounded-full h-12 px-3 w-full py-2 bg-gray-150 shadow border-none">
                        <button class="btn-in-input absolute right-2 ml-2 px-6 py-1 text-lg rounded-full bg-gray-200 shadow text-blue-400 font-bold">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>
<div class="newsletter-mob hidden">
    <div @click="close" class="bg-box-alert-mobail animate__animated animate__fadeIn"> </div>
    <div id="forme-mobile-newsletter" class="box-alert-mobail animate__animated animate__fadeInUp pt-3 pb-4">
        <i @click="close" class="absolute btn-close right-2 ti-close text-white font-bold mr-1"></i>
        <div class="p-5 mt-5 ">
            <h4 class="font-bold Acme text-lg" id="">Subscribe to AFMA Newsletter</h4>
            <div class="mt-4 mb-4 text-center relative">
                <input type="text" placeholder="Email" class="rounded-full h-12 px-3 w-full py-2 bg-gray-150 shadow border-none">
                <button class="btn-in-input absolute right-2 ml-2 px-6 py-1 text-lg rounded-full bg-gray-200 shadow text-blue-400 font-bold">Send</button>
            </div>
        </div>
    </div>
</div>



</template>

<script setup>
import { Waypoint } from "vue-waypoint";

function onchange(waypointState){
    if(waypointState.going === 'IN'){
        if(sessionStorage.getItem('newsletter') !== 'true'){
            // sessionStorage.setItem('newsletter', 'true');
            if(window.innerWidth > 500){
                document.querySelector('.newsletter-desc').style.display='flex'
                document.querySelector('.newsletter-desc #image-newsletter').classList.remove('animate__fadeOutRight')
                document.querySelector('.newsletter-desc #forme-newsletter').classList.remove('animate__fadeOutLeft')
            }
            else{
                document.querySelector('.newsletter-mob').style.display='block'
                document.querySelector('.newsletter-desc #forme-mobile-newsletter').classList.remove('animate__fadeOutDown')
            }
        }
    }
}
function close(){
    sessionStorage.setItem('newsletter', 'true');
    setTimeout(()=>{
        document.querySelector('.newsletter-desc').style.display='none'
        document.querySelector('.newsletter-mob').style.display='none'
    },800)
    document.querySelector('.newsletter-desc #image-newsletter').classList.add('animate__fadeOutRight')
    document.querySelector('.newsletter-desc #forme-newsletter').classList.add('animate__fadeOutLeft')
    document.querySelector('.newsletter-mob #forme-mobile-newsletter').classList.add('animate__fadeOutDown')
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.37);
    z-index: 999;
}

.bg-box-alert-mobail{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.13);
}
.box-alert-mobail .btn-close{
    border-radius: 50%;
    padding: 5px;
    background-color: rgb(235, 99, 99);
}
.btn-in-input{
    top: 6px;
}
.box-alert-mobail{
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 999999;
    background: rgb(255, 253, 253);
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
}
.box-alert{
    position: absolute;
    top: 150px;
    left: 33%;
    width: 38%;
    z-index: 9999;
    background: #fff;
}
.box-alert .box-mail{
    background: rgba(255, 255, 255, 0.109);
    backdrop-filter: blur(3px);
    position: absolute;
}
@media only screen and (max-width: 920px){
    .box-alert{
        left: 29%;
        width: 47%;
    }
}
@media only screen and (max-width: 500px){
    .box-alert{
        display: none;
    }

}
</style>

