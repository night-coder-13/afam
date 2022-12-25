<template>

  <div class="bg-gray-100 shadow">
    <nav id="hed" class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <router-link to="/" class="text-xl ml-8 font-bold text-gray-800 md:text-2xl">
            <img src="../../assets/logoname.png" class="w-40" alt="">
        </router-link>
        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <Popper arrow>
            <button class="text-lg mx-5 flex items-center"><img src="../../assets/flag/en.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> En </button>
            <template #content="{}">
              <a href="https://company.mehid-abasian.ir"
                 class="text-lg mx-5 flex items-center"><img src="../../assets/flag/en.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> en </a>
                <a href="http://translate.google.com/translate?hl=en&sl=en&tl=fa&u=https://company.mehdi-abasian.ir"
                class="text-lg mx-5 mt-2 flex items-center"><img src="../../assets/flag/fa.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> fa </a>
                <a href="http://translate.google.com/translate?hl=en&sl=en&tl=it&u=https://company.mehdi-abasian.ir"
                class="text-lg mx-5 mt-2 flex items-center"><img src="../../assets/flag/it.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> it </a>
                <a href="http://translate.google.com/translate?hl=en&sl=en&tl=ar&u=https://company.mehdi-abasian.ir"
                class="text-lg mx-5 mt-2 flex items-center"><img src="../../assets/flag/ar.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> ar </a>
                <a href="http://translate.google.com/translate?hl=en&sl=en&tl=tr&u=https://company.mehdi-abasian.ir"
                class="text-lg mx-5 mt-2 flex items-center"><img src="../../assets/flag/tr.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> tr </a>
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
        class=" flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 z-50">
        <li class="text-gray-900 font-bold">
            <router-link :to="{name : 'Home'}">Home</router-link>
        </li>
        
        <li class="text-gray-800 font-bold">
            <router-link :to="{name : 'Quarries'}">Quarries</router-link>
        </li>
        <li class="text-gray-800 font-bold">
            <router-link :to="{name : 'Catalog'}">Catalog</router-link>
        </li>
        <li class="text-gray-800 font-bold">
          <Popper arrow>
            <button class="font-bold flex items-center"> Product </button>
            <template #content="{}" >
              <div class="px-4 py-2"> 
                <p v-for="cat in category" :key="cat.id" class="text-gray-500 text-start capitalize ">
                  <router-link :to="{name:'Archive',params:{id:cat.id}}" @click="changeArchive" v-text="cat.name"></router-link>
                </p>
              </div>
            </template>
          </Popper>
        </li>
        <li class="text-gray-800 font-bold">
            <router-link :to="{name : 'About'}">About us</router-link>
        </li>
        <li class="text-gray-800 font-bold">
            <router-link  @click.prevent="Scroll('contact-us')" :to="{ name: 'Home', hash: '#contact-us' }">Contact Us</router-link>
        </li>
        <li id="flag">
          <Popper arrow>
              <button class="text-lg mx-3 flex items-center bg-blue-400 text-white py-1 px-4 rounded-full"><img src="../../assets/flag/en.jpg" class="mx-1 mr-2 w-6 h-4 rounded-full border-1 border-white" alt=""> En </button>
              <template #content="{}">
                <a href="https://company.mehid-abasian.ir"
                 class="text-lg mx-5 flex items-center"><img src="../../assets/flag/en.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> en </a>
                <a href="http://translate.google.com/translate?hl=en&sl=en&tl=fa&u=https://company.mehdi-abasian.ir"
                class="text-lg mx-5 mt-2 flex items-center"><img src="../../assets/flag/fa.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> fa </a>
                <a href="http://translate.google.com/translate?hl=en&sl=en&tl=it&u=https://company.mehdi-abasian.ir"
                class="text-lg mx-5 mt-2 flex items-center"><img src="../../assets/flag/it.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> it </a>
                <a href="http://translate.google.com/translate?hl=en&sl=en&tl=ar&u=https://company.mehdi-abasian.ir"
                class="text-lg mx-5 mt-2 flex items-center"><img src="../../assets/flag/ar.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> ar </a>
                <a href="http://translate.google.com/translate?hl=en&sl=en&tl=tr&u=https://company.mehdi-abasian.ir"
                class="text-lg mx-5 mt-2 flex items-center"><img src="../../assets/flag/tr.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> tr </a>
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
            <img src="../../assets/logoname.png" class="w-40" alt="">
        </router-link>
        <!-- Mobile menu button -->
        <div class="flex md:hidden">
            <Popper arrow>
              <button class="text-lg mx-5 flex items-center"><img src="../../assets/flag/en.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> En </button>
              <template #content="{}">
                <a href="https://company.mehid-abasian.ir"
                 class="text-lg mx-5 flex items-center"><img src="../../assets/flag/en.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> en </a>
                <a href="http://translate.google.com/translate?hl=en&sl=en&tl=fa&u=https://company.mehdi-abasian.ir"
                class="text-lg mx-5 mt-2 flex items-center"><img src="../../assets/flag/fa.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> fa </a>
                <a href="http://translate.google.com/translate?hl=en&sl=en&tl=it&u=https://company.mehdi-abasian.ir"
                class="text-lg mx-5 mt-2 flex items-center"><img src="../../assets/flag/it.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> it </a>
                <a href="http://translate.google.com/translate?hl=en&sl=en&tl=ar&u=https://company.mehdi-abasian.ir"
                class="text-lg mx-5 mt-2 flex items-center"><img src="../../assets/flag/ar.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> ar </a>
                <a href="http://translate.google.com/translate?hl=en&sl=en&tl=tr&u=https://company.mehdi-abasian.ir"
                class="text-lg mx-5 mt-2 flex items-center"><img src="../../assets/flag/tr.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> tr </a>
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

      <!-- nav stiky ******** -->
      <ul
        :class="showMenu ? 'flex animate__animated animate__fadeInLeft' : 'hidden'"
        class=" flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 z-50">
        <li class="text-gray-900 font-bold">
            <router-link :to="{name : 'Home'}">Home</router-link>
        </li>
        
        <li class="text-gray-800 font-bold">
            <router-link :to="{name : 'Quarries'}">Quarries</router-link>
        </li>
        <li class="text-gray-800 font-bold">
            <router-link :to="{name : 'Catalog'}">Catalog</router-link>
        </li>
        <li class="text-gray-800 font-bold">
          <Popper arrow>
              <button class=" flex items-center font-bold"> Product </button>
              <template #content="{}" >
                <div class="px-4 py-2">
                  <p v-for="cat in category" :key="cat.id" class="text-gray-500 text-start capitalize ">
                    <router-link :to="{name:'Archive',params:{id:cat.id}}" @click="changeArchive" v-text="cat.name"></router-link>
                  </p>
                </div>
              </template>
            </Popper>
        </li>
        <li class="text-gray-800 font-bold">
            <router-link :to="{name : 'About'}">About us</router-link>
        </li>
        <li class="text-gray-800 font-bold">
            <router-link  @click.prevent="Scroll('contact-us')" :to="{ name: 'Home', hash: '#contact-us' }">Contact Us</router-link>
        </li>
        <li id="flag">
          <Popper arrow>
              <button class="text-lg mx-3 flex items-center bg-blue-400 text-white py-1 px-4 rounded-full"><img src="../../assets/flag/en.jpg" class="mx-1 w-6 h-4 rounded-full border-1 border-white" alt=""> En </button>
              <template #content="{}">
                <a href="https://company.mehid-abasian.ir"
                 class="text-lg mx-5 flex items-center"><img src="../../assets/flag/en.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> en </a>
                <a href="http://translate.google.com/translate?hl=en&sl=en&tl=fa&u=https://company.mehdi-abasian.ir"
                class="text-lg mx-5 mt-2 flex items-center"><img src="../../assets/flag/fa.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> fa </a>
                <a href="http://translate.google.com/translate?hl=en&sl=en&tl=it&u=https://company.mehdi-abasian.ir"
                class="text-lg mx-5 mt-2 flex items-center"><img src="../../assets/flag/it.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> it </a>
                <a href="http://translate.google.com/translate?hl=en&sl=en&tl=ar&u=https://company.mehdi-abasian.ir"
                class="text-lg mx-5 mt-2 flex items-center"><img src="../../assets/flag/ar.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> ar </a>
                <a href="http://translate.google.com/translate?hl=en&sl=en&tl=tr&u=https://company.mehdi-abasian.ir"
                class="text-lg mx-5 mt-2 flex items-center"><img src="../../assets/flag/tr.jpg" class="mx-1 w-4 h-4 rounded-full" alt=""> tr </a>
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
import { useRoute } from 'vue-router';

const route=useRoute();
const store=useStore();
const category=computed(()=>store.state.category);
const slod=computed(()=>store.getters.getLoader)
async function get(){
   await store.dispatch('GetCategory')
}
get()
async function changeArchive(){
  if(!slod.value)
        store.commit('ChangeLoader')
    await store.dispatch('GetArchive',route.params.id)
    await store.dispatch('GetContentArchive',route.params.id)
    if(slod.value)
        store.commit('ChangeLoader')
}

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
