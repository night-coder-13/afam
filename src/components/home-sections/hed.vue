<template>

  <div class="">
    <nav id="hed" class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <router-link to="/" class="text-xl font-bold text-gray-800 md:text-2xl">
            <img src="../../assets/logo_.png" class="w-40" alt="">
        </router-link>
        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <Popper arrow>
            <button class="text-lg mx-5 flex items-center"><img src="../../assets/flag/en.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> en </button>
            <template #content="{}">
              <button class="text-lg mx-5 flex items-center"><img src="../../assets/flag/en.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> en </button>
              <button class="text-lg mx-5 mt-2 flex items-center"><img src="../../assets/flag/fa.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> fa </button>
            </template>
          </Popper>
          <button @click="toggleNav" type="button" class=" text-gray-800 hover:text-gray-700 focus:outline-none focus:text-gray-700">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex animate__animated animate__fadeInLeft' : 'hidden'"
        class=" flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 ">
        <li class="text-gray-800 ">
            <router-link :to="{name : 'Home'}">Home</router-link>
        </li>
        
        <li class="text-gray-800 ">
          <Popper arrow>
            <button class="text-lg flex items-center"> Product </button>
            <template #content="{}" >
              <div class="px-4 py-2"> 
                <p v-for="cat in category" :key="cat.id" class="text-gray-500 text-start capitalize ">
                  <router-link :to="{name:'Archive',params:{id:cat.id}}" v-text="cat.title"></router-link>
                </p>
              </div>
            </template>
          </Popper>
        </li>
        <li class="text-gray-800 ">
            <router-link :to="{name : 'About'}">About us</router-link>
        </li>
        <li class="text-gray-800 ">
            <router-link :to="{name : 'Quarries'}">Quarries</router-link>
        </li>
        <li class="text-gray-800 ">
            <router-link  @click.prevent="Scroll('contact-us')" :to="{ name: 'Home', hash: '#contact-us' }">Contact Us</router-link>
        </li>
        <li id="flag">
          <Popper arrow>
              <button class="text-lg mx-3 flex items-center"><img src="../../assets/flag/en.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> en </button>
              <template #content="{}">
                <button class="text-lg mx-5 flex items-center"><img src="../../assets/flag/en.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> en </button>
                <button class="text-lg mx-5 mt-2 flex items-center"><img src="../../assets/flag/fa.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> fa </button>
              </template>
            </Popper>
        </li>
      </ul>
    </nav>
  </div>
          <!-- nav sticky -->
  <div class="nav--sticky animate__animated animate__slideInDown" id="nav--sticky">
    <nav id="hed" class="container px-6 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <router-link to="/" class="text-xl font-bold text-gray-800 md:text-2xl">
            <img src="../../assets/logo_.png" class="w-40" alt="">
        </router-link>
        <!-- Mobile menu button -->
        <div class="flex md:hidden">
            <Popper arrow>
              <button class="text-lg mx-5 flex items-center"><img src="../../assets/flag/en.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> en </button>
              <template #content="{}">
                <button class="text-lg mx-5 flex items-center"><img src="../../assets/flag/en.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> en </button>
                <button class="text-lg mx-5 mt-2 flex items-center"><img src="../../assets/flag/fa.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> fa </button>
              </template>
            </Popper>
          <button @click="toggleNav" type="button" class=" text-gray-800 hover:text-gray-700 focus:outline-none focus:text-gray-700">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex animate__animated animate__fadeInLeft' : 'hidden'"
        class=" flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 ">
        <li class="text-gray-800 ">
            <router-link :to="{name : 'Home'}">Home</router-link>
        </li>
        
        <li class="text-gray-800 ">
          <Popper arrow>
              <button class="text-lg flex items-center"> Product </button>
              <template #content="{}" >
                <div class="px-4 py-2">
                  <p v-for="cat in category" :key="cat.id" class="text-gray-500 text-start capitalize ">
                    <router-link :to="{name:'Archive',params:{id:cat.id}}" v-text="cat.title"></router-link>
                  </p>
                </div>
              </template>
            </Popper>
        </li>
        <li class="text-gray-800 ">
            <router-link :to="{name : 'About'}">About us</router-link>
        </li>
        <li class="text-gray-800 ">
            <router-link  @click.prevent="Scroll('contact-us')" :to="{ name: 'Home', hash: '#contact-us' }">Contact Us</router-link>
        </li>
        <li class="text-gray-800 ">
            <router-link :to="{name : 'Quarries'}">Quarries</router-link>
        </li>
        <li id="flag">
          <Popper arrow>
              <button class="text-lg mx-3 flex items-center"><img src="../../assets/flag/en.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> en </button>
              <template #content="{}">
                <button class="text-lg mx-5 flex items-center"><img src="../../assets/flag/en.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> en </button>
                <button class="text-lg mx-5 mt-2 flex items-center"><img src="../../assets/flag/fa.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> fa </button>
              </template>
            </Popper>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import {smoothScroll } from '../../scroll'
import Popper from "vue3-popper";
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';

const store=useStore();
const category=computed(()=>store.state.category);

function Scroll(id){
    smoothScroll(id);
}
window.addEventListener('scroll',()=>{
    const el =  document.getElementById('nav--sticky')
    if(window.pageYOffset > 200){
       el.classList.add('active')
    }else{
        el.classList.remove('active')
    }
})
let showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav--sticky{
    display: none;
    position: fixed;
    background: #fff;
    width: 100%;
    height: auto;
    top: 0;
    z-index: 999;
    padding: 10px 0;
    box-shadow: 0 0px 10px 0.5px #16161617
}
.nav--sticky.active{
    display: flex;
}
:deep(.popper) {
    background: #ffffff;
    padding: 10px 5px;
    border-radius: 20px;
    color: rgb(48, 48, 48);
    font-weight: bold;
    text-transform: uppercase;
    box-shadow: 0 0 5px 1px #33333314;
  }

  :deep(.popper #arrow::before) {
    background: #ffffff;
  }

  :deep(.popper:hover),
  :deep(.popper:hover > #arrow::before) {
    background: #ffffff;
  }
  @media only screen and (max-width: 750px){
    #flag{
      display:none;
    }
  }
</style>
