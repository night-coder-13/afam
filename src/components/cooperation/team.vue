<template>
    
    <div class="w-full md:w-5/12 h-4/6 md:h-auto order-2 md:order-1 text-white grid content-center pl-4 z-10">
        <h2 class="text-xl sm:text-4xl font-bold ml-2 Acme mt-8 mb-2">Business Cooperation</h2>
        <p class="text-base pl-6 w-full ">
            Our team is pleased to inform you of a new advertising cooperation opportunity that could benefit both of our businesses. Our company, specializes in natural stones which source, process, and supply a variety of natural stones to customers in construction, landscaping, and interior or exterior design industries.
        </p>
        <button @click="$emit('EventMovePage','partnership')" class="animate__animated animate__headShake mt-4 ml-4 w-40 h-10 cursor-pointer rounded-full text-base md:text-lg flex justify-center items-center border-white border-2 hover:bg-white hover:text-gray-800">
            Cooperation...
        </button>
    </div>
    <div class="w-full md:w-7/12 h-2/6 md:h-auto order-1 md:order-2 relative">
        <div id="image"></div>
        <div id="image_bg"></div>
    </div>

</template>

<script setup>

</script>

<style scoped>
.animate__animate{
    animation-delay: 1s;
}
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
@media only screen and (max-width: 760px) {
    #image{
        clip-path: polygon(1% 0, 100% 0%, 100% 100%, 0% 100%);
    }
}
</style>