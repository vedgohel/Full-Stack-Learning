// Immediately Invoked Function Expressions (IIFE) 

function chai(){
    // console.log(`DB CONNECTED`);
}
chai()

const user ={
    userName : "Mihir",
 
chai : function () {
    return`${this.userName} DB IS CONNECTED`;
    
  }
}
console.log(`${user.chai()}`);
console.log(user.userName);



// better way :

((name) =>{
    // simple IIFE
    console.log(`DB WAS CONNECTEND ! ${name} `);
    
})('Ved Gohel')