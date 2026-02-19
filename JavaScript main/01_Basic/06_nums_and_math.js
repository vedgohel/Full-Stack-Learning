/*const score = 400
console.log(score)

// Using Number object
const balance = new Number(1000)
console.log(balance)

// Using Number object with a string :
console.log(balance.toString().length) // 4
console.log(balance.toFixed(2)) // 1000.00

const otherBalance = new Number('1000.50')
console.log(otherBalance.toPrecision(3)) // 1000.5


const handred = 1000
console.log(handred.toLocaleString('en-IN')) // 1,000
*/


// -------------------------------Maths-------------------------------

console.log(Math)

// Math object is a static object that has properties and methods for mathematical constants and functions.
console.log(Math.abs(-10)) // 10

// Returns the largest integer less than or equal to a given number.
console.log(Math.ceil(4.2)) // 5


// Returns the smallest integer greater than or equal to a given number.
console.log(Math.round(4.2)) // 4

console.log(Math.floor(4.2)) // 4

console.log(Math.max(1, 2, 3, 4, 5)) // 5

console.log(Math.min(1, 2, 3, 4, 5)) // 1

console.log(Math.random()) // Returns a random number between 0 and 1
console.log(Math.random() * 10+1) // Returns a random number between 0 and 10

const min = 10
const max =20 

console.log(Math.floor((Math.random() * (max - min + 1 ) + min))) // Returns a random number between 10 and 20