<template>
   <div class="flex h-96 my-20 w-10/12 m-auto">
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
                <a class="absolute right-16 bottom-0">more</a>
            </div>
        </div>
    </div>
    <div class="bg-green-500 w-4/12">
        <div>
            slider
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
}
</style>
