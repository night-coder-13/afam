<template>
    <div class="w-full my-20" id="contact-us">
        <div class="header-contact"></div>
        <div class="flex lg:flex-row flex-col justify-center w-11/12 m-auto">
            <div class="w-full lg:w-7/12 mt-4 order-2 lg:order-none">
                <h3 class="font-bold Acme">Contact us</h3>
                <p class="text-sm sm:text-lg mt-1 ml-5">
                    Welcome to AFAM Trade. Please send your request for information and assistance by filling in the below information or by contacting us on one of our email addresses enlisted below. We will get back to you in the shortest time possible.
                </p>
                <p class="text-center mt-8 text-xl ">
                    031-45461111 | 031-45462222 | 09902774517 <i class="text-xl ti-mobile"></i>
                </p>
            </div>
            <div class="w-full lg:w-4/12 lg:ml-10 relative order-1 lg:order-none">
                <form class=" sm:w-9/12 p-2 lg:absolut -mt-24 mb-8 m-auto rounded-xl shadow-md bg-gray-50" action="">
                    <div class="grid my-4 mx-2">
                        <label for="">Name</label>
                        <input type="text" placeholder="Name" required class="w-11/12 rounded-lg px-3 py-2 mx-3 my-2 bg-gray-50 border border-gray-400">
                    </div>
                    <div class="grid my-4 mx-2">
                        <label for="">Email</label>
                        <input type="email" placeholder="Email" required class="w-11/12 rounded-lg px-3 py-2 mx-3 my-2 bg-gray-50 border border-gray-400">
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
@media only screen and (max-width: 450px){
.header-contact{
    background-size: 220% 100%;
}
}
</style>
