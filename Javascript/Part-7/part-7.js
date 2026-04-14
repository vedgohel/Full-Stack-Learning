
// This keyword : this keyword refers to an object that is executing the current function. 



// example of object literal

// const student { 
//     name : "vedant",
//     age : 30,
//     city : "pune",
//     eng : 20,
//     math : 30,
//     science : 40,
//     getAvg () {
//           console.log(this);
           
//         let avg = (this.eng + this.math + this.science) / 3;
//         console.log(avg);
//     }
// } 


// function getAvg() {
//     console.log(this);
// }


// try and catch block

// the try statement allows you to define a block of code to be tested for errors while it is being executed. 

// the catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

// try {
//     console.log(a);
// } catch {
//     console.log("variable a doesn't exist");
    
// }



// Miscellaneous topics


// arrow functions : arrow functions are a more concise syntax for writing function expressions.

// const functionName = (parameters) => {function body}


// const sum = (a, b) => {
//     console.log(a+b);
    
// }

// const cube = (n) =>{
//     return n * n * n;
// }


// implicit return : if the function body contains only a single expression, you can omit the curly braces and the return keyword. 
// The value of that expression will be automatically returned.

// const functioName = (parameters) => { value to be returned}

// example

// const mul = (a, b) => a * b;

// explicit return : if the function body contains more than one expression, you need to use curly braces and
//  the return keyword to specify the value to be returned.



// set Timeout : setTimeout is a built-in function in JavaScript that allows you to execute a function after a specified delay.

// setTimeout(function, delay )
// function : the function to be executed after the delay.
// delay : the time in milliseconds to wait before executing the function.


// console.log("hi there!");

// setTimeout(() => {
//            console.log("Hello, World!");
//          }, 2000);

//          console.log("Welcome to ");
         

// set interval : setInterval is a built-in function in JavaScript that allows you to execute a function repeatedly at specified intervals.

// setInterval(function, interval)
// function : the function to be executed repeatedly.
// interval : the time in milliseconds to wait between each execution of the function.

// setInterval(() => {
//     console.log("Hello, World!");
// }, 3000);

// //clearInterval() : clearInterval is a built-in function in JavaScript that allows you to stop the execution of a function that was set to run repeatedly using setInterval.

// clearInterval(20); // where 20 is the interval ID returned by setInterval when it was called.



// this with arrow functions : in arrow functions , the value of this  is determined by the surrounding context in which the function is defined
// , rather than the context in which it is called.

// lexical scoping : lexical scoping refers to the way variables are resolved in nested functions.
//  In JavaScript, functions can access variables defined in their outer scope, which is determined by the location of the function definition in the code.
//  This means that a function can access variables defined in its parent function, as well as variables defined in the global scope.



// const student = {
//     name : "vedant",
//     age : 30,
//     city : "pune",
//     prop : this,
//     getName : functions() {
//         console.log(this);
//         return this.name;
//     },
//     getMarks : () => {
//         console.log(this); // parent's scope -> window object
//         return this.marks; // 
//     }
// }



// practice que

// write an arrow function that returns the square of a number.

// const square = (n) => n * n;

// write the function that prints "hello, world!" 5 times at intervals of 2s each.

// const intervalId = setInterval(() => {
//     console.log("hello, world!");
// }, 2000);


setTimeout(() => {
    clearInterval(intervalId);
    console.log("Stopped printing after 10 seconds.");
}, 10000);
