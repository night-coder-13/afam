<template>
    <Header />
        <div class="w-full" data-aos="fade-up">
            <div class="w-full h-52 overflow-hidden">
                <div>
                    <img src="../../assets/img/21.jpg" class="w-full -mt-80" alt="">
                </div>
            </div>
            <div class="flex md:flex-row flex-col">
                <div class="w-full md:w-5/12 p-5">
                    <div>
                        <img src="../../assets/img/1-1.jpg" class="w-9/12 md:w-10/12 m-auto rounded-xl shadow-md -mt-32" alt="">
                    </div>
                    
                </div>
                <div class="w-full md:w-7/12 px-6 md:px-0">
                    
                    <h4 class="text-2xl font-bold Acme mt-5 mb-2">Trevanter</h4>
                    <div class="text-base ml-4 text-gray-600">
                        <p class="mb-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus nihil esse repellat quia fuga, nobis iusto vitae aut nemo consectetur tempora reprehenderit error, possimus explicabo! Assumenda tempore modi repudiandae.</p>
                        <p class=" ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt aperiam vel maxime ipsa fuga dolores veritatis hic eius numquam dolore sed ducimus, eligendi excepturi architecto. Quasi, assumenda! Reprehenderit, commodi.</p>
                    </div>
                    <div class="text-base ml-4 text-gray-600">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.</p>
                    </div>
                    <p class="text-lg font-bold mt-5 mb-2">Title Trevanter</p>
                    <div class="text-base ml-4 text-gray-600">
                        <p class="mb-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus nihil esse repellat quia fuga, nobis iusto vitae aut nemo consectetur tempora reprehenderit error, possimus explicabo! Assumenda tempore modi repudiandae.</p>
                        <p class=" ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt aperiam vel maxime ipsa fuga dolores veritatis hic eius numquam dolore sed ducimus, eligendi excepturi architecto. Quasi, assumenda! Reprehenderit, commodi.</p>
                    </div>
                </div>
            </div><!---->
            <div class="flex mt-16" data-aos="fade-up">
                <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 w-10/12 md:w-11/12 lg:w-10/12 m-auto">
                    
                    <div v-for="img in imgs" :key="img.a">
                    <router-link :to="{name:'Product'}">
                        <div class="mx-4 mt-3 mb-5 h-60 relative archive">
                            <div class="w-full bg-name rounded-b-xl h-full"></div>
                            <img :src="require('../../assets/img/'+img.a)" class="img h-full w-full rounded-xl" alt="">
                            <div>
                                <img :src="require('../../assets/img/'+img.b)" class="box-img img rounded-lg absolute -right-4 shadow-md -bottom-4 w-5/12 h-24" alt="">
                                <div class="absolute text-white bottom-0 p-2 pl-3 w-7/12">
                                    <p class="text-base">Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    </div> 
                </div>
            </div>
           
        </div>

    <Footer />
</template>

<script setup>
import Header from '../home-sections/hed.vue'
import Footer from '../home-sections/footer.vue'
import { ref } from '@vue/reactivity'

const imgs = ref([
    {
        a:'slider-stone-house-1.jpg',
        b:'Cloud-Onyx-Marble.jpg'
    },
    {
        a:'TRAVERTINE-MARBLE-12.jpg',
        b:'travertine-stone-7.jpg'
    },
    {
        a:'a-3.jpg',
        b:'340719-200.png'
    },
    {
        a:'1-29.jpg',
        b:'1-1.jpg'
    },
    {
        a:'21.jpg',
        b:'Classic-Cream-Travertine-Tile.jpg'
    },
    {
        a:'a-2.jpg',
        b:'granite-wall_1122-1299.jpg'
    },
]);
</script>

<style scoped>
.first-row-analysis th{
    padding: 0 10px;
}
.bg-name{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: linear-gradient(180deg , rgba(255, 255, 255, 0) 70%, rgba(0, 0, 0, 0.644));
}
.archive:hover .box-img{
    /* bottom: -27px; */
    transform: scale(1.05) translateY(-10px);
    transition: .5s ease-in-out;
}
.archive:hover img:not(.box-img){
    transition: .5s;
    filter: grayscale(1);
}
</style>