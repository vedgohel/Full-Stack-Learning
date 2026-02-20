// array :

// An array is a collection of items stored at contiguous memory locations.
// It is a data structure that can hold multiple values of the same type.


const arr = [1, 2, 3, 4, 5];



// const Heros = ["Ved", "Shivam", "Aman", "Rohit", "Sahil"];
// console.log(Heros); // [ 'Ved', 'Shivam', 'Aman', 'Rohit', 'Sahil' ]

// console.log(Heros[0]); // Ved

// Array methods

// myArr.push("jay"); // Adds an element to the end of the array

// myArr.pop(); // Removes the last element from the array

// console.log(myArr); // [ 'Ved', 'Shivam', 'Aman', 'Rohit', 'Sahil', 'jay' ]

// arr.unshift("9"); // Adds an element to the beginning of the array

// arr.shift(); // Removes the first element from the array

// console.log(arr); // [ 'harsh', 'Ved', 'Shivam', 'Aman', 'Rohit', 'Sahil' ]


// const newArr =arr.join() // Converts the array to a string
// console.log(typeof newArr); // string


// slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It returns an array containing the deleted elements.

console.log("A " , arr);

const myn1 = arr.slice(1, 3); // Returns a shallow copy of a portion of the array

console.log(myn1); // [ 2, 3 ]

console.log("B " , arr);


const myn2 = arr.splice(1, 3);
console.log("C " , arr); 
console.log(myn2);


// difference between slice and splice: slice returns a new array without modifying the original array, while splice modifies the original array and returns the removed elements.

// concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

