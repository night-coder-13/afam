<template>
    <div class="w-full m-auto mb-8 sm:mb-0 relative py-8 pb-24 flex flex-col lg:flex-row pl-1 lg:pl-0 justify-end content-center">
        <div class="grid content-center sm:order-1 sm:shadow-lg box-vision">
            <!-- <img src="../../assets/arrow.png" class="pl-8" alt=""> -->

            <h3 class="font-bold mb-2 Acme" id="title">Building new visions</h3>
            <p class="text-sm sm:text-lg ml-4 max-h-56 overflow-hidden">
                Barsi Marmi's mission is to provide materials and high
                end quality services to customers around the world, but
                also to developa new language on design and
                communication in the world of marble. That's why we
                participate in exhibitions, design objects and site-specific
                installations to extend the boundaries of this unique
                material.
            </p>
        </div>
        <div class="w-full lg:w-9/12 h-80 sm:h-96 md:h-128 sm:order-2 mb-8 sm:mb-0 bg--image">
            <!-- <img src="../../assets/img/q1.jpg" class="sm:pl-8" alt=""> -->
        </div>
    </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#title{
    position: relative;
}
#title::before{
    content: url(../../assets/arrow.png);
    /* background-image: url(../../assets/arrow.png);
    background-size:cover; */
    position:absolute;
    top: -10px;
    left: -55px;
    height: 50px;
    width: 50px;
    transform: rotateY(200deg);
}
.grayscale{
-webkit-filter: grayscale(1);
        filter: grayscale(1);
}
.grayscale:hover{
-webkit-filter: grayscale(0);
        filter: grayscale(0);
        transition: .5s;
}
.box-vision{
    position: absolute;
    top: 220px;
    left: 200px;
    width: 550px;
    background: #ffffff;
    padding: 30px 10px 30px 40px;
    border-radius: 10px;
    /* backdrop-filter: blur(1px); */
}
.bg--image{
    background: url('../../assets/img/q1.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
@media only screen and (max-width: 650px){
.box-vision{
    position: unset;
    top: unset;
    bottom: 0px;
    left: 0;
    width: auto;
    background: transparent;
    margin: 0 15px;
    border-radius: 10px;
    padding: 10px;
    padding-bottom: 40px;
    /* backdrop-filter: blur(1px); */
}
#title::before{
    content: '';
    
}
}
</style>
