// create one pure function that always return the same output for given input and one impure function using a global variable

// function pure(a,b){
//     console.log(a+b);
// }
// pure(1,2);

// let global = 0;
// function impure(a,b){
//     global++;
//     console.log(a+global);
// }
// impure(2);
// impure(2);



// write a function that uses object destructuring inside parameters to extract print age name

// function abcd({name,age}){
//     console.log(name,age);
// }

// abcd({name:"yash",age:23});



// difference btw arrow function and normal function
// let obj ={
//     name:"yash",
//     age:24,
//     fnc:  function(){
//             console.log(this);
//     },
//     fnc2: () => {
//         console.log(this);
//     }
// }
// obj.fnc();
// obj.fnc2();



// given an array of numbers, use map() to create a new  array where each numbered is squared
// let arr = [1,2,3,4,5];

// let newarr = arr.map(function(val){
//     return val*val;
// });
// console.log(newarr);



// use filter to get only even numbers from array 
// let arr = [1,2,3,4,5];
// let newarr = arr.filter(function(val){
//     return val%2==0; 
// });

// console.log(newarr);




// use reduce to find the total salary from the array of numbers 
// let arr = [1000,2000,3000];
// let newarr = arr.reduce(function(acc,val){
//     return acc+val;
// },0);

// console.log(newarr);




// create an array of names and use some() and every() to test a condition all names longer than 3 characters

// let names =["yash","tiwari","PJ","Comic","Bad"];

// let str = names.some(function(val){
//     return val.length>3;
// });

// console.log(str);





// create an object user and test the behaviour of object freeze() and object seal() by adding keys 
// let user ={
//     name:"yash",
//     age:23,
//     gmail:"yash@g.com"
// }
// Object.seal(user);
// user.name ="apyash";
// user.height ="7 feet";
// console.log(user.height);






// create a nested object (user -> address -> city) and access the city inside it 

// let obj ={
//     user:{
//         name:"yash",
//         address:{
//             city:"bhopal",
//         }
//     }
// }

// let {city} = obj.user.address;
// console.log(city);