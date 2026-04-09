// Javascript Basics - Conditionals || Part 2

// let age = 20;

// if (age < 18) {
//     console.log("Minor");
// } else {
//     console.log("Adult");
// }

// let a = 20;
// let b = 10;

// console.log("sum is :" , a + b);


// let pencilPrice = 10;
// let penPrice = 20;

// // console.log("The total price is :", pencilPrice + penPrice );

// let totalPrice = `The total price is ${pencilPrice+penPrice} Ruppees.` //backticks

// console.log(totalPrice);



 
// if example

// let color = "red";

// if (color === "red") {
//     console.log("Stop ,  signal color is red");
//  }

// if (color === "yellow") {
//     console.log("Get Ready , signal color is yellow"); 
// }

// if (color === "green") {
//     console.log("Go , signal color is green");
// }



// else if example
// let marks = 35;

// if (marks >= 90) {
//     console.log("Grade A");
// } else if (marks >= 75) {
//     console.log("Grade B");
// } else if (marks >= 50) {
//     console.log("Grade C");
// }




// else example

// let color = "green";

// if (color === "red") {
//     console.log("Stop ,  signal color is red");
// }
//     else if (color === "yellow") {
//     console.log("Get Ready , signal color is yellow");
// }
//     else if (color === "green") {
//     console.log("Go , signal color is green");
// } else {
//     console.log("Invalid color");
// }

// practice question solve 

// let size = "XL";

// if (size === "XL") {
//     console.log("Size is Extra Large. Price is Rs 250");
// } else if (size === "L") {
//     console.log("Size is Large. Price is Rs 200");
// } else if (size === "M") {
//     console.log("Size is Medium. Price is Rs 150");
// } else if (size === "S") {
//     console.log("Size is Small. Price is Rs 100");
// } else {
//     console.log("Size not available");
// } 


// Nested if example

// let marks = 99;

// if (marks >= 33) {
//   console.log("Pass");

//   if (marks >= 80) {
//     console.log("Grade O");
//   } else {
//     console.log("Grade A");
//   }

// } else {
//   console.log("Fail !!");
// }


// // Logical AND operator example
// let marks = 85;
// if (marks >= 33 && marks < 50) { // 33 to 49
//     console.log("Grade C");
// } else if (marks >= 50 && marks < 75) {  // 50 to 74
//     console.log("Grade B");
// } else if (marks >= 75 && marks <= 100) {   // 75 to 100
//     console.log("Grade A");
// } else {
//     console.log("Fail or Invalid Marks"); // less than 33 or greater than 100 
// }


// let marks2 = 45;
// if (marks2 < 33 || marks2 > 70) { // less than 33 or greater than 100
//     console.log("Fail or Invalid Marks");
// } else {
//     console.log("Valid Marks");
// }


// Practice questions
// let string = "apple";

// if (string[0] === "a" && string.length >= 3){
//     console.log("Good");
// } else {
//     console.log("Bad");
// }


// let num = 12;

// if ((num % 3 === 0 ) && ((num+1 == 5) || (num-1 == 11)) ){
//     console.log("safe");
// } else {
//     console.log("not safe");
// }



// switch case example

// let color = "red";

// switch (color) {
//     case "red":
//         console.log("Stop , signal color is red");
//         break;
//     case "yellow":
//         console.log("Get Ready , signal color is yellow");
//         break;
//     case "green":
//         console.log("Go , signal color is green");
//         break;
//     default:
//         console.log("Invalid color");
//         break;
// }


// let day = 1;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;    case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day number");
// }
