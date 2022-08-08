<template>
   <div class="w-full mt-20 px-12 py-10">
      <div class="mb-10">
          <div class="grid grid-cols-4 justify-items-center content-center w-11/12 sm:w-8/12 md:w-4/12 m-auto mb-5">
            <img src="../../assets/svg/facebook-brands.svg" class="w-12" alt="">
            <img src="../../assets/svg/instagram-brands.svg" class="w-12" alt="">
            <img src="../../assets/svg/linkedin-in-brands.svg" class="w-12" alt="">
            <img src="../../assets/svg/twitter-brands.svg" class="w-12 mt-2" alt="">
          </div>
         <span id="line"></span>
      </div>
     
      <div class="w-full md:w-10/12 m-auto pl-12 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
         <div class="mt-4">
            <div class="w-11/12 rounded-xl shadow-md bg-gray-50 px-3 py-5">
               <p></p>
               <div class="grid my-4 mx-2">
                  <label for="">Subscribe to our newsletter</label>
                  <input type="email" placeholder="Email" required class="rounded-lg px-3 py-2 mx-3 my-2 bg-gray-50 border border-gray-400">
               </div>
               <button class="ml-10 px-5 py-1 text-lg rounded-lg bg-blue-400 text-white">Send</button>
            </div>
         </div>
         <div class="mt-4">
            <div class="flex justify-start items-center">
               <img src="../../assets/logo.png" class="w-24" alt="">
               <p class="font-bold Acme">AFAM TREAD</p>
            </div>
            <p class="text-base text-gray-600 ml-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum atque similique, reiciendis labore placeat accusamus doloribus corrupti earum quis, maxime facere nam temporibus voluptatem unde commodi aliquid sed, eius dolorum.\</p>
         </div>
         <div class="pl-10 pt-4 mt-4">
            <p class="text-xl ">Access</p>
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
   height: 10px;
   display: block;
   margin: auto;
   border-radius: 15px;
   background: radial-gradient(#47B5FF, #3D84F2);
}
@media only screen and (max-width: 650px){
#line{
   width: 80%;
}
}
</style>
