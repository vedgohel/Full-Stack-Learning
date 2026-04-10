


// javascript aur part 3


// let msg = "     Hello     ";

// msg.trim(); // "Hello"

// let msg = "IloveJavaScript";

//  console.log(msg.indexOf("java")); // 5
 


// let msg = "Hello World";

// console.log(msg.replace("World", "Ved")); // Hello Ved

// console.log(msg.replace("Hello" , "HI")); // Hi World

// console.log(msg.repeat(3)); // Hello WorldHello WorldHello World




// let msg = "help!";

// console.log(msg.trim().toUpperCase()); // HELP!

// let name = "apna college";

// console.log(name.slice(4,9)); // college
// console.log(name.indexOf("college")); // 4

// console.log(name.replace("apna","our"));

// console.log(name.slice(4).replace("l","t"));



// Array example

// let students = ["Ram", "Shyam", "Mohan", "Sohan"];

// console.log(students);

// console.log(students[2].replace("Mohan", "Ved"))
// console.log(students);

// let newArr = [];

// console.log(newArr.length);

// console.log(newArr.push("Apple"));

// console.log(newArr);



// Array are mutable

// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits);


// console.log(fruits[0] = "Litchi");



// Array methods 

// let cars = ["BMW", "Audi", "Mercedes"];
// console.log(cars);
// cars.push("Volvo"); // adds at the end

// console.log(cars);

// cars.unshift("Verna");
// console.log(cars);

// cars.pop();
// console.log(cars);

// cars.shift();
// console.log(cars);



// practice questions

// let months = ["jan" , "july" , "march", "august"];

// months.shift();
// console.log(months);

// months.shift();
// console.log(months);

// months.unshift("june");
// console.log(months);

// months.unshift("july");
// console.log(months);


// array methods 

// slice methods
// let animals = ["cat", "dog", "elephant", "tiger"];

// console.log(animals);

// animals.splice(2, 0, "lion"); // at index 2 , delete 0 elements and add "lion"
// console.log(animals);



// // splice method
// let colors = ["red", "green", "blue", "yellow"];
// console.log(colors);

// colors.splice(1, 2, "purple", "orange"); // at index 1 , delete 2 elements and add "purple" and "orange"
// console.log(colors);


// sort method

// let numbers = [40, 100, 1, 5, 25, 10];

// console.log("Unsorted Array:", numbers);
// numbers.sort();
// console.log("Sorted Array:", numbers); // [1, 5, 10, 25, 40, 100]


// let lang = ["JavaScript", "Python", "Java", "C++" , "Ruby", "Go"];

// console.log("Unsorted Languages:", lang);
// lang.sort();
// console.log("Sorted Languages:", lang);
// console.log("Reversed Languages:", lang.reverse().indexOf("javascript")); 


// array reference

// let arr1 = ["A", "B", "C"];
// let arr2 = arr1;
// console.log(arr1);
// console.log(arr2);
// arr2.push("D");
// console.log(arr1);
// console.log(arr2);
// // both arr1 and arr2 will reflect the change since they reference the same array in memory.


// nested array

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(matrix[1][2]); // Output: 6
// console.log(matrix[0][0]); // Output: 1
// console.log(matrix[2][1]); // Output: 8


// // tic tac toe board
// let ticTacToe = [
//     ["X", "O", "X"],
//     ["O", "X", "O"],
//     ["O", "X", "X"]
// ];
// console.log(ticTacToe[0][2]); // Output: X
// console.log(ticTacToe[1][1]); // Output: X
// console.log(ticTacToe[2][1]); // Output: X


//  