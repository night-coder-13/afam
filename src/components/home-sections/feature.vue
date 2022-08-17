<template>
    <div id="bg" class="w-11/12 sm:w-10/12 rounded-2xl bg-gray-400 m-auto sm:p-0">
        <p class="text-3xl font-bold text-center mb-6 text-white -mb-8 Acme">Our characteristics</p>
        <div class="grid grid-cols-2 lg:grid-cols-5 justify-items-center my-10 mx-0 md:mx-4">
            <div class="w-32 h-32 md:w-40 md:h-40 m-4 bg-white z-10 relative rounded-lg grid justify-items-center content-center">
                <div class="blur-box "></div>
                <div class="solid-box"></div>
                <div class="grid justify-items-center z-10">
                    <div class="rounded-lg w-12 h-12 md:w-14 md:h-14 grid justify-items-center relative content-center">
                        <div class="sm-box"></div>
                        <div class="img-box w-full h-full grid justify-items-center content-center rounded-lg bg-blue-400">
                            <img src="../../assets/svg/tree.svg" class="img " alt="">
                        </div>
                    </div>
                    <p class="mt-3 md:text-lg text-sm">Lorem ipsum dolor</p>
                </div>
                
            </div>           
            <div class="lg:mt-8 w-32 h-32 md:w-40 md:h-40 m-4 bg-white z-10 relative rounded-lg grid justify-items-center content-center">
                <div class="blur-box "></div>
                <div class="solid-box"></div>
                <div class="grid justify-items-center z-10">
                    <div class="rounded-lg w-12 h-12 md:w-14 md:h-14 grid justify-items-center relative content-center">
                        <div class="sm-box"></div>
                        <div class="img-box w-full h-full grid justify-items-center content-center rounded-lg bg-blue-400">
                            <img src="../../assets/svg/1.svg" class="img " alt="">
                        </div>
                    </div>
                    <p class="mt-3 md:text-lg text-sm">Lorem ipsum dolor</p>
                </div>
                
            </div>           
            <div class="lg:mt-12 w-32 h-32 md:w-40 md:h-40 m-4 bg-white z-10 relative rounded-lg grid justify-items-center content-center">
                <div class="blur-box "></div>
                <div class="solid-box"></div>
                <div class="grid justify-items-center z-10">
                    <div class="rounded-lg w-12 h-12 md:w-14 md:h-14 grid justify-items-center relative content-center">
                        <div class="sm-box"></div>
                        <div class="img-box w-full h-full grid justify-items-center content-center rounded-lg bg-blue-400">
                            <img src="../../assets/svg/earth-africa-solid.svg" class="img " alt="">
                        </div>
                    </div>
                    <p class="mt-3 md:text-lg text-sm">Lorem ipsum dolor</p>
                </div>
                
            </div>           
            <div class="lg:mt-8 w-32 h-32 md:w-40 md:h-40 m-4 bg-white z-10 relative rounded-lg grid justify-items-center content-center">
                <div class="blur-box "></div>
                <div class="solid-box"></div>
                <div class="grid justify-items-center z-10">
                    <div class="rounded-lg w-12 h-12 md:w-14 md:h-14 grid justify-items-center relative content-center">
                        <div class="sm-box"></div>
                        <div class="img-box w-full h-full grid justify-items-center content-center rounded-lg bg-blue-400">
                            <img src="../../assets/svg/user.svg" class="img " alt="">
                        </div>
                    </div>
                   <p class="mt-3 md:text-lg text-sm">Lorem ipsum dolor</p>
                </div>
                
            </div>           
            <div class="hidden md:grid w-32 h-32 md:w-40 md:h-40 m-4 bg-white z-10 relative rounded-lg justify-items-center content-center">
                <div class="blur-box "></div>
                <div class="solid-box"></div>
                <div class="grid justify-items-center z-10">
                    <div class="rounded-lg w-12 h-12 md:w-14 md:h-14 grid justify-items-center relative content-center">
                        <div class="sm-box"></div>
                        <div class="img-box w-full h-full grid justify-items-center content-center rounded-lg bg-blue-400">
                            <img src="../../assets/svg/thumbs-up-regular.svg" class="img " alt="">
                        </div>
                    </div>
                    <p class="mt-3 md:text-lg text-sm">Lorem ipsum dolor</p>
                </div>
                
            </div>           
            
        </div><!--  -->
        <div class="w-full -mt-5 md:hidden block">
            <div class="w-32 h-32 md:w-40 md:h-40 m-auto my-4 bg-white z-10 relative rounded-lg grid justify-items-center content-center">
                <div class="blur-box "></div>
                <div class="solid-box"></div>
                <div class="grid justify-items-center z-10">
                    <div class="rounded-lg w-11 h-11 md:w-14 md:h-14 grid justify-items-center relative content-center">
                        <div class="sm-box"></div>
                        <div class="img-box w-full h-full grid justify-items-center content-center rounded-lg bg-blue-400">
                            <img src="../../assets/svg/thumbs-up-regular.svg" class="img " alt="">
                        </div>
                    </div>
                    <p class="mt-3 md:text-lg text-sm">Lorem ipsum dolor</p>
                </div>
                
            </div>  
        </div>
    </div>
    <br><br>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#bg{
    background-image: url(../../assets/img/texture-dark-surface.jpg);
    background-size: cover;
    background-position-y: 15%;
    position: relative;
    z-index: 1;
    padding: 20px;
}
.blur-box{
    position: absolute;
    width: 110%;
    height: 110%;
    z-index: -1;
    top: -5%;
    background: rgba(255, 255, 255, 0.158);
    border-radius: 0.5rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.5px);
    -webkit-backdrop-filter: blur(4.1px);
}
.solid-box{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: #fff;
    border-radius: .5rem;
}
.sm-box{
    position: absolute;
    top: -6%;
    width: 120%;
    height: 120%;
    /* From https://css.glass */
    background: #47b5ff49;
    border-radius: 0.5rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.1px);
    -webkit-backdrop-filter: blur(4.1px);
}
.img-box{
    position: absolute;    
}
.img{
    width: 35px;
}
@media only screen and (max-width: 500px){
    .sm-box{
        top: -5px;
        width: 125%;
        height: 125%;
    }
    .img{
        width: 28px;
    }
    #bg{
        padding: 15px 5px;
    }
}
/* #bg::before{
    content: '';
    position: relative;
    background-color: #215D81;
    width: 100%;
    height: 100%;
    display: block;
    z-index: 0;
} */
</style>
