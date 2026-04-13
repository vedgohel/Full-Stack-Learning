// 1. Write a JavaScript function that takes an array of numbers and a number n as input, 
// and returns a new array containing only the elements that are greater than n.


// function getElementsGreaterThan(arr, n) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > n) {
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

// // Example
// let numbers = [10, 25, 5, 30, 15];
// let output = getElementsGreaterThan(numbers, 15);

// console.log(output); // [25, 30]


// 🔍 Explanation:
// We create an empty array result.
// Loop through each element of the given array.
// If the element is greater than n, we add it to result.
// Finally, return the result array.





// 2. Write a JavaScript function that takes a string as input and returns a new string containing only 
// the unique characters (no duplicates), while keeping the original order.

// Example:
// Input: "abcdabcdefgggh"
// Output: "abcdefgh"

// function getUniqueCharacters(str) {
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         if (!result.includes(str[i])) {
//             result += str[i];
//         }
//     }

//     return result;
// }

// // Example
// let str = "abcdabcdefgggh";
// console.log(getUniqueCharacters(str)); // "abcdefgh"


// 🔍 Explanation:
// We start with an empty string result.
// Loop through each character of the input string.
// Check if the character is already in result using includes().
// If not, add it to result.
// This way, only unique characters are stored.



// 6. Write a JavaScript function that takes an array of country names as input and returns the longest country name.

// Example:
// Input: ["Australia", "Germany", "United States of America"]
// Output: "United States of America"


// function getLongestCountry(countryList) {
//     let longest = "";

//     for (let i = 0; i < countryList.length; i++) {
//         if (countryList[i].length > longest.length) {
//             longest = countryList[i];
//         }
//     }

//     return longest;
// }

// // Example
// let countries = ["Australia", "Germany", "United States of America"];
// console.log(getLongestCountry(countries)); 
// // Output: "United States of America"



// 🔍 Explanation:
// Start with an empty string longest.
// Loop through each country name.
// Compare its length with the current longest string.
// If it’s longer, update longest.
// Return the final result.



// 4. Write a JavaScript function that takes a string as input and returns the number of vowels (a, e, i, o, u) present in it.

// function countVowels(str) {
//     let count = 0;
//     let vowels = "aeiouAEIOU";

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }

//     return count;
// }

// // Example
// let text = "Hello World";
// console.log(countVowels(text)); // Output: 3


// 5.Write a JavaScript function that generates a random number within a given range (start to end).

// function getRandomNumber(start, end) {
//     return Math.floor(Math.random() * (end - start + 1)) + start;
// }

// // Example
// console.log(getRandomNumber(1, 10)); // Random number between 1 and 10


// Explanation:
// Math.random() generates a number between 0 and 1.
// Multiply it by (end - start + 1) to scale it to the desired range.
// Use Math.floor() to get an integer.
// Add start to shift the range.