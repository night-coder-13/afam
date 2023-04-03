<template>
   <div class="w-full mt-20 px-5 sm:px-12 py-10 bg-blue-900">
      <div class="mb-10">
          <div class="grid grid-cols-3 justify-items-center content-center w-10/12 sm:w-8/12 md:w-4/12 m-auto mb-5">
            <!-- <img src="../../assets/svg/facebook-brands.svg" class="w-8 sm:w-12" alt=""> -->
            <img src="../../assets/svg/instagram-brands.svg" class="w-8 sm:w-12" alt="">
            <img src="../../assets/svg/linkedin-in-brands.svg" class="w-8 sm:w-12" alt="">
            <a href="http://wa.me/989132000823" class="shadow-md text-white w-8 sm:w-12 font-bold right-10"><img src="../../assets/whatsapp.png" alt=""></a>
            <!-- <img src="../../assets/svg/twitter-brands.svg" class="w-8 sm:w-12 mt-2" alt=""> -->
          </div>
         <span id="line"></span>
      </div>
     
      <div class="w-full bg-blue-900 md:w-10/12 m-auto sm:pl-12 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
         <div class="mt-4 mb-10">
            <div class="sm:w-11/12 text-center rounded-xl shadow-md bg-gray-50 px-3 py-5">
               <h4 class="font-bold Acme text-lg" id="">Subscribe to AFAM Stone to inform tips and discounts</h4>
            <div class="mt-4 mb-4 text-center relative">
                <input type="text" placeholder="Email" class="rounded-full h-12 px-3 w-full py-2 bg-gray-150 shadow border-none">
                <button class="btn-in-input absolute right-2 ml-2 px-6 py-1 text-lg rounded-full bg-gray-200 shadow text-blue-400 font-bold btn-send">Send</button>
            </div>
            </div>
         </div>
         <div class="mt-4">
            <div class="flex justify-start items-center">
               <img src="../../assets/logoname_w.png" class="w-48 mb-2" alt="">
            </div>
            <p class="text-base text-gray-100 ml-8">We supply and transport all kinds of stone to meet the needs of our customers globally. We use our skills and expertise in extraction and production of stone to promote Esfahan, Iran and our brand worldwide.</p>
         </div>
         <div class="pl-10 pt-4 mt-4 relative w-11/12">
            <p class="text-xl text-white">Menu</p>
            <ul class=" mt-8 text-white md:items-center pl-4 md:mt-4 z-20">
               <li class="nav-item font-bold">
                     <router-link :to="{name : 'Home'}">Home</router-link>
               </li>
               
               <li class="nav-item font-bold">
                     <router-link :to="{name : 'Catalog'}">Catalog</router-link>
               </li>
               <!-- <li class="nav-item font-bold">
                     <router-link :to="{name : 'Blog'}">Blog</router-link>
               </li> -->
               
               <li class="nav-item font-bold">
                     <router-link :to="{name : 'About'}">About us</router-link>
               </li>
               <li class="nav-item font-bold">
                     <router-link  @click.prevent="Scroll('contact-us')" :to="{ name: 'Home', hash: '#contact-us' }">Contact Us</router-link>
               </li>
               <li class="nav-item font-bold">
                     <router-link :to="{name : 'Cooperation'}">Cooperation</router-link>
               </li>
            </ul>
<!--             
            <ul class="text-sm mt-4 ml-5 text-gray-100">
               <li>lorme</li>
               <li>lorme ipsum</li>
               <li>lorme ipsum dolor</li>
               <li>lorme ipsum </li>
               <li>lorme ipsum site</li>
               <li>akbar lorm</li>
            </ul> -->
         </div>
      </div>

   </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-send{
   top: 7px;
}
.img:hover{
    filter: grayscale(1);
    transform: scale(1.2);
    transition: .7s;
    
}
#line{
   width: 55%;
   height: 5px;
   display: block;
   margin: auto;
   border-radius: 15px;
   background: radial-gradient(#f4f4f4f2 30%, #ffffff05 65%);
}
@media only screen and (max-width: 650px){
#line{
   width: 100%;
}
}
</style>
