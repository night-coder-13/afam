<template>
    <div class="w-full m-auto mb-8 sm:mb-0 relative py-8 pb-24 flex flex-col lg:flex-row pr-1 lg:pr-0 justify-end content-center">
        <div class="grid content-center sm:order-1 sm:shadow-lg box-vision">
            <!-- <img src="../../assets/arrow.png" class="pl-8" alt=""> -->

            <h3 class="font-bold mb-2 Acme" id="title">ساختن دیدگاه های جدید</h3>
            <p class="text-sm sm:text-lg mr-4 max-h-56 overflow-hidden">
                ماموریت ما برسی کیفیت و تامین مصالح مرغوب است
پایان خدمات بی کیفیت به مشتریان در سراسر جهان، اما همچنین برای توسعه مکانی جدید در طراحی و ارتباطات در دنیای سنگ ماربل و تراورتن به اعتماد شما نیازمندیم
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
    right: -113px;
    height: 50px;
    width: 50px;
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
    right: 200px;
    width: 550px;
    background: #ffffff;
    padding: 30px 40px 30px 10px;
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
    right: 0;
    width: auto;
    background: transparent;
    margin: 0 15px;
    border-radius: 10px;
    /* backdrop-filter: blur(1px); */
}
#title::before{
    content: '';
    
}
}
</style>
