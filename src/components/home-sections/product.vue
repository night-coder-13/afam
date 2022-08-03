<template>
<div class="mb-36 mt-28">
    <p class="text-2xl font-bold text-center mb-6">Products</p>
    <div class="flex h-96 w-10/12 m-auto">
        <div class="w-8/12 h-full relative">
            <div class="bg-solid h-full ">
                
            </div>
            <div class="w-full h-72 bg-white rounded-lg ml-8 absolute top-10 flex justify-center items-center shadow-md">
                <div class="w-4/12 ">
                    <img src="../../assets/img/slider-stone-house-1.jpg" class="w-48 h-48 m-auto rounded-lg" alt="">
                </div> 
                <div class="w-8/12 relative">
                    <h3 class="text-xl font-bold">Lorem ipsum dolor</h3>
                    <p class="text-base h-32 ml-4 w-11/12">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque error reiciendis exercitationem impedit facere, nesciunt magni cupiditate fugit earum ut ipsa pariatur quod? Rerum fugiat recusandae nostrum minima molestiae! Temporibus?</p>
                    <a class="absolute right-16 -bottom-5 text-blue-500" href="#">Read more <i class="ti-angle-right text-sm"></i></a>
                </div>
            </div>
        </div>
        <div class="w-4/12">
            <div class="grid justify-center px-4 overflow-y-scroll h-full">
                <div class="flex mt-4 justify-center shadow-md p-3 rounded-md bg-gray-100">
                    <img src="../../assets/img/1-26.jpg" class="w-24 h-24 rounded-xl" alt="">
                    <div class="ml-2">
                        <p class="mt-4 text-lg">lorme ipsum sit</p>
                        <p class="text-base text-gray-500 ml-2">view 185 <i class="ti-eye"></i></p>
                    </div>
                   
                </div>
                <div class="flex mt-4 justify-center p-3 rounded-md bg-gray-100">
                    <img src="../../assets/img/1-27.jpg" class="w-24 h-24 rounded-xl" alt="">
                    <div class="ml-2">
                        <p class="mt-4 text-lg">lorme ipsum sit</p>
                        <p class="text-base text-gray-500 ml-2">view 185 <i class="ti-eye"></i></p>
                    </div>
                   
                </div>
                <div class="flex mt-4 justify-center p-3 rounded-md bg-gray-100">
                    <img src="../../assets/img/1-29.jpg" class="w-24 h-24 rounded-xl" alt="">
                    <div class="ml-2">
                        <p class="mt-4 text-lg">lorme ipsum sit</p>
                        <p class="text-base text-gray-500 ml-2">view 185 <i class="ti-eye"></i></p>
                    </div>
                   
                </div>
                
            </div>
        </div>
   </div>
</div>
  

</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bg-solid{
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    background-image: url(../../assets/img/slider-stone-house-1.jpg);
    background-size: cover;
    -webkit-mask-image: url(../../assets/slider-stone-house-11.png);
    mask-image: url(../../assets/slider-stone-house-11.png);
    mask-size: 100% 100%;
    filter: blur(5px);
}
</style>
