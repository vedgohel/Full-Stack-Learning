// Javascript aur part 4
// for Loop 
    // for (initialization; condition; increment/decrement){
    //     // code to be executed
    // }

    // for (let i = 0; i <= 5; i++) {
    //     console.log(i);
    // }


    // for(let i=10; i>=0; i = i-3){
    //     console.log(i);
    // }

    // // Print all odd numbers from 1 to 15
    //  console.log("forwards :");
     
    // for(let i=1; i<=15; i=i+2){
    //     console.log(i);
    // } 
    //     console.log("backwards :");
    // for(let k=15; k>=1; k=k-2){
    //     console.log(k);
    // }


    // // Print all even numbers from 1 to 15
    // console.log("forwards :");
    // for(let i=2; i<=15; i=i+2){
    //     console.log(i);
    // }
    // console.log("backwards :");
    // for(let k=14; k>=1; k=k-2){
    //     console.log(k);
    // }


// infinite loop
    // if the condition in for loop is always true, then it will be an infinite loop
    // condition is always true when we are incrementing the variable in the wrong 
    // , direction or decrementing the variable in the wrong direction

    //   for (let i = 0; i >= 0; i++) {
    //      console.log(i);
    //  }

// print the multiplication table of 5

    // for(let i=5; i<=50; i = i+5){
    //     console.log(i);
    // }


// let n = prompt("Enter a number to print ");
// n = parseInt(n);
//         for(i=n; i<=n*10; i=i+n){
//             console.log(i);
//         }

// nested for loop
        // A nested for loop is a loop inside another loop. The inner loop will be executed
        // for each iteration of the outer loop.
        
        // syntax of nested for loop
        // for (initialization; condition; increment/decrement){        
        //     for (initialization; condition; increment/decrement){
        //         // code to be executed
        //     }
        // }

    // example
    // for(let i=1; i<=3; i++){
    //     for(let j=1; j<=3; j++){
    //         console.log(j);
    //     }
    // }



// While Loop
    // while (condition){
    //     // code to be executed
    // }

    // example 
    // let i = 0;
    // while (i <= 5) {
    //     console.log(i);
    //     i++;
    // }

    // let i = 1;
    // while (i <= 20){
    //     console.log(i);
    //     i = i + 2;
    // }


    // let i = 20;
    // while (i >= 0){
    //     console.log(i);
    //     i--;
    // }

// Favorite Movie 

// const favMovie = "laila majnu";

// let movie = prompt("What is your favorite movie?");

// while (movie !== favMovie) {
//     if(movie == "quit"){
//        break;
//     }
//     movie = prompt("Wrong guess, try again or type quit to exit");
// }

// if (movie === favMovie) {
//     console.log("Congratulations! You guessed it right.");
// } else {
//     console.log("Better luck next time!");
// }


// break statement 

// let i = 1;
// while (i <= 5){
//     if (i === 3) {
//         break; // exit the loop when i is 3
//     }
//     console.log(i);
//     i++; 
// }

// console.log("loop was break at i = " + i);


// loop with Arrays

// let fruits = ["apple", "banana", "orange", "grape", "mango"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(i, fruits[i]);
// }


// loops with Arrays

// nested loop with arrays

// let heroes = [ ["superman", "clark kent","thor"], ["batman", "bruce wayne","avengers"]];

// for(let i=0; i<heroes.length; i++){
//     console.log(i,heroes[i],heroes[i].length);
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(`j = ${j} and hero is ${heroes[i][j]}`);
//     }
// }

// let students = [ 
//     ["john", 95],
//     ["jane", 85],
//     ["doe", 75]
// ];

// for(let i = 0; i< students.length; i++){
//     console.log(`info of student #${i}`);
//     for(let j = 0; j < students[i].length; j++)
//     console.log(students[i][j]);
// }


// for of loop 

// syntax

// for (variable of iterable){
//     // code to be executed
// }


// let fruits = ["apple", "banana", "orange", "grape", "mango"];
 
// for (let fruit of fruits) {
//     console.log(fruit);
// }
    
// for (char of "apna college"){
//     console.log(char);
    
// }

// nested for of  loop

// let heroes = [ ["superman", "clark kent","thor"], ["batman", "bruce wayne","avengers"]];

// for(let hero of heroes){
//     console.log(hero);
//     for(let h of hero){
//         console.log(h);
//     }
// }



// // final and last video of this part 14
// // TODO LIST :

// let todoList = [];

// while (true) {

//     let req = prompt(
//         "Enter command: add, list, update, delete, quit"
//     );

//     // QUIT
//     if (req === "quit") {
//         console.log("App closed. Bye!");
//         break;
//     }

//     // ADD
//     else if (req === "add") {
//         let task = prompt("Enter your task:");
        
//         if (task) {
//             todoList.push(task);
//             console.log("Task added.");
//         } else {
//             console.log("Task is empty.");
//         }
//     }

//     // LIST
//     else if (req === "list") {

//         if (todoList.length === 0) {
//             console.log("No tasks found.");
//         } else {
//             console.log("Your tasks:");

//             let index = 0;
//             for (let task of todoList) {
//                 console.log(index + " : " + task);
//                 index++;
//             }
//         }
//     }

//     // UPDATE
//     else if (req === "update") {

//         let index = prompt("Enter task number to update:");

//         if (index >= 0 && index < todoList.length) {
//             let newTask = prompt("Enter new task:");
//             todoList[index] = newTask;
//             console.log("Task updated.");
//         } else {
//             console.log("Wrong task number.");
//         }
//     }

//     // DELETE
//     else if (req === "delete") {

//         let index = prompt("Enter task number to delete:");

//         if (index >= 0 && index < todoList.length) {
//             todoList.splice(index, 1);
//             console.log("Task deleted.");
//         } else {
//             console.log("Wrong task number.");
//         }
//     }

//     else {
//         console.log("Wrong command.");
//     }
// }





