var btn = document.querySelector('button');
var main = document.querySelector('main');

btn.addEventListener('click',function(){
    var div = document.createElement('div');


    div.style.height ='50px'
    div.style.width ='50px'
    div.style.backgroundColor = 'red'
    
    var x = Math.random()*100;
    var y = Math.random()*100;
    
    var c1 = Math.floor(Math.random()*100);
    var c2 = Math.floor(Math.random()*100);
    var c3 = Math.floor(Math.random()*100);
    
    div.style.position ='absolute'
    div.style.left = x+'%'
    div.style.top = y+'%'
    div.style.backgroundColor = `rgb{${c1},${c2},${c3}}`;

    main.appendChild(div);
    console.log(div);
    
})