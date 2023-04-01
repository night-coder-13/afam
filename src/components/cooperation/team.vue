<template>
    
    <div class="w-5/12 text-white grid content-center pl-4 z-10">
        <h2 class="text-xl sm:text-4xl font-bold ml-2 Acme mt-8 mb-2">Business Cooperation</h2>
        <p class="text-base ml-6 w-full ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde voluptate necessitatibus maiores optio ex earum, cupiditate animi, minus praesentium ab eum id. Eaque autem, nostrum minus iure distinctio recusandae.</p>
        <button @click="$emit('EventMovePage','partnership')" class="mt-4 ml-4 w-40 h-10 cursor-pointer rounded-full text-base md:text-lg flex justify-center items-center border-white border-2 hover:bg-white hover:text-gray-800">
            Cooperation...
        </button>
    </div>
    <div class="w-7/12 relative">
        <div id="image"></div>
        <div id="image_bg"></div>
    </div>

</template>

<script setup>

</script>

<style scoped>
#image{
    clip-path: polygon(1% 0, 100% 0%, 100% 100%, 25% 100%);
    background: url('../../assets/img/our-team.jpg') no-repeat center;
    background-size: cover;
    height: 100%;
    position: relative;
}
#image_bg{
    clip-path: polygon(1% 0, 100% 0%, 100% 100%, 25% 100%);
    background-color: #fff;
    height: 100%;
    width: 100%;
    z-index: -9;
    position: absolute;
    top: 0;
    right: 3px;
}
</style>