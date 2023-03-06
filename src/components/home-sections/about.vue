<template>
   <div class="w-full bg-blue-900 py-20 px-5 center--center mt-10"> 
        <div class="flex flex-col sm:flex-row w-full````````` sm:w-11/12 text-white">
            <div class="w-full sm:w-5/12 py-6 pr-5 grid content-between">
                <div>
                    <h3 class="Acme">About us</h3>
                    <p class="text-base ml-4">We are group of specialists in field of stones and mining and besides we have many business partners in Europe and Asia which made communication easier with customers for us. AFAM Stone company is well known for being accessible, providing customized products with accuracy and being trustworthy.  </p>
                    <p class="text-base ml-4 mt-2">As the best source of natural stones, we can supply carefully chosen stones, with a variety of colors, for both indoor and outdoor purposes and in tailored sizes.</p>
                </div>
                
                <div class="mt-10 sm:mt-0 mb-14 sm:mb-0">
                    <router-link :to="{name : 'About'}" class="ml-2 w-40 h-11 cursor-pointer rounded-full text-base md:text-lg flex justify-end items-center text-white bg-trasparent 
                hover:bg-gray-100 border border-white hover:text-gray-900
                    "> 
                        <span class="mr-8">About us</span> 
                        <div class="w-9 h-9 bg-white rounded-full mr-2 center--center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <circle id="Ellipse_707" data-name="Ellipse 707" cx="20" cy="20" r="20" fill="#fff"/>
                            <path id="arrow-right2" d="M21.484,19.831,27.861,13.6a1.389,1.389,0,0,0,0-1.964l-6.378-6.31A1.389,1.389,0,1,0,19.52,7.286l4.006,3.939L3.389,11.153a1.389,1.389,0,0,0,0,2.778L23.526,14,19.52,17.866a1.389,1.389,0,0,0,1.964,1.964Z" transform="translate(5.03 7.26)" fill="#133346"/>
                            </svg>
                        </div>
                    </router-link>
                </div>
                
            </div>
            <div class="w-full sm:w-7/12 grid grid-cols-1 lg:grid-cols-2">
                <div class="box flex">
                    <div>
                        <span></span>
                        <!-- <img src="" alt=""> -->
                    </div>
                    <div class="p-2">
                        <img src="../../assets/png/box.png" class="image-box" width="" alt="">
                    </div>
                    <div>
                        <h4 class="text-lg Acme">Wide range of products</h4>
                        <p class="text-sm ml-2 mt-2 ">We have gathered a wide range of natural stones in the shapes of blocks, tiles and slabs available on different finished surfaces like polished, honed, tumble, bush hammered, sandblast chiseled and etc., to meet the variety of customer needs.</p>
                    </div>
                </div>
                <div class="box flex">
                    <div>
                        <span></span>
                        <!-- <img src="" alt=""> -->
                    </div>
                    <div class="p-2">
                        <img src="../../assets/png/rating.png" class="image-box" width="300px" alt="">
                    </div>
                    <div>
                        <h4 class="text-lg Acme">Monitor product quality</h4>
                        <p class="text-sm ml-2 mt-2">We carefully monitor and control the whole process of supplying the stones; Including block mining, crude stone processing, packaging, and transportation with fair price and in the shortest time.</p>
                    </div>
                </div>
                <div class="box flex">
                    <div>
                        <span></span>
                        <!-- <img src="" alt=""> -->
                    </div>
                    <div class="p-2">
                        <img src="../../assets/png/control-system.png" class="image-box" width="300px" alt="">
                    </div>
                    <div>
                        <h4 class="text-lg Acme">Advice for customers</h4> <!--- Preparation process -->
                        <p class="text-sm ml-2 mt-2">We also Have specialists, available for consulting to help our customers finding their optimal product, with absolutely no cost.</p>
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
.box{
    margin: 10px 5px;
}
.box span{
    display: block;
    height: 100%;
    width: 5px;
    background: radial-gradient(#f4f4f4b0 20%, #ffffff05 55%);
    margin: 0 5px;

}
.image-box{
}
</style>
