// // Q1. Create a variable named num and assign it a numeric value.
// //Then, check whether the number is divisible by 10:

// If it is divisible by 10, print "good"
// Otherwise, print "bad"

// let num = 25; // you can change this value

// if (num % 10 === 0) {
//   console.log("good");
// } else {
//   console.log("bad");
// }



// Q2. Take the user's name and age as input using prompts.
// Then, display the following message using an alert (by substituting the user’s name and age):
// "name is age years old."
// Use template literals to print this sentence.

// let name = prompt("Enter your name:");
// let age = prompt("Enter your age:");

// alert(`${name} is ${age} years old.`);



// Q3. Write a switch statement to print the months in a given quarter.

// Months in Quarter 1: January, February, March
// Months in Quarter 2: April, May, June
// Months in Quarter 3: July, August, September
// Months in Quarter 4: October, November, December


// let quarter = 2; // change this value (1–4)

// switch (quarter) {
//   case 1:
//     console.log("January, February, March");
//     break;
//   case 2:
//     console.log("April, May, June");
//     break;
//   case 3:
//     console.log("July, August, September");
//     break;
//   case 4:
//     console.log("October, November, December");
//     break;
//   default:
//     console.log("Invalid quarter");
// }



// Q4. A string is called a golden string if:

// It starts with the character 'A' or 'a', and
// Its total length is greater than 5

// For a given string, check whether it is a golden string or not and print the result.

// let str = "Ananya"; // you can change this value

// if ((str[0] === 'A' || str[0] === 'a') && str.length > 5) {
//   console.log("Golden String");
// } else {
//   console.log("Not a Golden String");
// }




// Q5. Write a program to find the largest of three numbers.


// let a = 10;
// let b = 25;
// let c = 15;

// if (a >= b && a >= c) {
//   console.log("Largest number is:", a);
// } else if (b >= a && b >= c) {
//   console.log("Largest number is:", b);
// } else {
//   console.log("Largest number is:", c);
// }



// Q6 (Bonus). Write a program to check if two numbers have the same last digit.
// Example: 32 and 47852 have the same last digit (2).


// let num1 = 32;
// let num2 = 47852;

// if (num1 % 10 === num2 % 10) {
//   console.log("Same last digit");
// } else {
//   console.log("Different last digits");
// }