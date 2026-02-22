const user ={
    username:"Ved",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    } 
}

// user.welcomeMessage()
// user.username = " Mihir "
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "ved"
//     console.log(this.username);
// }

// chai()

const chai =  () => {
    let username = "ved"
    console.log(this);
}

// chai()


// simple arrow function
// const addTwo = (num1, num2) =>{
//     return num1+num2
// }


//implict arrow function
// const addTwo = (num1, num2) => num1+num2
    //  const addTwo = (num1, num2) => ( num1+num2 )

    const addTwo = (num1 , num2 ) =>({
        username:"Ved Gohel"
    })
console.log(addTwo(3,4))