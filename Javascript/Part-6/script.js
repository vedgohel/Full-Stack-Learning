// // function declaration

// function add(a, b) {
//     return a + b;
// }

// // function expression

// const subtract = function(a, b) {
//     return a - b;
// };


// // functionName();
// add(5, 3); // returns 8


// function isAdult(){
//     let age = prompt("Please enter your age:");
//     if (age >=18){
//         alert("You are an adult.");
//     } else {
//         alert("You are not an adult.");
//     }
// }

// isAdult();





// practice que 1
// function printPoem(){
//     console.log("Twinkle twinkle, little star,");
//     console.log("How I wonder what you are!");
//     console.log("Up above the world so high,");
//     console.log("Like a diamond in the sky.");
// }

// printPoem();






// practice que 2
// function rollDie() {
//     let rand = Math.floor( Math.random()*6 )+ 1; 
//     console.log(rand);
// }

// rollDie();





// Functions with arguments 
// Value  we passed into the function

// function printInfo(name, age) {
//     console.log("Name: " + name);
    

// function with arguments
// function printInfo(name , age){
//     console.log(`${name}'s age is ${age}`);
// }
// printInfo("ved",30);






// // practice que 3

// function calcAvg(num1, num2, num3) {
//     calcAvg = num1 + num2 + num3 / 3 ;
//     console.log(calcAvg);
// }

// calcAvg(10, 20, 30);





// // practice que 4

// function printTable(num){
//      for(let i = num; i <= num*10; i+=num){
//         console.log(i);
//      }
// }



// return keyword

// function add(a, b) {
//     return a + b;
// }

// let sum = add(5, 3);
// console.log(sum); // Output: 8

// function fist(){
//     console.log("Hello");
//     console.log("hello");
//     return "hi";
//     console.log("Hello2");
//     console.log("hello2");    
// }

// function isAdult(age){
//     if (age >= 18) {
//       return "Adult";
//     } else {
//         return "Not Adult";
//     }
//     console.log("you are verified");
// }

// let result = isAdult(20);
// console.log(result); // Output: "Adult"









// practice que 5

// function getSum(num){
//     let sum = 0;
//     for(let i = 1; i <= num; i++){
//         sum += i;
//     }
//     return sum;
// }





// // practice que 6


// let str = [ "Hello", "World", "JavaScript", "Functions" ];

// function concatstr(str){
//     let result;

//     for (let i = 0; i < str.length; i++) {
//         result += str[i];
//     }
//     return result;

// }

// let finalresult = concatstr(str);






// scope 


// let sum = 54;  // global scope

// function calSum(a,b){
//     let sum = a + b; // local scope
//     console.log(sum);
}

//calSum(5, 10); // Output: 15

//console.log(sum); // output : 54 , because the sum variable inside the function is a local variable 4
// and does not affect the global variable with the same name.




// block scope : variable declared with let and const are block scoped
// block scope varible declared with inside a block {} is only accessible within that block
      // var is not block scoped, it is function scoped, so it can be accessed outside the block as well.
      // after the new version like after 2015 used let and const for block scope variable declaration.


// for(let i=1; i<=5; i++){
//     console.log(i);
    
// }

//console.log(i); // ReferenceError: i is not defined, because i is block scoped and cannot be accessed outside the loop block.






// Lexical scope : A variable defined outside a function can be accessed inside another function defined after the  variable declaration.
// the opposite is not true.


// function outerFun(){
//     let x =5;
//     let y =6;
//     function innerFun(){
//         console.log(x);
//     }
//     innerFun();
// }


// // hoisting : variable and function declarations are moved to the top of their scope before code execution.


// function outerFun(){
   
//     function innerFun(){
//         console.log(x);
//     }
//      let x =5;
//      let y =6;
//     innerFun();
// }


// it oppositr is not true 


// // function outerFun(){
// //     let x =5;
// //     let y =6;
// //     function innerFun(){
//         let a = 20;
// //         console.log(x);
// //     }
//        console.log(a);
       
// //     innerFun();
// // }



// // pratice que 7 

// let greet = "hello"; // global scope

// function changeGreet(){
//     let greet = "namsate"; // function scope
//     console.log(greet);
//     function innergreet(){ // lexical scope
//         console.log(greet);
//     }
// }
// console.log(greet);
// changeGreet();



// function Expression : a function can be defined as an expression and assigned to a variable.

// Higher Order Functions : a function that takes another function as an argument or returns a function as a result is called a higher-order function.
// A function that does one or both : takes one or multiple functions as argumens and returns a function 

// function  multiGreet(func , count) {

//     for(let i = 0; i < count; i++){
//         func();
//     }

// }

// let greet = function(){
//     console.log("hello");
// }


// multiGreet(greet, 3); // Output: "hello" printed 3 times



// Higher order function = returning a function

// let odd = function (n){
//      console.log(!(n%2 == 0));
// }


// let even = function (n){
//      console.log(n%2 == 0);
// }



// function oddOrEvenFactory(Request){
//     if(request =="odd"){
//         let odd = function (n){
//      console.log(!(n%2 == 0));
// }
//         return odd;
//     } else if(request == "even"){
//         let even = function (n){
//         console.log(n%2 == 0);

//     } 
//     return even;
//  } else {
//     console.log("wrong request");
    
//  } 
// }
// let request = "odd"


// methods  = Actions that can be performed on an object.

// const calculator = {
//     num : 55,
//     add : function(a, b) {
//         return a + b;
//     },
//     subtract : function(a, b) {
//         return a - b;
//     },
//     mul : function(a, b) {
//         return a * b;
//     },
// }


// method shorthands 

// const calculator = {
//      add(a, b){
//         return a + b;
//      }
//      sub(a, b){
//         return a - b;
//      }
//      mul(a, b){
//         return a * b;
//      }
// }