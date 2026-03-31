// // object literal :- using this  function

// const user = {
//     username : "hitesh",
//     loginCount : 8,
//     signedIn : true,

//     getUserDetails : function() {
//         // console.log("Got user details from databases");4\
//         // console.log(`Username : ${this.username}`);
//         console.log(this);
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    
    
}

const userOne = new User("hitesh", 12,true)

console.log(userOne);
