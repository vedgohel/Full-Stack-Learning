
// javascript aur part 5


// reference means memory address of the variable where the value is stored

// js objects literals
       // Used to store keyed collections & complex entities.
       // property => key : value pair
       // object are a collection of properties

// const student = {
//     name: "ved gohel",
//     age : "20",
//     isGraduated : false,
//     city : "Vadodara",
// };


// thread or twitter post example 

// const post = {
//     username : "ved gohel",
//     content : "Hello world!",
//     likes : 100,
//     comments : [
//         {
//             username : "john doe",
//             comment : "Nice post!"
//         },
//         {
//             username : "jane doe",
//             comment : "I agree!"
//         }
//     ],
//     reposts : function() {
//         console.log("Post has been reposted!");
//     },
//     tags : ["greeting", "introduction", "hello"]
// };

// post.reposts();
// post.likes;
// post["content"];


// random objects example

// const obj ={
//     a :  "10",
//     b : "20",
//     c : function() {
//         console.log("Hello from function c!");
//     }
// }

// obj.a; // "10"

// Add / update value

// const student = {
//     name : "ved gohel",
//     age : 20,
//     city : "vadodara"

// }

// student.city = "surat"; // update value of city

// student.city; // "surat"

// student.gender = "male";

// student; // {name: "ved gohel", age: 20, city: "surat",gender: "male"}

// delete student.city;

// student;


// object of objects
// storing information of multiple students in an object

// object -> object
// const classInfo = {
//     aman : {
//         grade : "A",
//         city : "vadodara"
//     },
//     shradda : {
//         grade : "B",
//         city : "surat"
//     },
// };


// Array of objects
// storing information of multiple students

// Array -> Objects
// const classInfo = [
//     {
//         name : "aman",
//         city : "vadodara",
//     },
//     {
//         name : "shradda",
//         city : "surat",
//     }
// ];

// classInfo[0]; // {name: "aman", city: "vadodara"}
// classInfo[0].name; // "aman"
// classInfo[1].city = "ahmedabad";
// classInfo; // [{name: "aman", city: "vadodara"}, {name: "shradda", city: "ahmedabad"}]



// Math Objects 
// properties and methods of math objects

// const pi = Math.PI; // 3.141592653589793
// const e = Math.E; // 2.718281828459045
// const sqrt2 = Math.SQRT2; // 1.4142135623730951
// const absValue = Math.abs(-5); // 5
// const power = Math.pow(2, 3); // 8
// const squareRoot = Math.sqrt(16); // 4
// const randomNum = Math.random(); // random number between 0 and 1
// const roundedNum = Math.round(4.7); // 5
// const ceilNum = Math.ceil(4.2); // 5
// const floorNum = Math.floor(4.7); // 4 // floor always rounds down to the nearest integer

// practice of part 5

// Math.floor() method rounds a number down to the nearest integer and returns the result. 
// remove the float value

// const randomInt = Math.floor(Math.random() * 10) + 1; // random integer between 1 and 10


// Game to guess a random number between 1 to max

// const max = prompt("enter the maximum number: ");


// let random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("guess the number between 1 and " + max);

// while (true){
//         if (guess == "quit") {
//             console.log("User Quit the game. Bye!");
//             break;
//         }

//         if (guess == random) {
//             console.log("Congratulations! You guessed the number.");
//             break;
//         } else if (guess < random) {
//             guess = prompt("Too low, try again or type quit to exit");
//         } else {
//             guess = prompt("Too high, try again or type quit to exit");

        
//         // if (guess == random) {
//         //     console.log("Congratulations! You guessed the number.");
//         //     break;
//         // // }else{
//         //     guess = prompt("Wrong guess, try again or type quit to exit");
//         }
//     }