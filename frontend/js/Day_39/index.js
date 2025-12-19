
// recognize object 
// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };


// level 1
// function hello(){
//     console.log("Hello, World!");
// }
// hello();


// function add(a, b){
//     return a + b;
// }
// console.log(add(5, 10));


// function greeting(guest){
//     return `Hello, ${guest}! Welcome to our website.`;
// }
// console.log(greeting("puneet bhaiya"));


// function addUnlimit(...nums){
//     let sum = 0;
//     nums.forEach(function(num){
//     //   console.log(num); 
//         sum += num; 
//     });
//     console.log(sum);
// }
// addUnlimit(1,2,3,4,5,6,7,8,9);

// function Unlimit(...nums){
//     let sum = 0;
//     nums.reduce(function(acc, num){
//         sum = acc + num;
//         return sum;
//     },0);
//     console.log(sum);
// }

// Unlimit(1,2,3);


// (function(){
//     console.log("IIFE - Immediately Invoked Function Expression");
// })
// ();


//closure
// function outerFunction(outerVariable){
//     return function innerFunction(innerVariable){
//         console.log(`Outer Variable: ${outerVariable}`);
//         console.log(`Inner Variable: ${innerVariable}`);
//     }   
// }

// const newFunction = outerFunction("outside");
// newFunction("inside");


// let arr = ["apple", "banana", "cherry"];
// arr.unshift("mango");
// arr.push("orange");
// console.log(arr);


let obj = {
    name: "Alice",
    age: 25,
    city: "Wonderland"
};

for(let key in obj){
    console.log(`${key}: ${obj[key]}`);
}
