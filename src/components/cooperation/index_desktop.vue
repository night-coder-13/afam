<template>
    <Hed />

    <div id="container" class="">
        <div id="bg" class="bg-blue-900"></div>
        <div class="h-full">
            <div class="flex flex-col md:flex-row h-full page animate__animated active" id="team">
                <Team @event-move-page="movePage" />
            </div>
            <div class="flex flex-col md:flex-row h-full animate__animated page" id="partnership">
                <Partnership @event-move-page="movePage" />
            </div>
            <div class="flex flex-col md:flex-row h-full animate__animated page" id="contact-us">
                <Contact @event-move-page="movePage" />
            </div>
        </div>
        <div class="h-16 grid content-center pl-10 md:pl-14">
            <ul class="flex gap-7 Acme text-md">
                <li id="tab-team" class="tab cursor-pointer active" @click="movePage('team')">Our team</li>
                <li id="tab-partnership" class="tab cursor-pointer" @click="movePage('partnership')">Partnership</li>
                <li id="tab-contact-us" class="tab cursor-pointer" @click="movePage('contact-us')">Contact us</li>
            </ul>
        </div>
    </div>

</template>

<script setup>
import Hed from '../home-sections/hed.vue'
import Team from './team.vue'
import Partnership from './partnership.vue'
import Contact from './contact_us.vue'
function movePage(id){
    const listItem = document.getElementsByClassName('page')
    for (let i = 0; i < listItem.length; i++) {
        listItem[i].classList.remove('active');
        listItem[i].classList.remove('active');
    }
    const tabItem = document.getElementsByClassName('tab')
    for (let i = 0; i < tabItem.length; i++) {
        tabItem[i].classList.remove('active');
        tabItem[i].classList.remove('active');
    }

    document.getElementById(id).classList.add('active')
    document.getElementById(id).classList.add('animate__fadeInRight')
    document.getElementById('tab-'+id).classList.add('active')
}
</script>

<style scoped>
#team.active , #partnership.active , #contact-us.active {
    display: flex;
    height: 100%;
}
#team , #partnership , #contact-us {
    display: none;
}
#bg{
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -99;
}
#container{
    height: 80vh;
    position: relative;
}

ul li.active{
    list-style-image: url('../../assets/svg/circle.svg');
}
</style>