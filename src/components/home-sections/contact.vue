<template>
    <div class="w-full mb-20 mt-4 md:my-20" id="contact-us">
        <div class="header-contact"></div>
        <div class="flex lg:flex-row flex-col justify-center w-11/12 m-auto">
            <div class="w-full lg:w-7/12 mt-4 order-2 lg:order-none">
                <h3 class="font-bold Acme">Contact us</h3>
                <p class="text-sm sm:text-lg mt-1 ml-5">
                    Welcome to AFAM Build. Please send your request for information and assistance by filling in the below our form or by contacting us on Instagram, WhatsApp or email address enlisted below. We will get back to you in the shortest time possible.
                </p>
                <p class="text-center mt-8 text-xl md:text-2xl ">
                    +98(0)9132000823 <i class="text-xl md:text-2xl ti-mobile"></i>
                </p>
            </div>
            <div class="w-full lg:w-4/12 lg:ml-10 relative order-1 lg:order-none">
                <form @submit.prevent="send()" class=" sm:w-9/12 p-2 lg:absolut -mt-24 mb-8 m-auto rounded-xl shadow-md bg-gray-50" action="">
                    <div class="grid my-4 mx-2">
                        <label for="">Name</label>
                        <input type="text" placeholder="Name" v-model="form.name" required class="w-11/12 rounded-lg px-3 py-2 mx-3 my-2 bg-gray-50 border border-gray-400">
                    </div>
                    <div class="grid my-4 mx-2">
                        <label for="">Email</label>
                        <input type="email" placeholder="Email" v-model="form.email" required class="w-11/12 rounded-lg px-3 py-2 mx-3 my-2 bg-gray-50 border border-gray-400">
                    </div>
                    <div class="grid my-4 mx-2">
                        <label for="">Masseage</label>
                        <textarea type="text" placeholder="Masseage" v-model="form.description" required class="rounded-lg  px-3 py-2 mx-3 my-2 bg-gray-50 border border-gray-400"></textarea>
                    </div>
                    <button class="ml-10 flex items-center -mt-2 px-5 py-1 text-lg rounded-lg bg-blue-400 text-white">send <img src="../../assets/Untitled-1-Recdovered.svg" class="w-6 mx-2" alt=""></button>
                </form>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import axios from 'axios';
import Swal from 'sweetalert2';
import { ref } from 'vue';

const form = ref({
    name : '',
    email : '',
    description: ''
})
const btnStatus = ref(false);

async function send() {
    btnStatus.value = true
    let formData = new FormData();
    formData.append('company_name' , form.company_name)
    formData.append('email' , form.email)
    formData.append('description' , form.description)
    let post = await axios.post('https://cor.afambuild.com/contact', formData )
    if (post.data == true) {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Your information has been registered and we will contact you soon !',
        })
        form.value.name = '';
        form.value.email = '';
        form.value.description = '';
    }else if(post.data == false){
      Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Contact support!',
        })
    }else{
      Swal.fire({
            icon: 'info',
            text: post.data,
        })
    }
    btnStatus.value = false
}


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
