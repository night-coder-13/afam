<template>
    <Header />
        <div class="w-full">
            <div class="w-full h-52 overflow-hidden">
                <div>
                    <img src="../../assets/img/21.jpg" class="w-full -mt-80" alt="">
                </div>
            </div>
            <div class="flex md:flex-row flex-col">
                <div class="w-full md:w-5/12 p-5">
                    <div>
                        <img src="../../assets/img/21.jpg" class="w-10/12 m-auto rounded-xl shadow-md -mt-32" alt="">
                    </div>
                    
                </div>
                <div class="w-full md:w-7/12 px-6 md:px-0">
                    <div class="mt-8 ml-5">
                        <button class="px-5 py-1 text-base text-white rounded-xl shadow bg-blue-400 mx-1">slab</button>
                        <button class="px-5 py-1 text-base text-white rounded-xl shadow bg-blue-400 mx-1">til</button>
                    </div>
                    <table class=" mt-4">
                        <thead>
                            <tr class="bg-gray-200 p-1 ">
                            <th class="rounded-tl-lg">Song</th>
                            <th>Artist</th>
                            <th class="rounded-tr-lg">Year</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr class="">
                            <td class="px-3 py-2">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td class="px-3 py-2">Malcolm Lockyer</td>
                            <td class="px-3 py-2">1961</td>
                            </tr>
                            <tr class="">
                            <td class="px-3 py-2">Witchy Woman</td>
                            <td class="px-3 py-2">The Eagles</td>
                            <td class="px-3 py-2">1972</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="mt-8">
                        <h4 class="text-xl font-bold mb-2">description</h4>
                        <div class="text-base ml-4 text-gray-600">
                            <p class="mb-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus nihil esse repellat quia fuga, nobis iusto vitae aut nemo consectetur tempora reprehenderit error, possimus explicabo! Assumenda tempore modi repudiandae.</p>
                            <p class=" ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt aperiam vel maxime ipsa fuga dolores veritatis hic eius numquam dolore sed ducimus, eligendi excepturi architecto. Quasi, assumenda! Reprehenderit, commodi.</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div><!---->
            <div class="flex md:flex-row flex-col mt-16">
                <div class="w-10/12 md:w-4/12 m-auto">
                    <p class="text-xl font-bold mb-10">Usage :</p>
                    <div class="grid grid-cols-3 justify-items-center text-center">
                        <div>
                            <img src="../../assets/svg/p1.svg" class="w-14 h-14 m-auto" alt="">
                            <p class="text-base text-gray-500 font-bold mt-2">Lorme ipsum site</p>
                        </div>
                        <div>
                            <img src="../../assets/svg/p2.svg" class="w-14 h-14 m-auto" alt="">
                            <p class="text-base text-gray-500 font-bold mt-2">Lorme ipsum site</p>
                        </div>
                        <div>
                            <img src="../../assets/svg/p3.svg" class="w-14 h-14 m-auto" alt="">
                            <p class="text-base text-gray-500 font-bold mt-2">Lorme ipsum site</p>
                        </div>
                    </div>
                </div>
                <div class="w-full px-2 mt-6 md:mt-0 md:w-8/12 lg:w-7/12 md:w-9/12 m-auto ">
                    <p class="text-xl font-bold mb-2">Stone Analysis :</p>
                    <table class="ml-3 mt-8">
                        <thead>
                            <tr class="bg-gray-200 p-1 first-row-analysis ">
                            <th class="rounded-tl-lg">Optimal Rate	</th>
                            <th>Porosity</th>
                            <th>Density</th>
                            <th>Abrasion Resistance	</th>
                            <th>Pushing Resistance	</th>
                            <th class="rounded-tr-lg">Water Absorption</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr class="">
                            <td class="px-3 py-2">Min</td>
                            <td class="px-3 py-2">Petty</td>
                            <td class="px-3 py-2">2.16</td>
                            <td class="px-3 py-2">2</td>
                            <td class="px-3 py-2">500</td>
                            <td class="px-3 py-2">0.3</td>
                            </tr>
                            <tr class="">
                            <td class="px-3 py-2">Max</td>
                            <td class="px-3 py-2">2.5</td>
                            <td class="px-3 py-2">6.16</td>
                            <td class="px-3 py-2">2</td>
                            <td class="px-3 py-2">1500</td>
                            <td class="px-3 py-2">7.5</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="w-full px-4 lg:w-8/12 m-auto mt-10 relative lg:order-none">
                <form class="w-full p-2 pb-3 mb-8 m-auto rounded-xl shadow-md bg-gray-50" action="">
                    <p class="text-lg font-bold mt-2 ml-1">Request registration</p>
                    <div class="grid md:grid-cols-2 grid-cols-1 ml-2">
                        <div>
                            <div class="grid my-4 mx-2">
                                <label for="">Name</label>
                                <input type="text" placeholder="Name" required class="w-11/12 rounded-lg px-3 py-2 mx-3 my-2 bg-gray-50 border border-gray-400">
                            </div>
                            <div class="grid my-4 mx-2">
                                <label for="">Number</label>
                                <input type="number" placeholder="Number" required class="w-11/12 rounded-lg px-3 py-2 mx-3 my-2 bg-gray-50 border border-gray-400">
                            </div>
                        </div>
                        <div>
                            <div class="grid my-4 mx-2">
                                <label for="">Email</label>
                                <input type="email" placeholder="Email" required class="w-11/12 rounded-lg px-3 py-2 mx-3 my-2 bg-gray-50 border border-gray-400">
                            </div>
                            <div class="grid my-4 mx-2">
                                <label for="">Discription</label>
                                <textarea type="text" placeholder="Discription" required class="rounded-lg  px-3 py-2 mx-3 my-2 bg-gray-50 border border-gray-400"></textarea>
                            </div>
                        </div>
                    </div>
                    
                    
                    <button class="ml-10 flex items-center -mt-2 px-5 py-1 text-lg rounded-lg bg-blue-400 text-white">send <img src="../../assets/Untitled-1-Recdovered.svg" class="w-6 mx-2" alt=""></button>
                </form>
            </div>
           
        </div>

    <Footer />
</template>

<script setup>
import Header from '../home-sections/hed.vue'
import Footer from '../home-sections/footer.vue'

</script>

<style scoped>
.first-row-analysis th{
    padding: 0 10px;
}
</style>