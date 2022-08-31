
<template>
  {{v}}
</template>

<script setup>
import { ref } from '@vue/reactivity'
import axios from 'axios';
const v=ref()

await  axios
    .get(`https://deelay.me/5000/https://picsum.photos/200/300`)
    .then(function (response) {
        console.log(response.data)
        v.value = response.data
        
    })
    .catch(function (error) {
        console.log(error);
    });

// const f = async ()=>{
//     await new Promise((resolev)=>setTimeout(resolev,3000))
//     v.value='ali babaii'
// }
// await f();
</script>