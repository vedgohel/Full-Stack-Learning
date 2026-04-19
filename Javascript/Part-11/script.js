// // // call stack : first in last out (FILO)


// // // function hello(){
// // //     console.log("Hello, World!");
// // // }

// // // hello();


// // function one(){
// //     return 1;
// // }

// // function two(){
// //     return one() +  one();
// // }

// // function three(){
// //     let ans =  two() + one();
// //     console.log(ans);
    
// // }


// // let h1 = document.querySelector("h1");


// // function changeColor(color , delay){
// //     setTimeout(() =>{
// //     h1.style.color = color
// //     }, delay);
// // }


// // changeColor("red", 1000);
// // changeColor("orange", 2000);
// // changeColor("green", 3000);


// // setTimeout(function(){
// //     h1.style.color = "red";
// // }, 1000);


// // setTimeout(function(){
// //     h1.style.color = "orange";
// // }, 2000);

// // setTimeout(function(){
// //     h1.style.color = "green";
// // }, 3000);





// let h1 = document.querySelector("h1");

// function changeColor(color , delay , nextColorchange){
//     setTimeout(() =>{
//     h1.style.color = color;
//     if(nextColorchange){
//         nextColorchange();
//     }
//     }, delay);
// }



// // callback hell : when we have multiple nested callback functions, 
// // it becomes difficult to read and maintain the code. This is known as callback hell.

// changeColor("red", 1000, function(){
//     changeColor("orange", 1000, function(){
//         changeColor("green", 1000 , () =>{
//                 changeColor("blue", 1000);
//         });
//     });
// });





// function saveTodb(data , success , failure){
//     let internetSpeed = Math.floor(Math.random() * 10)+1;
//     if(internetSpeed > 4){
//         success("Data saved successfully");
//     }else{
//         failure("Data not saved");
//     }

// saveTodb("apna college" , ()=>{
//     console.log("Data saved successfully");
    
//     saveTodb("apna school" , ()=>{
//         console.log("Data saved successfully");
       
//         saveTodb("apna university" , ()=>{
//             console.log("Data saved successfully");
//         }, 
        
//         ()=>{
//             console.log("Data not saved");
//         });
//     }, 
    
//     ()=>{
//         console.log("Data not saved");
//     });

// }
// , ()=>{
//     console.log("Data not saved");
// });






// promise : a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
// It allows us to write asynchronous code in a more synchronous way, making it easier to read and maintain.

// resolve : when the promise is fulfilled successfully, it is said to be resolved. 
// The resolve function is used to indicate that the promise has been fulfilled and to pass the resulting value to the next then() method in the promise chain.

// reject : when the promise is rejected, it is said to be rejected.

// sates of promise : pending, fulfilled, rejected

// pending : when the promise is still in the process of being fulfilled or rejected, it is said to be pending.

// fulfilled : when the promise is fulfilled successfully, it is said to be fulfilled.

// rejected : when the promise is rejected, it is said to be rejected.

// function saveTodb(data){
//     let internetSpeed = Math.floor(Math.random() * 10)+1;
//     return new Promise((resolve , reject) =>{
//         if(internetSpeed > 4){
//             resolve("Data saved successfully");
//         }else{
//             reject("Data not saved");
//         }
//     });
// }
    

// saveTodb("apna college") 






// methods : then() , catch() , finally()

// then() : the then() method is used to specify what should happen when a promise is fulfilled successfully.
//  It takes a callback function as an argument, which will be executed when the promise is resolved. 
// The callback function receives the resulting value of the promise as an argument.


// catch() : the catch() method is used to specify what should happen when a promise is rejected.

// finally() : the finally() method is used to specify what should happen when a promise is either fulfilled or rejected.


// let request = saveTodb("apna college") // req = promise Object 

// request.then((message) =>{
//     console.log(message);
//     return saveTodb("apna school");
// }).then((message) =>{
//     console.log(message);
//     return saveTodb("apna university");
// }).then((message) =>{
//     console.log(message);
// }).catch((error) =>{
//     console.log(error);
// }).finally(() =>{
//     console.log("This will always be executed");
// });




// saveTodb("apna college").then((message) =>{
//     console.log(message);
// }).catch((error) =>{
//     console.log(error);
// }).finally(() =>{
//     console.log("This will always be executed");
// });



// promise : promise are rejected and resolved with some data (valid and error)



// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve();
//         }, delay);
//     });
// }

// // Using Promises (chaining)
// changeColor("red", 1000)
//     .then(() => changeColor("orange", 1000))
//     .then(() => changeColor("green", 1000))
//     .then(() => changeColor("blue", 1000))
//     .catch((err) => console.log(err));