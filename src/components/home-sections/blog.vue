<template>
   <div class="w-full px-8 lg:px-12 my-28 md:my-32">
    <!-- <p class="text-2xl font-bold text-center mb-6">Blog</p> -->
    <div class="flex flex-col lg:flex-row items-center">
        <div class="w-full md:w-6/12 lg:w-4/12">
            <div class="blog-title flex justify-center items-center">
                <div class="w-6/12 m-auto relative">
                    <h3 class="text-3xl font-bold Acme">Blog</h3>
                    <p class="text-base text-gray-500 ml-3 mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, inventore provident aut sed quis eum impedit ut numquam.</p>
                    <a class="absolute right-8 -bottom-10 text-blue-500" href="#">Show all <i class="ti-arrow-circle-right text-sm"></i></a>

                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-8/12 m-auto">
            <div class="rounded-xl shadow-md mx-4 mt-4">
                <div class="w-full h-44 overflow-hidden">
                    <img src="../../assets/img/images.jpg" class="w-full rounded-t-xl" alt="">
                </div>
                
                <div class="py-3 px-1">
                    <p class="text-sm text-gray-400"> <i class="ti-time"></i> 2022-11-25 </p>
                    <h2 class="text-lg ml-3 mt-2">Lorem ipsum, dolor sit amet consectetur</h2>
                    <div class="flex items-center justify-around  mt-6">
                        <button class=" "><i class="ti-heart"></i> +158</button>
                        <button class="px-7 py-2 text-sm bg-blue-200 rounded-lg text-gray-600">Read more</button>
                    </div>
                </div>
            </div>
            
            <div class="rounded-xl shadow-md mx-4 mt-4">
                <div class="w-full h-44 overflow-hidden">
                    <img src="../../assets/img/21.jpg" class="w-full rounded-t-xl" alt="">
                </div>
                
                <div class="py-3 px-1">
                    <p class="text-sm text-gray-400"> <i class="ti-time"></i> 2022-11-25 </p>
                    <h2 class="text-lg ml-3 mt-2">Lorem ipsum, dolor sit amet consectetur</h2>
                    <div class="flex items-center justify-around  mt-6">
                        <button class=" "><i class="ti-heart"></i> +20</button>
                        <button class="px-7 py-2 text-sm bg-blue-200 rounded-lg text-gray-600">Read more</button>
                    </div>
                </div>
            </div>
            
            <div class="rounded-xl shadow-md mx-4 mt-4">
                <div class="w-full h-44 overflow-hidden">
                    <img src="../../assets/img/s_limestone_6272.jpg" class="w-full rounded-t-xl" alt="">
                </div>
                
                <div class="py-3 px-1">
                    <p class="text-sm text-gray-400"> <i class="ti-time"></i> 2022-11-25 </p>
                    <h2 class="text-lg ml-3 mt-2">Lorem ipsum, dolor sit amet consectetur</h2>
                    <div class="flex items-center justify-around  mt-6">
                        <button class=" "><i class="ti-heart"></i> +36</button>
                        <button class="px-7 py-2 text-sm bg-blue-200 rounded-lg text-gray-600">Read more</button>
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
.blog-title{
    width: 100%;
    height: 350px;
    background: url(../../assets/Path\ 2106.svg);
    background-size: 105% 100%;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
