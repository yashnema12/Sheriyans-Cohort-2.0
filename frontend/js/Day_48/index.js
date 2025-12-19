let a = document.querySelector('#box');
a.addEventListener('mouseenter',function(){
    console.log("event performed...");
})

a.addEventListener('mouseleave',function(){
    console.log("event left...");
})