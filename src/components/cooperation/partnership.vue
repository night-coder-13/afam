<template>
    
    <div class="w-full md:w-5/12 h-4/6 md:h-auto order-2 md:order-1 overflow-auto text-white grid content-center pl-4 z-10">
        <p class="text-base ml-6 w-full ">
            We believe that our partnership would result in a successful marketing and advertising campaign that showcases both of our businesses and brings value to our customers and help us reach new audiences and achieve our marketing goals. We are excited to announce our new advertising cooperation to promote our natural stone products in different countries. As a leading supplier of natural stones, we are dedicated to providing our customers with high-quality products that meet their unique needs.
        </p>
        <button @click="$emit('EventMovePage','contact-us')" class="animate__animated animate__headShake mt-4 ml-4 w-40 h-10 cursor-pointer rounded-full text-base md:text-lg flex justify-center items-center border-white border-2 hover:bg-white hover:text-gray-800">
            Next page
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
    background: url('../../assets/img/handshaking.jpg') no-repeat center;
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