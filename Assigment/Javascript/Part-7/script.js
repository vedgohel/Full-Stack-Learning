// 1. Write a JavaScript arrow function named arrayAverage that takes an array of numbers as input and returns the average (mean) of those numbers.

// const arrayAverage = (arr) => {
//     let sum = 0;

//     for (let num of arr) {
//         sum += num;
//     }

//     return sum / arr.length;
// };

// // Example usage
// let numbers = [10, 20, 30, 40];
// console.log(arrayAverage(numbers)); // Output: 25


//2. Write a JavaScript arrow function named isEven that takes a single number as an argument and returns whether the number is even or not.

// const isEven = (num) => {
//     return num % 2 === 0;
// };

// // Example usage
// console.log(isEven(4)); // true
// console.log(isEven(7)); // false


//  3. What will be the output of the following JavaScript code?

// const object = {
//   message: 'Hello, World!',
//   logMessage() {
//     console.log(this.message);
//   }
// };

// setTimeout(object.logMessage, 1000);


// Why does this happen?
// When setTimeout(object.logMessage, 1000) is called, the function is passed without its object context.
// Inside logMessage, this no longer refers to object.
// Instead, this refers to the global object (window in browsers).
// Since window.message is not defined → it prints undefined.


// 4. What will be the output of the following JavaScript code?


// let length = 4;

// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method(callback) {
//     callback();
//   },
// };

// object.method(callback, 1, 2);