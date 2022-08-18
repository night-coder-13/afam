<template>

<header class="w-full">
    <div data-aos="fade-up" class="flex flex-col sm:flex-row w-full py-9 px-8 sm:px-16 justify-between items-center">
        <div class="p-4 w-full lg:w-7/12 sm:w-6/12 order-2">
            <small class="text-sm sm:text-base -mb-1 text-gray-500">Lorem ipsum dolor</small>
            <h1 class="text-xl sm:text-4xl font-bold ml-2 Acme">Lorem ipsum dolor sit amet</h1>
            <h3 class="text-base sm:text-lg ml-6 w-full sm:w-10/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.</h3>
            <div class="flex mt-9">
                <p class="ml-16 w-32 h-10 cursor-pointer rounded-lg text-lg flex justify-center items-center text-white bg-blue-500 
                hover:bg-transparent border-2 border-blue-500 hover:text-gray-900
                ">Catalog</p>
                <p class="ml-4 w-32 h-10 cursor-pointer rounded-lg text-lg flex justify-center items-center border-blue-500 border-2
                hover:bg-blue-500 hover:text-white
                ">Contact us</p>
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
