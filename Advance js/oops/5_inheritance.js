class user {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`username is ${this.username}`);
        
    }

}

// inheritance
class Teacher extends user{
    constructor(username , email , password){
        super(username)
        this.email  = email;
        this.password = password
    }

    addcourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai " , "username" , "124")
chai.addcourse()
const user1 = new User("venktesh")
console.log(user1.logme())