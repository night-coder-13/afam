<template>
    <Hed />



    <div class="timeline bg-blue-900">
  <div class="container left">
    <div class="content">
        <div id="image1"></div>
        <p class="pl-2">Our team is pleased to inform you of a new advertising cooperation opportunity that could benefit both of our businesses. Our company, specializes in natural stones which source, process, and supply a variety of natural stones to customers in construction, landscaping, and interior or exterior design industries.</p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
        <div id="image2"></div>
        <p class="pl-2">We believe that our partnership would result in a successful marketing and advertising campaign that showcases both of our businesses and brings value to our customers and help us reach new audiences and achieve our marketing goals. We are excited to announce our new advertising cooperation to promote our natural stone products in different countries. As a leading supplier of natural stones, we are dedicated to providing our customers with high-quality products that meet their unique needs.</p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
        <div id="image3"></div>
        <p class="pl-2">We are excited to discuss the potential for collaboration and how we can work together to create a successful campaign. Please let us know if you're interested in scheduling a call or meeting to discuss in future.</p>
        <div class="pb-12">
            <form action="" class="px-2 sm:px-10">
                <input type="text" placeholder="Company name" class="rounded-lg text-base mt-3 h-9 px-4 w-full py-5 bg-transparent shadow border-2 border-gray-100">
                <input type="text" placeholder="Email" class="rounded-lg text-base mt-3 h-9 px-4 w-full py-5 bg-transparent shadow border-2 border-gray-100">
                <input type="text" placeholder="Country" class="rounded-lg text-base mt-3 h-9 px-4 w-full py-5 bg-transparent shadow border-2 border-gray-100">
                <textarea type="text" placeholder="Description" required class="rounded-lg w-full mt-3 px-4 py-3 h-20 bg-transparent border-2 border-gray-100"></textarea>
            </form>
            <button class="mt-4 ml-4 w-40 h-10 cursor-pointer rounded-full text-base md:text-lg flex justify-center items-center border-white border-2 hover:bg-white hover:text-gray-800">
                Send
            </button>
       </div>
    </div>
  </div>
  
</div>

</template>

<script setup>
import Hed from '../home-sections/hed.vue'

</script>

<style scoped>
#image1{
    background: url('../../assets/img/our-team.jpg') no-repeat center;
}
#image2{
    background: url('../../assets/img/businessmen-handshaking.jpg') no-repeat center;
}
#image3{
    background: url('../../assets/img/contact-us.jpg') no-repeat center;
}
#image1 , #image2 , #image3{
    background-size: cover;
    height: 180px;
    margin: 10px 0;
    border-radius: 8px;
    position: relative;
}

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 5px;
  background-color: rgb(166, 166, 166);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -13px;
  background-color: rgba(255, 255, 255, 0);
  border: 3px solid #45c8f1;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -13px;
}

/* The actual content */
.content {
  padding: 10px 20px;
  /* background-color: white; */
  position: relative;
  border-radius: 6px;
  color: #fff;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
  left: 25px;
  }
  
  /* Full-width containers */
  .container {
  width: 100%;
  padding-left: 35px;
  padding-right: 25px;
  }
  
  /* Make sure that all arrows are pointing leftwards */
  .container::before {
    display: none;
  }

  /* Make sure all circles are at the same spot */
  .left::after, .right::after {
  left: 13px;
  }
  
  /* Make all right containers behave like the left ones */
  .right {
  left: 0%;
  }
}
</style>