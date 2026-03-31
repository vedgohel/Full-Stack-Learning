class User {
    constructor(email , password){
        this.email = email
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }

    set  password(value){
        this._password = value
    }
}

const hitesh =  new  User("hitesh@gmail.com" , "123") 

console.log(hitesh.password);
