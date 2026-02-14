/* 

use REPL = read evaluate print loop

clear window console :- ctrl + L


what is a variable?
     ~ A variable is a container for storing data values.

Data-Types in JavaScript:
     ~ JavaScript has dynamic typing, meaning you don't have to declare the data type of a variable.
       The data type is determined automatically based on the value assigned to the variable.
     ~ Common data types include:
           - Number: Represents numeric values (e.g., 10, 3.14).
           - String: Represents text (e.g., "Hello, World!").
           - Boolean: Represents true or false values.
           - Undefined: A variable that has been declared but not assigned a value.
           - Null: Represents an intentional absence of any value.
           - Object: A collection of key-value pairs.
           - Array: A special type of object used to store ordered collections.


           number in js :-
               ~ Numbers in JavaScript can be integers or floating-point numbers.
               ~ JavaScript uses the IEEE 754 standard for representing numbers, which allows for a wide range of values.
               ~ Numbers can be written with or without decimals, and they can also be expressed in exponential notation.
// Example of declaring a variable and assigning a number
let a = 10; // Using 'let' to declare a variable
// Example of declaring a variable and assigning a number
let a = 10; // Using 'let' to declare a variable


           Operations in JavaScript :-
             ~ Operations are like actions you tell the computer to do with numbers, text, or other values.
               Think of them like buttons on a calculator ➕ ➖ ✖️ ➗ or like rules in a game.
             
               ~ 🟢 Types of Operations

                    1. Arithmetic Operations (Math stuff)
                         These are just like math in school.
                         
                         + → Add
                         
                         - → Subtract
                         
                         * → Multiply
                         
                         / → Divide
                         
                         % → Remainder (what’s left after dividing)
                         
                         👉 Example:

                         let a = 10;
                         let b = 3;
                         console.log(a + b); // 13
                         console.log(a - b); // 7
                         console.log(a * b); // 30
                         console.log(a / b); // 3.33
                         console.log(a % b); // 1 (remainder)
                      
                    2. Comparison Operations (Who is bigger?)
                       These check if one thing is bigger, smaller, or equal to another.
                       
                       > → Greater than
                       
                       < → Less than
                       
                       >= → Greater or equal
                       
                       <= → Less or equal
                       
                       == → Equal (just values)
                       
                       === → Strict equal (values + type)
                       
                       👉 Example:
                        
                       console.log(5 > 3);  // true
                       console.log(5 < 3);  // false
                       console.log(5 == "5");  // true (only checks value)
                       console.log(5 === "5"); // false (different types)
                    
                    3. Logical Operations (Yes or No rules)
                       These combine true/false answers.
                       
                       && → AND (both must be true)
                       
                       || → OR (one can be true)
                       
                       ! → NOT (opposite)
                       
                       👉 Example:

                         let age = 10;
                         console.log(age > 5 && age < 15); // true
                         console.log(age > 12 || age < 8); // false
                         console.log(!(age > 12));         // true
                       
                    4. Assignment Operations (Give a value)
                       These are used to store/update values.
                       
                       = → put value
                       
                       += → add and store
                       
                       -= → subtract and store
                       
                       👉 Example:

                       let x = 5;   // put value
                       x += 2;      // x = x + 2 → 7
                       x -= 1;      // x = x - 1 → 6
                       console.log(x);
                       
                         
                     ⚡ Quick way to remember:

                         Arithmetic = Math
                         
                         Comparison = Who’s bigger/smaller?
                         
                         Logical = Yes/No rules
                         
                         Assignment = Storing values
                    
                    
                    NaN in Js :-
                       ~ NaN stands for "Not-a-Number." It is a special value in JavaScript that indicates an invalid or undefined numerical result.
                       ~It shows up when JavaScript tries to do math, but the result isn’t a real number.

                       Think of it like your calculator saying:
                       ❌ “Sorry, I don’t understand this math!”

                       Example :- 
                       1. 0 / 0 = NaN (undefined)
                       2. Math.sqrt(-1) = NaN (not a real number)
                       3. "hello" - 1 = NaN (can’t do math with text)


                       Operators Precedence :-
                       ~ Operator precedence determines the order in which operations are performed in an expression.
                       ~ This is the general order of solving an expression. 
                       ~ BODMAS rule (Brackets → Orders → Division/Multiplication → Addition → Subtraction).
                       ~ left to right or right to left based on the operator associativity.
                      
                       10 + 2 - (5 - 2) / 3 * 8
                           = 10 + 2 - 3 / 3 * 8
                           = 10 + 2 - 1 * 8
                           = 10 + 2 - 8
                           = 12 - 8
                           = 4 

                    let keyword :-
                    ~ The let keyword is used to create (declare) variables in JavaScript.
                    A variable is like a box where we can store some value (like a number, text, etc.).

                    why do we use let?
                    ~ block of scope ()
                    ~ can change value 
                    ~ No redeclaration in same scope

                    constant keyword :- 
                    ~ values of constants can not be changed with re-assignment & they cam not be redeclared.

                    var keyword :-
                    ~ The var keyword is used to declare variables in JavaScript.
                    ~ It has function scope, meaning it is accessible within the function it is declared in or globally if declared outside any function.
*/                     


let age =  20 ;

if (age > 18) {
     console.log("Adult");
} else {
     console.log("Not an Adult");
}