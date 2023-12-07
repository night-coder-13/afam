<template  >
    <Header />
        <div class="w-full" :key="$route.path" data-aos="fade-up">
            <div class="w-full h-52 overflow-hidden">
                <div>
                    <img src="../../assets/img/male-worker-with-bulldozer-sand-quarry.jpg" class="w-full md:-mt-96 " alt="">
                </div>
            </div>
            <div class="w-10/12 m-auto">
                <p class="font-bold text-3xl Acme mb-6 mt-8">About us</p>
                <div class="flex md:flex-row flex-col">
                    <div class="w-full md:w-8/12 md:ml-4">
                        <p class="text-base ml-4">We are group of specialists in field of stones and mining which source, process, and supply a variety of natural stones to customers in construction. We have also many business partners in Europe and Asia which made communication easier with customers for us. AFAM Build company is well known for being accessible, providing customized products with accuracy and being trustworthy.</p>
                        <p class="text-base ml-4 mt-4">As the best source of natural stones, we can supply carefully chosen stones, with a variety of colors, for both indoor and outdoor purposes and in tailored sizes.</p>
                    </div>
                    <div class="pl-10 hidden md:block w-10/12 md:w-4/12 pt-6 md:pt-0">
                        <p class="text-lg Acme ">Quick access</p>
                        <ul class="ml-2 mt-1">
                            <li><button @click="movTo('Our-Vision')">Our Vision</button> </li>
                            <li><button @click="movTo('Why-choose-us')">Why choose us</button> </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div id="Our-Vision" ></div>
            <div class="flex md:flex-row flex-col mt-20 md:mt-40 w-10/12 m-auto" >
                <div class="w-full md:w-5/12">
                    <img src="../../assets/img/businessmen-handshaking.jpg" class="w-full rounded-xl shadow-md" alt="">
                </div>
                <div class="w-full md:w-7/12 sm:pl-8">
                    <h2 class="text-start text-2xl Acme mb-3 mt-8 font-bold">Our Vision</h2>
                    <p class="text-gray-600 text-base w-11/12 ml-4 h-56 overflow-scroll">We aim to continue to supply natural stones for new projects around the world since we have been providing building stones for many years in civil engineering. 
                    We hope to be one of the top exporters of building stones in this regard. In all of our markets, AFAM Build will be the distributor of choice for hand-selected unique blocks, tiles and slabs. Our vision is to be the industry leader in premium quality and to fulfill orders precisely according to customer specifications.
                    </p>
                </div>
            </div>
            <div id="Why-choose-us" ></div>
            <div class="flex md:flex-row flex-col mt-20 md:mt-40 w-10/12 m-auto" >
                <!-- <div class="w-full md:w-5/12">
                    <img src="../../assets/img/businessmen-handshaking.jpg" class="w-full rounded-xl shadow-md" alt="">
                </div> -->
                <div class="w-full sm:pl-8">
                    <h2 class="text-start text-2xl Acme mb-1 mt-8 mb-3 font-bold">Why choose us</h2>
                    <div class="text-gray-600 text-base pl-5 w-11/12 ml-4">
                        <ol start="1">
                            <li>We have gathered a wide range of natural stones in the shapes of blocks, tiles and slabs available on different finished surfaces like polished, honed, tumble, bush hammered, sandblast chiseled and etc., to meet the variety of customer needs.</li>
                            <li>We carefully monitor and control the whole process of supplying the stones; Including block mining, crude stone processing, packaging and transportation with fair price and in the shortest time.</li>
                            <li>We also Have specialists, available for consulting to help our customers finding their optimal product, with absolutely no cost.</li>
                            <li>Our team considering all the safety parameters in terms of packaging and handling, transportation vehicles, route planning, documentation and etc., will delivered your order.</li>

                            <!-- <li>We also Have specialists, available for customer consulting to help them find their optimal product, with absolutely no cost.</li> -->
                        </ol>
                    </div>
                    
                </div>
            </div>
            <!-- <div class="flex md:flex-row flex-col mt-20 md:mt-40 w-10/12 m-auto" id="our-history">
                <div class="w-full md:w-7/12 sm:pl-8">
                    <h2 class="text-start text-2xl Acme mb-1 mt-8">Our history</h2>
                    <p class="text-gray-600 text-base w-11/12 ml-4 h-56 overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.</p>
                   
                </div>
                <div class="w-full md:w-5/12 md:mt-2 mt-7">
                    <img src="../../assets/img/stone.jpg" class="w-full rounded-xl shadow-md rotate-12 history-img" alt="">
                </div>
            </div> -->
        </div>

    <Footer />
</template>

<script setup>
import Header from '../home-sections/hed.vue'
import Footer from '../home-sections/footer.vue'
import {smoothScroll} from '../../scroll'

function movTo(id){
    smoothScroll(id);
}
</script>

<style scoped>
ol{
    list-style-type: decimal;
}
ol li{
    margin-bottom: 3px;
}
.first-row-analysis th{
    padding: 0 10px;
}
.history-img{
    margin-left: 10px;
    transform: rotateZ(-3deg);
}
</style>