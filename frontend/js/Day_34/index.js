// let age = prompt("Enter your age:");

// if(age===null){
//     console.error("User cancelled the prompt.");
// }
// else{
//     if(age.trim() === ""){
//         console.error("No age provided.");
//     }
//     else{
//         age = Number(age);
//         if(isNaN(age)){
//             console.error("Invalid age provided.");
//         }
//         else{
//             console.log(`Your age is ${age}`);
//         }
//     }
// }


// multiplication table
// for(let i=0;i<=11;i++){
//     console.log(`7 x ${i} = ${7*i}`);
// }


// check how many numbers are greater than 8 from 1 to 15
// let count = 0;
// for(let i=1;i<16;i++){
//     if(i>8){
//         ++count;
//         console.log(i);
//     }
// }
// console.log(`Total numbers greater than 8 are: ${count}`);




// ask user for password and print access
// let password = "yashbhai";

// let pass = prompt("enter your password:");

// if(pass===null){
//     console.error("User cancelled the prompt.");
// }
// else{
//     if(pass===password){
//         console.log("Access granted");
//     }
//     else{
//         console.log("Access denied");
//     }
// }


// allow only 3 attempts to enter correct password 
// if user get it right early stop. of not account locked

let password = "yashbhai";

let attempts = 3;
while(attempts>0){
    let pass = prompt("enter your password:");
    if(pass===null){
        console.error("User cancelled the prompt.");
        break;
    }
    if(pass===password){
        console.log("Access granted");
        break;
    }
    else{
        attempts--;
        if(attempts===0){
            console.error("Account locked");
        }
        else{
            console.log(`Incorrect password. You have ${attempts} attempts left.`);
        }
    }
}


