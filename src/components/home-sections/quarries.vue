<template>
    <div class="relative">
        <img src="../../assets/quotes-right.svg" class="absolute left-8 sm:left-12 -top-11 w-28 md:w-32 z-50" alt="">
    </div>
    <div class="py-16 sm:py-24 px-2 sm:px-16 my-10 w-full section-coop overflow-hidden">
        
        <video autoplay muted loop id="myVideo">
            <source :src="'../../assets/video/stone_.mp4'" type="video/mp4">
        </video>
        <div class="flex flex-col lg:flex-row items-center relative">
            <div class="w-full lg:w-7/12 text-white">
                <h3 class="font-bold Acme">معادن</h3>
                <p class="text-base ml-3 mt-1 mb-6 h-60 sm:h-auto px-2 overflow-hidden">
                    کشور ایران از لحاظ سنگ‌های معدنی، منطقۀ ثروتمندی به شمار می‌آید. پراکندگی معادن سنگ بین استان‌های کشور اختلاف مشهودی دارد. طبق آمار استان‌های اصفهان، خراسان، فارس، کردستان و آذربایجان شرقی در مجموع حدود ۶۹% این معادن را به خود اختصاص . برای آشنایی با تاریخچه استخراج سنگ در ایران مطلبی نوشته‌ایم که درصورت تمایل می‌توانید مطالعه فرمایید.
                </p> 
                <router-link :to="{name:'Quarries'}" class="px-4 py-1 border rounded-md border-gray-100 ml-10 hover:bg-gray-100 hover:text-black">مشاهده</router-link>
            </div>
            <div class="w-full lg:w-5/12">
                <v-lazy-image  class="w-11/12 rounded-xl shadow m-auto mt-5 bg-gray-100 lg:mt-0"
                    :src-placeholder="require('../../assets/gif/loader-img.gif')"
                    :src="require('../../assets/img/stone.jpg')" alt="Image Quarries"/> 
            </div>
        </div>
    </div>
</template>

<script setup>
import VLazyImage from "v-lazy-image";

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
  filter: grayscale(.4) brightness(.7) blur(2px);
}

@media only screen and (max-width: 1250px){
#myVideo {
  display: none;
}
}
</style>
