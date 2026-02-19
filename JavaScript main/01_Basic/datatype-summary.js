// Primitive data types

// 7 types : String , Number , Boolean , Null , Undefined , Symbol , BigInt

const score = 100;
const scoreValue = 100.5;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('1234');
const anotherId = Symbol('1234');

const bigNumber = BigInt(1234567890123456789012345678901234567890);


// Reference (Non primitive)

// Array , Object , Functions

const heros = ['Shiva', 'Krishna', 'Rama'];

let myObj = {
    name: "ved",
    age: 22,
}

const myFunc = function() {
    console.log("Hello world");
}


// Stack (Primitive) ,  Heap Memory (Non Primitive)

let myName = "ishika";

let anotherName = myName;
anotherName = "ved";

console.log(myName); // ishika
console.log(anotherName); // ved

let user1 = {
    email : "user@google.com",
    age : 22
}

let user2 = user1;
user2.email = "user2@google.com";


console.log(user1.email); //
console.log(user2.email) //
