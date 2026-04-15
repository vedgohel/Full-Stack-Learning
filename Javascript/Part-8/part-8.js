// part - 8 

// forEach
 // => forEach is a method that is used to iterate over an array and execute a provided function once for each array element. 
// syntax : array.forEach(function(currentValue, index, arr), thisValue)

// let arr = [1, 2, 3, 4, 5];

// arr.forEach((element) => {
//     console.log(element);
// });

// let print = (element) => {
//     console.log(element);
// }

// arr.forEach(print);


// let arr = [
//     {
//         name : "john",
//          age : 20
//     },
//     {
//         name : "doe",
//          age : 30
//     }
// ];

// arr.forEach((element) => {
//     console.log(element.name);
//     console.log(element.age);
// });




// map function : map function is a method that is used to create a new array by calling a provided function on every element in the calling array.
// syntax : array.map(function(currentValue, index, arr), thisValue)

// let arr = [1, 2, 3, 4, 5];

// let double = arr.map((element) => {
//     return element * 2;
// });

// console.log(double);



// filter function : filter function is a method that is used to create a new array with all elements that pass the test implemented by the provided function.

// let nums = [1, 2, 3, 4, 5];

// let even = nums.filter((num) => (num % 2  == 0 ) ); 


// let arr = [1, 2, 3, 4, 5];
// let ans = arr.filter((element ) => {
//     return element % 2 == 0;  // even -> true , odd -> false
//  });


// Every : every function is a method that is used to test whether all elements in the array pass the test implemented by the provided function.
//  It returns a boolean value.


// arr.every((some function definition or name);


// arr = [1, 2, 3, 4, 5];
// let ans = arr.every((element) => {
//     return element % 2 == 0; // even -> true , odd -> false
// });

// ans = arr.every((element) => {
//     return element > 0; // true
// });



// reduce function : reduce function is a method that is used to execute a reducer function on each element of the array, resulting in a single output value.

// let arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

// console.log(sum);
// accumulator -> 0 + 1 -> 1 + 2 -> 3 + 3 -> 6 + 4 -> 10 + 5 -> 15


// reduce function used to find the maximum element in an array

// let arr = [1, 2, 3, 4, 5];

// let max = arr.reduce((accumulator, currentValue) => {
//     return Math.max(accumulator, currentValue);
// }, arr[0]);

// console.log(max);


// let arr = [1, 2, 3, 4, 5 , 9 , 10];

// let max = -1 ;
 

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// console.log(max);


// Practice Questions

// check if all numbers in our array are multiple of 10 or not

// let arr = [10, 20, 30, 40, 50];

// let ans = arr.every((element) => {
//     return element % 10 == 0; // true
// });

// console.log(ans);



// create a function to find the min number in an array


// let arr = [1, 2, 3, 4, 5];

// let min = arr.reduce((accumulator, currentValue) => {
//     return Math.min(accumulator, currentValue);
// }, arr[0]);

// console.log(min);

// let arr = [1, 2, 3, 4, 5];

// let min = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     } else {
//         continue;
//     }
// }



// Default parameters : default parameters are a feature in JavaScript that allows you to set default values for function parameters.

// function greet(name = "Guest") {
//     console.log("Hello, " + name + "!");
// }



// spread operator : spread operator is a syntax that allows an iterable such as an array or string to be expanded in places where zero or more arguments (for function calls) 
// or elements (for array literals) are expected,
//  or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

// function functionName(...parameters) {
//     // function body
// }

// Example : array , string , object 

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// let str = "Hello";
// let chars = [...str]; // ['H', 'e', 'l', 'l', 'o']

// let obj1 = { a: 1, b: 2 };
// let obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// const data = {
//     email : "example@gmail.com",
//     password : "123456"
// }

// const dataCopy = {...data};

// console.log(dataCopy);


// array -> spread -> index 
// Object -> spread -> key value pair
// string -> spread -> character



// rest parameters : rest parameters are a feature in JavaScript that allows you to represent an indefinite number of arguments as an array.

// function functionName(...parameters) {
//     // function body
// }

// function sum(...numbers) {
//     let total = 0;
//     for (let num of numbers) {
//         total += num;
//     }
//     return total;
// }




// function sum(..args){
//     return args.reduce((sum , el ) => sum + el);
// }

// function min(msg, ...numbers){
//     console.log(msg);
//     return args.reduce((min , el ) => Math.min(min, el));
// }


// function min(msg, ...numbers){
//     console.log(msg);
//     return args.reduce((min , el ) => {
//         if ( min > el) {
//             return el;
//         } else {
//             return min;
//         }
//         });

//     }

    

// Destructuring : destructuring is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.

// let names = ["john", "doe", "smith"];
// // let winner = names[0]; 
// // let runnerUp = names[1];
// // let secondRunnerUp = names[2];

// let [winner, runnerUp, ...others] = names; // destructuring assignment


// Destructuring with objects

// let person = {
//     name : "john",
//     age : 30,
//     city : "pune"
// }

// let name = person.name;
// let age = person.age;

// let {name, age, city} = person; // destructuring assignment

