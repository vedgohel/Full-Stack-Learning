
let score = "33";
console.log(typeof score); // number

// Convert string to number
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number



/*

"33" => 33 (number)
"33abc" => NaN (not a number)
true => 1 (boolean to number)
*/



let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

// 1 => true , 0 => false , "hitesh" => true , "" => false


let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber); // 33
console.log(typeof stringNumber); // string



//  ---- operation -----

let value = 3
let negvalue = -value

//console.log(negvalue); //-3

/* 
console.log(2+2);
console.log(2-2);
console.log(2+2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);
*/


let num1,num2,num3;

num1 = num2 = num3 = 2 +2 ;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter); 

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.
//html#sec-type-conversion
