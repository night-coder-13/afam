<template>
    <div class="relative">
        <img src="../../assets/quotes-right.svg" class="absolute left-8 -top-11 w-28 md:w-32 z-50" alt="">
    </div>
    <div class="py-16 sm:py-24 px-2 sm:px-16 my-10 w-full section-coop overflow-hidden">
        
        <video autoplay muted loop id="myVideo">
            <source src="../../assets/video/stone.mp4" type="video/mp4">
        </video>
        <div class="flex flex-col lg:flex-row items-center relative">
            <div class="w-full lg:w-7/12 text-white">
                <h3 class="font-bold Acme">Cope stone</h3>
                <p class="text-base ml-3 mt-2 h-60 sm:h-auto overflow-hidden">Another name is Coop stone, block stone. Cope stone does not have a specific type in terms of gender, and all types of stones that are extracted from the mine are initially in the form of cope.
                    Therefore, coupe stones can be made of granite, marble and travertine. But the classification of all kinds of Kop stones is done based on its size and quality. In this category, there are a total of three types of Kop stones:

                    One coupe
                    Kop Tek Kop stone is of high quality because it has no cracks or scratches and its color harmony is high. The dimensions of the single cup stone are large and its shape is cut in a hexagonal shape. The weight of a single cup stone is 25 to 27 tons. Due to its dimensions and high weight, each single piece of rock is transported on a trailer.

                    Two coupes
                    The dimensions of the double cup stone are smaller than the single cup stone. In fact, two stones and two cups are equal to one single cup. Du Kop stones are usually in the shape of a rectangular cube, but they may not have a special shape. Two stones can be loaded on a trailer.
                </p> 
            </div>
            <div class="w-full lg:w-5/12">
                <img src="../../assets/img/stone.jpg" class="w-11/12 rounded-xl shadow m-auto mt-5 lg:mt-0" alt="">
            </div>
        </div>
    </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section-coop{
    background: linear-gradient(70deg, #070707a2 , rgba(0, 0, 0, 0) ) , url(../../assets/img/male-worker-with-bulldozer-sand-quarry.jpg) ;
    background-size: cover;
    background-position: center;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  filter: grayscale(.4) brightness(.8);
}

@media only screen and (max-width: 1250px){
#myVideo {
  display: none;
}
}
</style>
