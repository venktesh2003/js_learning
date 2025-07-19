// call method is used tp hold the referece

function setusername(username){
    this.username = username;
}

function user(username , email , age){
    setusername(username)
    this.email = email
    this.age = age
}
const chai = new user("chai" ,"chai@gmail.com" , 34 )
console.log(chai)


// the above code will not set user name because execution context will wiped after serusername call and 
// user function will not contain any info so we will use call to hold the function reference

// correct code is below


function setusername1(username){
    this.username = username;
}

function user1(username , email , age){
    setusername1.call(this , username)   // we will gice this of function which is calling other functiion so that we can hold values
    
    this.email = email
    this.age = age
}
const chai1 = new user1("chai" ,"chai@gmail.com" , 34 )
console.log(chai1)