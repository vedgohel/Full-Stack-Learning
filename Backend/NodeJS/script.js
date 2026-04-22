// Node JS : 



// Javascript Runtime Environment 
// It is used for Server side programming 


// *Node.js is not a language , Library or framework.







// Node REPL 
// Read , Evaluate , Print , loop




// NodeJS Process
// Process : This Object provides information about and control over,the current Node.js Process.
// process argv : returns an array containing the command line arguments passed when the Node.js process was launched.


// module.exports
// require() => a built-in function to include external modules that exist in separate files.
// module.exports a special object





// const someValue = require("./math");
// console.log(someValue);





// NPM = node package Manager
// -> npm is the standard package manager for Node.js
// -> Library of the packages
// -> Command Line tool




// installing packages :
// => npm install
// => npm i



// Package.json
// => the package.json file contains descriptive and functional metadata about a project , such as a name, version and dependencies.
// package module info download =>  npm init


// Local vs GLobal
// npm install -g <package-name>
// npm install <package-name>
// npm link <package-name>





// require v/s  import :
// import {sum} from "./math.js"
// => we can't selectively load only the pieces we need with require but with import, we can selectively load only the pieces we need , which can save memory.
// => loading is synchrnous for require but can be asynchronous for import  