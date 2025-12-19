/* Ask user for words until they type “stop”. Count how many times they typed “yes”
Loop until "stop" is typed. Count "yes". */
// let countYes = 0;
// while (true) {
//   let input = prompt("Type a word (type 'stop' to end):");
//     if (input === "stop") {
//         break;
//     }
//     if (input === "yes") {
//         countYes++;
//     }
// }
// console.log(`You typed "yes" ${countYes} times.`);


/*Print numbers divisible by 7 from 1 to 50
Use modulo % and loop. */
// for (let i = 1; i <= 50; i++) {
//     if (i % 7 === 0) {
//         console.log(i);
//     }
// }


/*Sum of all odd numbers from 1 to 30
Add only odd numbers. Print final sum. */
// let sumOdd = 0;
// for (let i = 1; i <= 30; i++) {
//     if (i % 2 !== 0) {
//         sumOdd += i;
//     }
// }
// console.log(`Sum of odd numbers from 1 to 30 is: ${sumOdd}`);


/*Keep asking number until user enters an even number
Use while loop. Stop only if input is even */
// while (true) {
//     let num = parseInt(prompt("Enter a number (even number to stop):"));
//     if (num % 2 === 0) {
//         break;
//     }
// }


/*Print numbers between two user inputs
Input start and end using prompt() → print all between */





/* Print only first 3 odd numbers from 1 to 20
Use loop. Stop with break after 3 odd prints. */

// let oddCount = 0;
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         oddCount++;
//         if (oddCount === 3) {
//             break;
//         }
//     }
// }


/*Ask user 5 numbers. Count how many are positive
Use loop + condition + counter */
// let positiveCount = 0;
// for (let i = 0; i < 5; i++) {
//     let num = parseFloat(prompt("Enter a number:"));
//     if (num > 0) {
//         positiveCount++;
//     }
// }
// console.log(`You entered ${positiveCount} positive numbers.`);


let balance = 1000;
let counter = 0;

while(balance > 0 && counter !== 3){
    let withdraw =+ prompt("Enter amount to withdraw:");
    counter++;
    if(withdraw <= balance){
        balance -= withdraw;
        console.log(`Withdrawal successful. Remaining balance: ${balance}`);
    }
    else{
        console.log("Insufficient balance.");
    }

}