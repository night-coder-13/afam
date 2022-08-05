<template>
<header class="w-full">
   <Hed />
    <div class="flex w-full py-9 px-16 justify-between items-center">
        <div class="p-4 lg:w-7/12 w-6/12">
            <small class="text-base -mb-1 text-gray-500">Lorem ipsum dolor</small>
            <h1 class="text-4xl font-bold ml-2 Acme">Lorem ipsum dolor sit amet</h1>
            <h3 class="text-lg ml-6 w-10/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.</h3>
            <div class="flex mt-9">
                <p class="ml-16 w-32 h-10 cursor-pointer rounded-lg text-lg flex justify-center items-center text-white bg-blue-500 
                hover:bg-transparent border-2 border-blue-500 hover:text-gray-900
                ">Catalog</p>
                <p class="ml-4 w-32 h-10 cursor-pointer rounded-lg text-lg flex justify-center items-center border-blue-500 border-2
                hover:bg-blue-500 hover:text-white
                ">Contact us</p>
            </div>
        </div>
        <div class="flex lg:w-4/12 w-6/12 lg:mr-10 mr-0"> 
            <img src="../../assets/img/a-4.jpg" class="w-6/12 m-2 rounded-xl" alt="">
            <div class="w-6/12 mx-2">
                <img src="../../assets/img/a-2.jpg" class="my-2 h-48 rounded-xl" alt="">
                <img src="../../assets/img/a-3.jpg" class="my-2 h-44 rounded-xl" alt="">
            </div>
        </div>
    </div>
</header>
</template>

<script setup>
import Hed from './hed.vue'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
