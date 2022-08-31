<template>
    <Header />
    <Suspense>
        <template #default>
            <Awit />
        </template>
        <template #fallback>
            <span>Loading...</span>
        </template>
    </Suspense>
    <Footer />
</template>

<script setup>
import Header from '../home-sections/hed.vue'
import Footer from '../home-sections/footer.vue'
import Awit from '../awit.vue'

</script>

<style scoped>

</style>