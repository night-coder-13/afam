<template>
    <div class="w-full my-20">
        <div class="header-contact"></div>
        <div class="flex justify-center w-11/12 m-auto">
            <div class="w-7/12 mt-4">
                <p class="text-2xl font-bold">Contact us</p>
                <p class="text-base ml-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quasi, id tempore aperiam est odio dignissimos voluptatum esse dolore dolor natus error, vitae ipsam animi eligendi necessitatibus atque dicta sunt.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quasi, id tempore aperiam est odio dignissimos voluptatum esse dolore dolor natus error, vitae ipsam animi eligendi necessitatibus atque dicta sunt.
                </p>
                <p class="text-center mt-8 text-xl ">
                    031-45461111 | 031-45462222 | 09902774517 <i class="text-xl ti-mobile"></i>
                </p>
            </div>
            <div class="w-4/12 ml-10 relative">
                <form class="w-9/12 p-2 absolute -top-24 m-auto h-96 rounded-xl shadow-md bg-gray-50" action="">
                    <div class="grid my-4 mx-2">
                        <label for="">Name</label>
                        <input type="text" placeholder="Name" required class="rounded-lg px-3 py-2 mx-3 my-2 bg-gray-50 border border-gray-400">
                    </div>
                    <div class="grid my-4 mx-2">
                        <label for="">Email</label>
                        <input type="email" placeholder="Email" required class="rounded-lg px-3 py-2 mx-3 my-2 bg-gray-50 border border-gray-400">
                    </div>
                    <div class="grid my-4 mx-2">
                        <label for="">Masseage</label>
                        <textarea type="text" placeholder="Masseage" required class="rounded-lg  px-3 py-2 mx-3 my-2 bg-gray-50 border border-gray-400"></textarea>
                    </div>
                    <button class="ml-10 flex items-center -mt-2 px-5 py-1 text-lg rounded-lg bg-blue-400 text-white">send <img src="../../assets/Untitled-1-Recdovered.svg" class="w-6 mx-2" alt=""></button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-contact{
    height: 250px;
    width: 100%;
    background: url(../../assets/blue-gold-marble-textured-background.png) ;
    background-size: 100% 100%;
    background-position: center;
}
</style>
