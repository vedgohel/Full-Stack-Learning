// Write a JavaScript program to remove all occurrences of a given element num from an array.

// Example:
// Input: arr = [1, 2, 3, 4, 5, 6, 2, 3], num = 2
// Output: arr = [1, 3, 4, 5, 6, 3]


// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// let result = arr.filter(element => element !== num);

// console.log(result);


// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== num) {
//     result.push(arr[i]);
//   }
// }

// console.log(result);



// 2. Write a JavaScript program to find the number of digits in a given number.

// Example:
// Input: number = 287152
// Output: count = 6



// let number = 287152;

// let count = number.toString().length;

// console.log(count);



// let number = 287152;
// let count = 0;

// while (number !== 0) {
//   number = Math.floor(number / 10);
//   count++;
// }

// console.log(count);





// 3. Write a JavaScript program to find the sum of digits of a given number.

// Example:
// Input: number = 287152
// Output: sum = 25


// let number = 287152;
// let sum = 0;

// while (number > 0) {
//   let digit = number % 10;   // get last digit
//   sum += digit;              // add to sum
//   number = Math.floor(number / 10); // remove last digit
// }

// console.log(sum);



// let number = 287152;

// let sum = number
//   .toString()
//   .split('')
//   .reduce((acc, digit) => acc + Number(digit), 0);

// console.log(sum);




// 4. Write a JavaScript program to print the factorial of a given number n.

// Note:
// Factorial of a number n is the product of all positive integers less than or equal to n.

// Examples:

// 7! = 1 × 2 × 3 × 4 × 5 × 6 × 7 = 5040
// 5! = 120
// 3! = 6
// 0! = 1


// Using  Loop : 

// let n = 7;
// let factorial = 1;

// for (let i = 1; i <= n; i++) {
//   factorial *= i;
// }

// console.log(factorial);


// Using Recursion :

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// console.log(factorial(7));



// 5. Write a JavaScript program to find the largest number in an array containing only positive numbers.

// Example:
// Input: arr = [10, 45, 23, 67, 12]
// Output: largest = 67


// Using Loop :

// let arr = [10, 45, 23, 67, 12];
// let largest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     largest = arr[i];
//   }
// }

// console.log(largest);



// Using Math.max() :

// let arr = [10, 45, 23, 67, 12];

// let largest = Math.max(...arr);

// console.log(largest);