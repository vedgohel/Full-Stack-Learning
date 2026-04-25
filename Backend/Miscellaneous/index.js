//  Object Oriented Programming 

// To structure our code

// => prototype

// => New Operator

// => constructors

// => classes

// => keywords( extends , super )



// const stud1 = {
//     name : "adam",
//     age : 25,
//     marks:96
// }



// const stud1 = {
//     name : "jao",
//     age : 20,
//     marks:99
// }







// Object prototyping (in JavaScript) is a way for objects to share properties and methods through a special link called the prototype.

// Instead of copying methods into every object, JavaScript stores them in one place (the prototype), and all objects can inherit from it.




// factory functions



// A factory function is simply a function that creates and returns an object.

// Instead of using new or constructor functions, you just call a normal function and it “manufactures” objects for you.

// 🧠 Simple Definition

// Factory function = a function that returns a new object


// function createUser(name, age) {
//     return {
//         name: name,
//         age: age,
//         greet() {
//             console.log("Hello " + this.name);
//         }
//     };
// }

// let user1 = createUser("Ved", 20);
// let user2 = createUser("Rahul", 22);

// user1.greet();



// new operator


// The new operator in JavaScript is used to create an object from a constructor function (or class).

// It basically automates object creation + linking with prototype.

// 🧠 Simple Definition

// new creates a new object and sets up prototype inheritance.


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let p1 = new Person("Ved", 20);

// console.log(p1.name); // Ved


// Factory Function vs new
// Feature	                                       Factory Function             	new Operator
// Syntax	                                           Simple	                      Uses new
// Prototype	                                  ❌ Not used by default	             ✅ Used
// Memory	                                            ❌ More usage	             ✅ Efficient



 
// 🧠 Simple Definition  classes

// A class is a blueprint for creating objects with properties and methods.


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log("Hello " + this.name);
//     }
// }

// let p1 = new Person("Ved", 20);
// p1.greet();




// inheritance


// Inheritance in JavaScript means one object or class can use the properties and methods of another.

// It helps you reuse code instead of writing the same thing again.




// 🧠 Simple Definition

// Inheritance = getting features from a parent (base) to a child (derived)






// ✅ Example using Classes
// class Animal {
//     eat() {
//         console.log("Eating...");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Barking...");
//     }
// }

// let d = new Dog();
// d.eat();   // inherited from Animal
// d.bark();  // own method







// 👉 Dog inherits from Animal using extends

// 🔥 Using super (Important)
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name); // calls parent constructor
//         this.breed = breed;
//     }
// }

// let d1 = new Dog("Tommy", "Labrador");
// console.log(d1.name);







// 👉 super() is used to call the parent’s constructor

// 🔗 How It Works Internally
// // Dog.prototype → Animal.prototype

// 👉 JavaScript connects them using prototype chain









// 🆚 Real-Life Example
// Parent: Animal → can eat
// Child: Dog → can eat + bark



// ⚡ Why Use Inheritance?
// Code reuse ♻️
// Cleaner structure 📂
// Easy to manage large programs



// ⚠️ Important Points

// Use extends for inheritance
// Use super() inside constructor
// Child gets access to parent methods




// 🚀 One-Line

// Inheritance allows one class to acquire properties and methods of another class.