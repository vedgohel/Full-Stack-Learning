// const = const is a constant variable. that is not going to change other than its initialization;

const accountID = "12345";

// let = let is a block scope variable. that is, it can be used in the block it is defined in

let accountEmail = "ved@example.com";

// var = var is a function scope variable. that is, it can be used in the entire function it is defined in

var accountPassword = 1512;

accountCity = "New York";

// like var, let can be used in the entire function it is defined in, but it is block scoped

let accountState;


// accountID = "67890"; //this line would cause an error if uncommented, as accountID is a constant

accountEmail = "ved15@gmail.com";
accountPassword = 1234;
accountCity = "Los Angeles";


/* 
prefer not to use var
because of issue in block scope and function scope
*/

console.log(accountID);

console.table([ accountID ,accountEmail , accountPassword, accountCity , accountState ]);

// console.log(accountID, accountEmail, accountPassword, accountCity, accountState); // this will print the values of the variables