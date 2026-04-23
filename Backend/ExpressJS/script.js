// Library V/s Framework 

// Library : 
// => A library is a collection of pre written code that can be used to perform specific tasks.

// eg - axios

// Framework :
// => A framework is a set of pre written code that provides a structure for developing software application.

// eg - express


// Express : 
// => A NodeJS web application  framework that helps us to make web applications.
// => it is used for server side programming.

//                     request
// frontend ( client )   =>  server (Backend)
//                       <=                     
//                    response 


// express -  Main working : 

// 1. listen for incoming request
// 2. parse
// 3. match the response with routes
// 4. response

// Ports  are the logical endpoints of a network connection that is used to exchange information between a web server and a web client.

// stop the server = ctrl + c

const express = require("express");
const app = express();

let port = 8080; // 3000;

app.listen(port ,()=>{
    console.log(`app listening on port ${port}`);
    
});

// app.use((req,res) =>{
//      console.log("new incoming request !");
//      res.send("This is a basic server page");
// });

// sending request 
// => response = object , string , array 

// routing :
// it is process of selecting a path for traffic in a network or between or across multiple networks.

app.get("/",(req,res)=>{
    res.send("you contacted root path");
});

app.get("/:username",(req,res)=>{
    let { username } = req.params; 
    res.send(`hello , ${username}`);
});


// app.get("/apple",(req,res)=>{
//     res.send("you contacted apple path");
// });

// app.post("/", (req,res)=>{
//     res.send("you contacted root path using post method")
// })


// Nodemon => To automatically restart with code changes