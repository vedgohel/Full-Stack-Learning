const name = "ved"
const repoCount = 10

// console.log(name + repoCount + "Value"); // ved10Value


// string interpolation
console.log(`My name is ${name} and my repo count is ${repoCount}`);
 // My name is ved and my repo count is 10.


const gameName = new String('ved-g') 

console.log(gameName); // String { 'vedg' }

console.log(gameName.length); // 4

console.log(gameName[0]); // v

console.log(gameName.__proto__);

console.log(gameName.toUpperCase()); // VEDG

// String methods
console.log(gameName.charAt(3)); // g

// String methods
console.log(gameName.indexOf('g')); // 3

// charAt() returns the character at a specified index
const newString = gameName.substring(0, 3);
console.log(newString); // ved


// slice() extracts a section of a string and returns it as a new string
const anotherString = gameName.slice(-2, 3);
console.log(anotherString); // ed


// replace() replaces a substring with another substring
const newString2 = gameName.replace('g', 'G');
console.log(newString2); // ved-G


// trim() removes whitespace from both ends of a string
const stringWithSpaces = "    ved-g    ";
console.log(stringWithSpaces.trim()); // "ved-g"


// split() splits a string into an array of substrings
const url = "https://www.example.com/path?query=123";
console.log(url.replace("https://", "http://")); // http://www.example.com/path?query=123
console.log(url.split("/")); // [ 'https:', '', 'www.example.com', 'path?query=123' ]