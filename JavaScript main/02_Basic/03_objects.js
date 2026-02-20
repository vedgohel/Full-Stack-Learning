//singleton

// singleton is a design pattern that restricts a class to a single instance and provides a global point of access to it.

// objects create

// object literals

const mysym = Symbol("mykey1")
const JSuser = {
    name: "ved",
    age: 20,
    [mysym] : "mykey1",
    location: "India",
    isLoggedIn: false
}

    // console.log(JSuser.age); // 20
    // console.log(JSuser["name"]); // ved

    // console.log(JSuser[mysym]); // mykey1

JSuser.isLoggedIn = true; // update value

// Object.freeze(JSuser); 
JSuser.isLoggedIn = false; // this will not change the value because we have frozen the object
// console.log(JSuser.isLoggedIn); // true

JSuser.gretting = function(){
    console.log("Hello");
} // this will not add a new property because we have frozen the object

console.log(JSuser.gretting()); // undefined

JSuser.gretting2 = function(){
    console.log(`Hello ${this.name}`);
} // this will not add a new property because we have frozen the object

console.log(JSuser.gretting2()); 

// freezing an object prevents new properties from being added, existing properties from being removed, and existing properties from being changed (except for the values of properties that are already writable).

// freezing an object is useful when you want to ensure that the object remains unchanged throughout the program, preventing accidental modifications that could lead to bugs or unexpected behavior.

