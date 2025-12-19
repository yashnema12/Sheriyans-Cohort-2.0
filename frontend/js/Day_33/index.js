// practice question of loops

//print even numbrrers from 1 to 20
// for(let i=1; i<=20; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }


// print the number from 10 to 1
// for(let i=10; i>=1; i--){
//     console.log(i);
// }

// print the word "hello" 5 times
// for(let i=1; i<=5; i++){
//     console.log("hello");
// }

// print whether num is even or odd from 1 to 10
// for(let i=1; i<=10; i++){
//     if(i%2==0){
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }

// take user input tell number is positive or negative
// let num = prompt("Enter a number: ");
// if(num >= 0){
//     console.log(num + " is positive");
// } else {
//     console.log(num + " is negative");
// }

// prompt always takes input in string format. So, when we compare string with number, 
// JavaScript converts the string to number for comparison. Hence, the comparison works correctly in this case.


// ask user if he is eligible to vote or not (age limit 18)
let age = prompt("Enter your age: ");
if(age >= 18){
    console.log("You are eligible to vote");
}
if(age === null) {
    console.log("Input cancelled");
}

else {
    console.log("You are not eligible to vote");
}