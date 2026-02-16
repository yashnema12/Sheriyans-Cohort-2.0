const mousefollower = document.querySelector(".followers");

let x=0, y=0;

addEventListener("mousemove",(e)=>{
    const {clientX,clientY} = e
    x = clientX
    y = clientY

})

function far(){
    mousefollower.style.transform =  `translate(${clientX}px,${clientY}px)`
    requestAnimationFrame(far)
}

far()