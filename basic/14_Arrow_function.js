 // Arrow funcrtion and this key word

const user = {
    username : "venktesh" , 
    age : 20 , 
    welcomeMessage : function(){
        console.log(`${this.username} welcome to the page`)
        // this refer to current context 
        console.log(this) 
    }


}

console.log(user.welcomeMessage())

console.log(this)  // this will give {} AS its scope has became globally 
// the output of same console/log(this)  in the browser will give Windows object because earlier js was used in browser now we have compiler

// this scope in function 
// function chai()
// {
//     let username = "venktesh"
//     console.log(this.username)  // output will be undefined as this refer to current object
// }

//----------p------------------------------------------------------------------------------------------------------------------------------------------------------------------

 function chai()
{
    let username = "venktesh"
    console.log(this)  // output will be undefined as this refer to current object
}

let normalfunction =  function ()
{
    let username = "venktesh"
    console.log(this)  // output will be undefined as this refer to current object
}
normalfunction()
const arrfunction = ()=>{
    let username = "venktesh"
    console.log((this));
    
}

arrfunction()

// note console.log(this) output is different in arrow function and in normal function


const addtwo = (num1 , num2)=>{
    return num1+num2
}
console.log(addtwo(3, 4))

// Implicit return function -> same as arrow no need of paranthesis and return statment it will assume to be return


const addtwo1 = (num1 , num2) => num1+num2
    // or

const addtwo2 = (num1 , num2) =>(num1 + num2) // this will be mostly used in react js
console.log(addtwo2(3,4))
console.log(addtwo(3,4))

// NOTE = if you user {} bracket in function you need to give return statement but if you user () than no need of return

// what if you want to return the object using implicit function

let obj = ()=>{username : "venktesh"} /// this will give undefined you cannot return object this way
let objreturn = () =>({username : "venktesh"})
console.log(obj())
console.log(objreturn())  // this will return obejct
