<template>
    <nav class="flex w-full px-10 py-3 justify-between text-lg font-medium">
        <div>
            <ul class="flex ">
                <router-link class="px-2 m-1" :to="{name : 'Home'}">Home</router-link>
                <!-- <router-link :to="{name : 'Product'}"></router-link> -->
                <!-- <router-link :to="{name : 'ContactUs'}"></router-link> -->
                <router-link class="px-2 m-1" :to="{name : 'About'}">About us</router-link>
                <!-- <router-link :to="{name : 'Catalog'}">Catalog</router-link> -->
            </ul>
        </div>
        <div class="flex justify-center items-center pr-6">
            <img src="../../assets/logo.png" class="w-24" alt="">
            <p class="font-bold Acme">AFAM TREAD</p>
        </div>
    </nav>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
