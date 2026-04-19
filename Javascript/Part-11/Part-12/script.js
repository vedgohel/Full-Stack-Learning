// // Async Functions

// // async and await keywords


// // async keywords: Creates an Async Function

// // async function greet(){
// //     throw "page not found"
// //     return "Hello world"; // return promise
// // }

// // let hello = async() =>{
// // return 5; 
// //};                  // return promise


// // // throw :using display the error
 

// // greet().then(()=>{
// //     console.log("Promise was resolved");
// //     console.log("result was :",result );
    
// // })

// // .catch((err) =>{
// //     console.log("promise was rejected with err :", err);
// // })


// // Await keyword : pauses the execution of its surrounding async function until the promise is settled (resolved or  rejected)

// // function getNUm() {
// //    return new Promise ((resolve , reject)=>{
// //     setTimeout(() =>{
// // let num = Math.floor(Math.random()*10)+1;
// //     return num;
// //     resolve();
// //     },1000);
// //    })

    
// // }

// // async function demo() {
// //     await getNUm();
// //     getNUm();
// //     getNUm();
// // }




// // now i try this convert into async and await functions

// // let h1 = document.querySelector("h1");

// // function changeColor(color, delay) {
// //     return new Promise((resolve) => {
// //         setTimeout(() => {
// //             h1.style.color = color;
// //             resolve();
// //         }, delay);
// //     });
// // }

// // // Async-Await version
// // async function changeColors() {
// //     try {
// //         await changeColor("red", 1000);
// //         await changeColor("orange", 1000);
// //         await changeColor("green", 1000);
// //         await changeColor("blue", 1000);
// //     } catch (err) {
// //         console.log(err);
// //     }
// // }

// // changeColors();


// // Handling Rejections with Await   


// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!h1) {
//                 reject("Element not found ");
//                 return;
//             }
//             h1.style.color = color;
//             resolve("Color changed to " + color);
//         }, delay);
//     });
// }

// async function changeColors() {
//     try {
//         let res1 = await changeColor("red", 1000);
//         console.log(res1);

//         let res2 = await changeColor("orange", 1000);
//         console.log(res2);

//         let res3 = await changeColor("green", 1000);
//         console.log(res3);

//         let res4 = await changeColor("blue", 1000);
//         console.log(res4);

//     } catch (err) {
//         console.log("Error caught:", err);
//     }
// }

// changeColors();











// API = Application Programming interface


// JSON = Javascript Object Notation 

// www.json.org

// XML = Extensible Markup Language

// JSON validator = valid the JSON format or not 


// Accesing 

// JSON.parse() → JSON → JS object
// JSON.stringify() → JS object → JSON
// Use:
// obj.key
// obj["key"]
// array[index]






 // json => javascript object

// let jsonData = '{"name":"Ved","age":20,"city":"Ahmedabad"}';

// let obj = JSON.parse(jsonData);

// console.log(obj.name);  // Ved
// console.log(obj["age"]); // 20



// // convert js object -> json

// let obj = { name: "Ved", age: 20 };

// let json = JSON.stringify(obj);

// console.log(json);




// testing api requests

// tools

// => Hoppscoth

// => Postman



// AJAX = Asynchronous Javascript and XML


// status code 

// 200 = ok


// 404 = not found

// 400 = bad Request

// 500 = internal server response



// http header

// header , value

// fetch("https://randomuser.me/api/")
//   .then((response) => {
//     return response.json(); // convert to JS object
//   })
//   .then((data) => {
//     console.log(data);

//     let user = data.results[0];

//     console.log("Name:", user.name.first);
//     console.log("Email:", user.email);
//     console.log("City:", user.location.city);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });


  // async / await 

//   async function getUser() {
//   try {
//     let res = await fetch("https://randomuser.me/api/");
//     let data = await res.json();

//     let user = data.results[0];

//     console.log("Name:", user.name.first);
//     console.log("Email:", user.email);
//     console.log("City:", user.location.city);
//   } catch (err) {
//     console.log("Error:", err);
//   }
// }

// getUser();


// // axios methods

// axios.get("https://randomuser.me/api/")
//   .then((response) => {
//     let user = response.data.results[0];

//     console.log("Name:", user.name.first);
//     console.log("Email:", user.email);
//     console.log("City:", user.location.city);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//  });


// using Axios with Async / Awaits


//  async function getUser() {
//       try {
//         let res = await axios.get("https://randomuser.me/api/");
//         let user = res.data.results[0];

//         // Update UI
//         document.getElementById("userImg").src = user.picture.medium;
//         document.getElementById("name").innerText = user.name.first + " " + user.name.last;
//         document.getElementById("email").innerText = user.email;
//         document.getElementById("city").innerText = user.location.city;

//       } catch (err) {
//         console.log("Error:", err);
//       }
//     }

//     // Load one user on page load
//     getUser();



// 1. sending header get request

// axios.get("https://randomuser.me/api/", {
//   headers: {
//     "Authorization": "Bearer your_token_here",
//     "Custom-Header": "MyValue"
//   }
// })
// .then((res) => {
//   console.log(res.data);
// })
// .catch((err) => {
//   console.log(err);
// });


// 2. using async / await

// async function getUser() {
//   try {
//     let res = await axios.get("https://randomuser.me/api/", {
//       headers: {
//         "Authorization": "Bearer your_token_here",
//         "Custom-Header": "MyValue"
//       }
//     });

//     console.log(res.data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getUser();


// 3.post request with header

// axios.post("https://example.com/api", 
//   {
//     name: "Ved",
//     age: 20
//   },
//   {
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": "Bearer your_token_here"
//     }
//   }
// )
// .then(res => console.log(res.data))
// .catch(err => console.log(err));



// What is Query String?

// It’s the part of a URL after ?

// Example:

// https://example.com?name=ved&age=20

