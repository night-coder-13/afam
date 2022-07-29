<template>
    <div id="bg" class="w-10/12 rounded-2xl bg-gray-400 m-auto">
        <div class="grid grid-cols-5 my-10 mx-4">
            <div class="w-40 h-40 m-4 bg-white z-10 relative rounded-lg grid justify-items-center content-center">
                <div class="blur-box "></div>
                <div class="solid-box"></div>
                <div class="grid justify-items-center z-10">
                    <div class="rounded-lg w-14 h-14 grid justify-items-center relative content-center">
                        <div class="sm-box"></div>
                        <img src="../../assets/svg/tree.svg" class="img-box rounded-lg bg-blue-500" alt="">
                    </div>
                    <p class="mt-3">Lorem ipsum dolor</p>
                </div>
                
            </div>
            <div class="w-40 h-40 m-4 bg-white z-10 relative rounded-lg grid justify-items-center content-center">
                <div class="blur-box "></div>
                <div class="solid-box"></div>
                <div class="grid justify-items-center z-10">
                    <div class="rounded-lg w-14 h-14 grid justify-items-center relative content-center">
                        <div class="sm-box"></div>
                        <img src="../../assets/svg/tree.svg" class="img-box rounded-lg bg-blue-500" alt="">
                    </div>
                    <p class="mt-3">Lorem ipsum dolor</p>
                </div>
                
            </div>
            <div class="w-40 h-40 m-4 bg-white z-10 relative rounded-lg grid justify-items-center content-center">
                <div class="blur-box "></div>
                <div class="solid-box"></div>
                <div class="grid justify-items-center z-10">
                    <div class="rounded-lg w-14 h-14 grid justify-items-center relative content-center">
                        <div class="sm-box"></div>
                        <img src="../../assets/svg/tree.svg" class="img-box rounded-lg bg-blue-500" alt="">
                    </div>
                    <p class="mt-3">Lorem ipsum dolor</p>
                </div>
                
            </div>
            <div class="w-40 h-40 m-4 bg-white z-10 relative rounded-lg grid justify-items-center content-center">
                <div class="blur-box "></div>
                <div class="solid-box"></div>
                <div class="grid justify-items-center z-10">
                    <div class="rounded-lg w-14 h-14 grid justify-items-center relative content-center">
                        <div class="sm-box"></div>
                        <img src="../../assets/svg/tree.svg" class="img-box rounded-lg bg-blue-500" alt="">
                    </div>
                    <p class="mt-3">Lorem ipsum dolor</p>
                </div>
                
            </div>
            <div class="w-40 h-40 m-4 bg-white z-10 relative rounded-lg grid justify-items-center content-center">
                <div class="blur-box "></div>
                <div class="solid-box"></div>
                <div class="grid justify-items-center z-10">
                    <div class="rounded-lg w-14 h-14 grid justify-items-center relative content-center">
                        <div class="sm-box"></div>
                        <img src="../../assets/svg/tree.svg" class="img-box rounded-lg bg-blue-500" alt="">
                    </div>
                    <p class="mt-3">Lorem ipsum dolor</p>
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
    background: rgba(20, 188, 255, 0.308);
    border-radius: 0.5rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.1px);
    -webkit-backdrop-filter: blur(4.1px);
}
.img-box{
    position: absolute;
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
