<template>
<Waypoint @change="onchange"></Waypoint>
<div @click="close" class="bg hidden">
    <div class="w-full rounded-lg shadow-lg overflow-hidden box-alert animate__animated animate__zoomIn">
        <img src="../../assets/img/email-messages-network.jpg" class="w-full" alt="">
        <div class="p-4">
            <h3 class="font-bold mb-2 Acme" id="title">Subscribe to AFMA newsletter</h3>
            <div class="mt-8 text-center">
                <input type="text" placeholder="Email" class="rounded-lg px-3 w-9/12 py-2 mx-3 my-2 bg-gray-50 border border-gray-400">
                <button class="ml-2 px-6 py-1 text-lg rounded-lg bg-blue-400 text-white">Send</button>
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
            sessionStorage.setItem('newsletter', 'true');
            document.querySelector('.bg').style.display='block'
        }
    }
}
function close(){
    document.querySelector('.bg').style.display='none'
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
.box-alert{
    position: absolute;
    top: 100px;
    left: 33%;
    width: 38%;
    z-index: 9999;
    background: #fff;
}
@media only screen and (max-width: 920px){
    .box-alert{
        left: 29%;
        width: 47%;
    }
}
@media only screen and (max-width: 550px){
    .box-alert{
        left: 2%;
        width: 96%;
    }
}
</style>

