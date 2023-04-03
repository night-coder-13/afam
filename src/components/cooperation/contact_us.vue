<template>
    
    <div class="w-full md:w-5/12 h-4/6 md:h-auto order-2 md:order-1 overflow-auto py-4 text-white grid content-center pl-4 z-10">
        <p class="text-base h-auto pt-2 md:pl-6 md:pt-4 w-full ">
            We are excited to discuss the potential for collaboration and how we can work together to create a successful campaign. Please let us know if you're interested in scheduling a call or meeting to discuss in future.
        </p>
       <div>
            <form action="" class="px-2 sm:px-10">
                <input type="text" placeholder="Company name" class="rounded-lg text-base mt-3 h-9 px-4 w-full py-5 bg-transparent shadow border-2 border-gray-100">
                <input type="text" placeholder="Email" class="rounded-lg text-base mt-3 h-9 px-4 w-full py-5 bg-transparent shadow border-2 border-gray-100">
                <input type="text" placeholder="Country" class="rounded-lg text-base mt-3 h-9 px-4 w-full py-5 bg-transparent shadow border-2 border-gray-100">
                <textarea type="text" placeholder="Description" required class="rounded-lg w-full mt-3 px-4 py-3 h-20 bg-transparent border-2 border-gray-100"></textarea>
            </form>
            <button class="mt-4 ml-4 w-40 h-10 cursor-pointer rounded-full text-base md:text-lg flex justify-center items-center border-white border-2 hover:bg-white hover:text-gray-800">
                Sand
            </button>
       </div>
    </div>
    <div class="w-full md:w-7/12 h-2/6 md:h-auto order-1 md:order-2 relative">
        <div id="image"></div>
        <div id="image_bg"></div>
    </div>

</template>

<script setup>

</script>

<style scoped>

#image{
    clip-path: polygon(1% 0, 100% 0%, 100% 100%, 25% 100%);
    background: url('../../assets/img/contact-us.jpg') no-repeat center;
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