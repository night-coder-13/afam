<template>
  <!-- <div class="app-container">
    <div id="lightgallery">
      <a href="http://localhost:8080/img/page-product-limestone.5874fcef.jpg">
          <img alt="img1" src="../../assets/catalog/page-product-limestone.jpg" />
      </a>
      <a href="http://localhost:8080/img/page-product-marble1.643c6044.jpg">
          <img alt="img2" src="../../assets/catalog/page-product-marble1.jpg" />
      </a>
    </div>
  </div> -->
  <button @click="onBeforeSlide" type="button" id="dynamic-gallery-demo">Open Gallery</button>

  <Lightgallery
      :settings="{ speed: 500 , plugins: [lgThumbnail,lgZoom]}"
      :onInit="onInit"
      :onBeforeSlide="onBeforeSlide"
      :onPosterClick="onInit"
  >
  <a href="http://localhost:8080/img/page-product-limestone.5874fcef.jpg">
          <img alt="img1" src="../../assets/catalog/page-product-limestone.jpg" />
      </a>
      <a href="http://localhost:8080/img/page-product-marble1.643c6044.jpg">
          <img alt="img2" src="../../assets/catalog/page-product-marble1.jpg" />
      </a>
      
  </Lightgallery>
  
</template>

<script lang="" setup>
  // import Lightgallery from 'lightgallery/vue';
  // import 'lightgallery.js/dist/css/lightgallery.css'

// export default {
//   name: 'IssueDetail',
//   data() {
//     return {
//       imageList: []
//     }
//   },
//   mounted() {
//     const el = document.getElementById('lightgallery')
//     window.lightGallery(el)
//   }
// }
  // import { Options, Vue } from '';
  import Lightgallery from 'lightgallery/vue';
  import lgThumbnail from 'lightgallery/plugins/thumbnail';
  import lgZoom from 'lightgallery/plugins/zoom';

  // If you are using scss you can skip the css imports below and use scss instead
  // import styles from 'lightgallery/scss/lightgallery.scss';

  // let  plugins: [lgThumbnail, lgZoom]

//   const $dynamicGallery = document.getElementById('dynamic-gallery-demo');
// const dynamicGallery = LightGallery($dynamicGallery, {
//     dynamic: true,
//     dynamicEl: [
//         {
//             src: 'img/1.jpg',
//             thumb: 'img/thumb-1.jpg',
//             subHtml: '<h4>Image 1 title</h4><p>Image 1 descriptions.</p>',
//         },
//         {
//             src: 'img/2.jpg',
//             thumb: 'img/thumb-2.jpg',
//             subHtml: '<h4>Image 2 title</h4><p>Image 2 descriptions.</p>',
//         },
//         {
//             src: 'img/3.jpg',
//             thumb: 'img/thumb-3.jpg',
//             subHtml: '<h4>Image 3 title</h4><p>Image 3 descriptions.</p>',
//         },
//     ],
// });
// $dynamicGallery.addEventListener('click', function () {
//     // Starts with third item.(Optional).
//     // This is useful if you want use dynamic mode with
//     // custom thumbnails (thumbnails outside gallery),
//     dynamicGallery.openGallery(2);
// });


  function onInit() {
    console.log('lightGallery has been initialized');
  }
  function onBeforeSlide() {
    console.log('log')
    Lightgallery.openGallery
  }
         
</script>

<style lang="css" scoped>
  @import 'lightgallery/css/lightgallery.css';
  @import 'lightgallery/css/lg-thumbnail.css';
  @import 'lightgallery/css/lg-zoom.css';
</style>