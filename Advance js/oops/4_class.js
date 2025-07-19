class user{
    constructor(username , email , password){
        this.username = username;
        this.email = email 
        this.password = password
    }

    encryptPassword()
    {
        return `${this.password}abc`
    }

    changename()
    {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("chai" , "cj@kc" , '124')
console.log(chai.encryptPassword())
console.log(chai.changename())


// behind the scene --------------------------------------------------------------------

function User(username , email , password){
 this.username = username;
        this.email = email 
        this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.username}bcccc`
}

User.prototype.changename = function(){
     return `${this.username.toUpperCase()}`
}

let user1 = new User("venktesh" , "jmahajve@gmail.com" , "12334")
console.log(user1.changename())
console.log(user1.encryptPassword())