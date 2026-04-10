// Q1. Write a JavaScript program to get the first n elements of an array, where n can be any positive number.

// Example:
// For the array [7, 9, 0, -2] and n = 3, the output should be:
// [7, 9, 0]


// function getFirstN(arr, n) {
//     return arr.slice(0, n);
// }

// // Example
// let arr = [7, 9, 0, -2];
// let n = 3;

// let result = getFirstN(arr, n);
// console.log(result); // Output: [7, 9, 0]




// Write a JavaScript program to get the last n elements of an array, where n can be any positive number.

// Example:
// For the array [7, 9, 0, -2] and n = 3, the output should be:
// [9, 0, -2]


// function getLastN(arr, n) {
//     return arr.slice(-n);
// }

// // Example
// let arr = [7, 9, 0, -2];
// let n = 3;

// let result = getLastN(arr, n);
// console.log(result); // Output: [9, 0, -2]





// Q3.

// Write a JavaScript program to check whether a string is blank (empty) or not.

// Example:
// Input: "" → Output: String is blank
// Input: "Hello" → Output: String is not blank



// function isBlank(str) {
//     return str.length === 0;
// }

// // Example
// let str1 = "";
// let str2 = "Hello";

// console.log(isBlank(str1)); // true
// console.log(isBlank(str2)); // false




//  Q4.

// Write a JavaScript program to check whether the character at a given index in a string is lowercase.

// Example:
// Input: "Hello", index = 1 → Output: true (because 'e' is lowercase)
// Input: "Hello", index = 0 → Output: false (because 'H' is uppercase)


// function isLowerCaseAt(str, index) {
//     let char = str[index];
//     return char === char.toLowerCase() && char !== char.toUpperCase();
// }

// // Example
// console.log(isLowerCaseAt("Hello", 1)); // true
// console.log(isLowerCaseAt("Hello", 0)); // false


// Q5.

// Write a JavaScript program to strip (remove) leading and trailing spaces from a string.

// Example:
// Input: " Hello World " → Output: "Hello World"


// function trimString(str) {
//     return str.trim();
// }

// // Example
// let str = "   Hello World   ";
// console.log(trimString(str)); // Output: "Hello World"






// Q6.

// Write a JavaScript program to check if a given element exists in an array or not.

// Example:
// Input: array = [1, 2, 3, 4], element = 3 → Output: true
// Input: array = [1, 2, 3, 4], element = 5 → Output: false


// function elementExists(arr, element) {
//     return arr.includes(element);
// }

// // Example
// let arr = [1, 2, 3, 4];

// console.log(elementExists(arr, 3)); // true
// console.log(elementExists(arr, 5)); // false