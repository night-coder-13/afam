<template>
   <div class="w-full mt-20 px-12 py-10">
      <div class="mb-10">
          <div class="grid grid-cols-4 justify-items-center content-center w-10/12 sm:w-8/12 md:w-4/12 m-auto mb-5">
            <img src="../../assets/svg/facebook-brands.svg" class="w-8 sm:w-12" alt="">
            <img src="../../assets/svg/instagram-brands.svg" class="w-8 sm:w-12" alt="">
            <img src="../../assets/svg/linkedin-in-brands.svg" class="w-8 sm:w-12" alt="">
            <img src="../../assets/svg/twitter-brands.svg" class="w-8 sm:w-12 mt-2" alt="">
          </div>
         <span id="line"></span>
      </div>
     
      <div class="w-full md:w-10/12 m-auto sm:pl-12 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
         <div class="mt-4">
            <div class="sm:w-11/12 rounded-xl shadow-md bg-gray-50 px-3 py-5">
               <p></p>
               <div class="grid my-4 mx-2">
                  <label for="">در خبرنامه ما عضو شوید</label>
                  <input type="email" placeholder="ایمیل" required class="rounded-lg w-full px-3 py-2 mx-3 my-2 bg-gray-50 border border-gray-400">
               </div>
               <button class="ml-10 px-5 py-1 text-base rounded-lg bg-blue-400 text-white">ارسال</button>
            </div>
         </div>
         <div class="mt-4">
            <div class="flex justify-start items-center">
               <img src="../../assets/logo_.png" class="w-44 mb-2" alt="">
            </div>
            <p class="text-base text-gray-600 ml-8">ما سنگ تراورتن و ماربل را برای پاسخگویی به نیازهای مشتریان خود در سطح جهانی عرضه می کنیم.

ما از تاریخچه خود در حفاری و ساخت سنگ برای معرفی اصفهان، ایران و برند های ایرانی در سراسر جهان استفاده می کنیم.</p>
         </div>
         <div class="pl-10 pt-4 mt-4">
            <p class="text-xl ">دسترسی سریع</p>
            <ul class="text-sm mt-4 ml-5 text-gray-600">
               <li>lorme</li>
               <li>lorme ipsum</li>
               <li>lorme ipsum dolor</li>
               <li>lorme ipsum </li>
               <li>lorme ipsum site</li>
               <li>akbar lorm</li>
            </ul>
         </div>
      </div>

   </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img:hover{
    filter: grayscale(1);
    transform: scale(1.2);
    transition: .7s;
    
}
#line{
   width: 45%;
   height: 5px;
   display: block;
   margin: auto;
   border-radius: 15px;
   background: radial-gradient(#89d0ff, #337dec);
}
@media only screen and (max-width: 650px){
#line{
   width: 100%;
}
}
</style>
