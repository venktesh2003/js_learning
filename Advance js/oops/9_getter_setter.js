class user{
    constructor(email , password){
        this.email = email 
        this.password = password
    }
}

const hitesh = new user("venite" , 12345)
console.log(hitesh.password)  // this way you can access the pass

// but what if we dont want to give access or we want to giv access with some controls
