<template>
    <div @click="lightImage" id="zoom" :bg="src">
        <div id="zoomS" :style="'background: url('+ src +');background-size: 100% 100%;'"></div>
        <img id="zoomC" :src="src" class="w-11/12 m-auto sm:h-120 sm:w-auto rounded-lg" alt="">
    </div>
    
</template>

<script>

import { onMounted } from 'vue';
    export default {
        props:[
            'src'
        ],
        components: {
           
        },
        setup() {

            onMounted(()=>{
                var addZoom = target => {
            // (A) GET CONTAINER + IMAGE SOURCE
                let container = document.getElementById('zoomC'),
                    imgsrc = container.currentStyle || window.getComputedStyle(container, false);
                    imgsrc = imgsrc.backgroundImage.slice(4, -1).replace(/"/g, "");
                    // imgsrc = url.value;
                    
                let plac = document.getElementById('zoomS')
                let ratio = container.offsetHeight / container.offsetWidth,
                            percentage = ratio * 100 + "%";
                
                container.onmousemove = e => {
                    //  if(mouse.value){
                        let rect = e.target.getBoundingClientRect(),
                        xPos = e.clientX - rect.left,
                        yPos = e.clientY - rect.top,
                        xPercent = xPos / (container.clientWidth / 100) + "%",
                        yPercent = yPos / ((container.clientHeight ) / 100) + "%";
                        
                        Object.assign(plac.style, {
                            display:'block',
                            // backgroundImage: `url(${url.value})`,
                            backgroundPosition: xPercent + " " + yPercent,
                            backgroundSize: (container.clientWidth * 1.7) + "px",
                            top: yPos  +'px',
                            left: (e.clientX + 8)  +'px'
                        });
                        
                    //  }
                        
                    };
                    container.onmouseleave = e => {
                        Object.assign(plac.style, {
                            display:'none'
                        });
                            
                    };
                    
                };
                addZoom('zoomC')
           
            })
            
        return {
            
        };
    },
};
</script>

<style >
#zoomC {
    /* (A) DIMENSIONS */
    /* width: 600px;
    height: 338px; */
    position: relative;
    /* (B) BACKGROUND IMAGE */
    /* background: url("../../assets/img/21.jpg"); */
    background-position: center;
    
}
#zoomS {
    display: none;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    position: absolute;
    border: 2px solid #fff;
    z-index: 9;
    /* (B) BACKGROUND IMAGE */
    /* background: url("../../assets/img/21.jpg"); */
    background-position: center;
    background-size: cover;
}

</style>