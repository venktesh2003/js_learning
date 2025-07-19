class User{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`username : ${this.username}`)
    }
   // if you dont want to share the property with object than make it static
    createid(){
        return `this you can access 1234`
    }

    static youcantaccess(){
        return `you cant extend it `
    }

}

let user1 = new User("venktesh")
console.log(user1.createid())
//console.log(user1.youcantaccess())  // this will throw error becasuse you cannot access it because it is static
console.log(User.youcantaccess())   // this can extend this means static can only access by own prop