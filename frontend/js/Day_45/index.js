var main = document.querySelector('main');
var btn = document.querySelector('button');

var arr =['Hey! I am yash.','Sheryians is Awesome.','Look At My Website','RASENGAN','Dattebayo!!','Water Breathing fouth form..']

btn.addEventListener('click',()=>{

    // var c1 = Math.floor(Math.random()*256);
    // var c2 = Math.floor(Math.random()*256);
    // var c3 = Math.floor(Math.random()*256);
    // var x = Math.random()*100;
    // var y = Math.random()*100;
    // var r = Math.random()*100;

    // var div = document.createElement('div');
    // div.style.height ="50px";
    // div.style.width ="50px";
    // div.style.position ='absolute';
    // div.style.backgroundColor =`rgb(${c1},${c2},${c3})`;
    // div.style.rotate = r+'deg';

    // div.style.left =x+"%";
    // div.style.top =y+"%";
    // // console.log(x);
    // main.appendChild(div)

    var h1 = document.createElement('h1');
    var x = Math.random()*80;
    var y = Math.random()*80;
    var r = Math.random()*100;
    var scl = Math.random()*3;

    var a = Math.floor(Math.random()*arr.length);
    h1.innerHTML = arr[a];
    h1.style.position = 'absolute';
    h1.style.left = x+'%';
    h1.style.top = y+'%';
    h1.style.color = 'white';
    h1.style.rotate = r+'deg';
    h1.style.scale = scl;

    main.appendChild(h1);

})



//NOTES
/*
- make main div and assign height and width 100%
- make a button and center it(give its position and index)
- select button and main div and event listener on button(js)
- inside a new element create a new element using document.createelement
- console.log check it
- write innerHTML if you want
- use parent.appendChild() to add new element in the div
*/