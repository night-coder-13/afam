
<template>
  <button @click="viewgallery">viwe gallery</button>
<div :class="view == true ? 'block' : 'hidden'" id="inline-gallery-container" class="inline-gallery-container " ></div>
	
</template>

<script setup>

import { onMounted, ref } from '@vue/runtime-core';
import lightGallery from '../../../node_modules/lightgallery/lightgallery.min.js'
import lgZoom from '../../../node_modules/lightgallery/plugins/zoom/lg-zoom.min.js'
import lgThumbnail from '../../../node_modules/lightgallery/plugins/thumbnail/lg-thumbnail.min.js'

const view = ref(false);

onMounted(()=>{
  
  const lgContainer = document.getElementById('inline-gallery-container');
const inlineGallery = lightGallery(lgContainer, {
    container: lgContainer,
    dynamic: true,
    // Turn off hash plugin in case if you are using it
    // as we don't want to change the url on slide change
    hash: false,
    // Do not allow users to close the gallery
    closable: false,
    // Add maximize icon to enlarge the gallery
    showMaximizeIcon: true,
    // Append caption inside the slide item
    // to apply some animation for the captions (Optional)
    appendSubHtmlTo: '.lg-item',
    // Delay slide transition to complete captions animations
    // before navigating to different slides (Optional)
    // You can find caption animation demo on the captions demo page
    slideDelay: 400,
    plugins: [lgZoom, lgThumbnail],
    dynamicEl: [
        {
            src: 'http://localhost:8080/img/page-product-limestone.5874fcef.jpg',
            thumb: 'http://localhost:8080/img/page-product-limestone.5874fcef.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>Caption 1</h4>
                <p>Description of the slide 1</p>
            </div>`,
        },
        {
            src: 'http://localhost/afam/src/assets/catalog/page-product-granite.jpg',
            thumb: 'http://localhost/afam/src/assets/catalog/page-product-granite.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h4>Caption 2</h4>
                <p>Description of the slide 2</p>
            </div>`,
        },
    ],
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery.openGallery();


});
function viewgallery(){
 view.value = !view.value;
}

</script>
<style scoped>
 @import 'lightgallery/css/lightgallery.css';
  @import 'lightgallery/css/lg-thumbnail.css';
  @import 'lightgallery/css/lg-zoom.css';
  .inline-gallery-container {
    width: 100%;
    height: 0;
    padding-bottom: 65%;
}
</style>

