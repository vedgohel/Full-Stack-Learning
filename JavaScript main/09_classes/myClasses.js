// ES6

class User {
    constructor(username , email , password){
        this.username = username
        this.email = email
        this.password = password

    }

    encrptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}


const chai = new User("chai" , "chai@googl.com" , "123")

// console.log(chai.changeUsername());




