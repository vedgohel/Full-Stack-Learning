// Q1.
// Write an arrow function that squares each element of an array, calculates the sum of those squared values, and then finds the average.


// let nums = [1, 2, 3, 4, 5];

// // Square each element
// const square = nums.map(num => num * num);
// console.log(square);

// // Find sum
// let sum = square.reduce((acc, cur) => acc + cur, 0);

// // Find average
// let avg = sum / nums.length;
// console.log(avg);




// Q2.
// Using the map() function, create a new array where each element is equal to the corresponding element in the original array plus 5.

// let numbers = [2, 4, 6, 8, -2, -4];

// // Add 5 to each element
// let result = numbers.map(number => number + 5);

// console.log(result);





// Q3.
// Create a new array in which all the words from the original array are converted to uppercase.

// let strings = ["adam", "bob", "catlyn", "donald", "eve"];

// // Convert all strings to uppercase
// let upperCaseArray = strings.map(str => str.toUpperCase());

// console.log(upperCaseArray);




// Q4.
// // Write a function named doubleAndReturnArgs that takes an array and a variable number of additional arguments. The function should return a new array that includes the original array values along with all the additional arguments doubled.

// const doubleAndReturnArgs = (arr, ...args) => {
//   return [...arr, ...args.map(v => v * 2)];
// };

// // Examples
// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); // [1, 2, 3, 8, 8]
// console.log(doubleAndReturnArgs([2], 10, 4));      // [2, 20, 8]





// Q5.
// Write a function called mergeObjects that takes two objects as parameters and returns a new object containing all the keys and values from both objects.


// const mergeObjects = (obj1, obj2) => {
//   return { ...obj1, ...obj2 };
// };

// // Example
// console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));
// // Output: { a: 1, b: 2, c: 3, d: 4 }