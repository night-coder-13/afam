
function currentYPosition(){
    //Firefox, Chrome, Opera, Safari
    if(self.pageYOffset){
        return self.pageYOffset;
    }
    
    //Internet Explorer 6
    if(document.documentElement && document.documentElement.scrollTop){
        return document.documentElement.scrollTop;
    }
    
    //Internet Explorer 6, 7 and 8
    if(document.body.scrollTop){
        return document.body.scrollTop;
    }
    
    return 0;
}

function elmYPosition(id){
    var elm = document.getElementById(id);
    var y = elm.offsetTop;
    var node = elm;
    
    while(node.offsetParent && node.offsetParent != document.body){
        node = node.offsetParent;
        y += node.offsetTop;
    } 
    
    return y;
}
function smoothhScroll(id) {
    if(document.getElementById(id) !== null){
    var startY = currentYPosition();
    var stopY = elmYPosition(id);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    
    if(distance < 100){
        scrollTo(0, stopY); 
        return;
    }
    
    var speed = 20;
    
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    
    if(stopY > startY){
        for(var i = startY; i < stopY; i += step){
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; 
            
            if(leapY > stopY){
                leapY = stopY; 
            }
            
            timer++;
        } 
        
        return;
    }
    
    for(let i = startY; i > stopY; i -= step) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; 
        
        if(leapY < stopY){
            leapY = stopY; 
        }
        
        timer++;
    }
}//endif
}

function CheckScroll(){
    // const el = document.getElementById(id)
    if(window.pageYOffset > 200){
        return 'active'
    }else{
        return ''
    }
}
function ClickScroll(el){
    const slider = document.querySelector(el);
    let isDown = false;
    let startX;
    let scrollLeft;
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft ;
    })
    slider.addEventListener('mouseleave', () =>{
        isDown = false;
        slider.classList.remove("active");
    })
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove("active");
    })
    slider.addEventListener('mousemove', (e) =>{
        if(!isDown) return; 
        e.preventDefault () ;
        const x = e.pageX - slider.offsetLeft
        const walk = (x - startX)* 3;
        slider.scrollLeft = scrollLeft - walk;
    })
}

export function smoothScroll(id){
    smoothhScroll(id)
}
export function checkScroll(){
    CheckScroll()
}
export function clickScroll(el){
    ClickScroll(el)
}