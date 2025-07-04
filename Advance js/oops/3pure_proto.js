let myname = "venktesh"
//console.log(myname.truelength()) // undefined
// now i want to inject my own property to give the real length


  /*              null
                 ^
                 |
  function -- >obect<--String
                 | 
                 |
                 Array

if you create prototype property in object than it will accessible to all the other things like array function string etc
if injected on child than it will be on cild
if injected on parent than it will be on every child
  */

//Example
Object.prototype.global_property = function(){
    console.log("this property is shared with all the object")

}

let myarr = ["hello" , "world"

]
let obj = {
    name : "venktesh" ,
    age : 20
}

function func(){
    console.log("i am function")
}
console.log(func.global_property()) // you have access because you applied on object and it will now accessible to every object
console.log(obj.global_property())
console.log(myarr.global_property())

// if you inject the property in any particular object than it will only accessible to only that single objcet
Array.prototype.limited_to_array = function(){
    console.log("i am only limited to array myarr noone else can use mem")
}




// prototype inheritance

let user = {
    name : "user1",
    age:40
}
let teacher = {
makevideo : true
}

let teach_support = {
    isavilable:false
}

let TA = {
    makeassign : "JS assign" , 
    fulltime : "yes" ,
    // here if you want if this TA should use someone properry than use __proto__ : reference 

    __proto__ : teacher
}
// how to give inheritance outside



teacher.__proto__ = user  // teached will use property of user

// above is outdated 

//modern 
Object.setPrototypeOf(teacher , user)

String.prototype.truelength = function(){
    console.log(this)  // understand why this is imp
    console.log(this.trim().length)  

    
}

let name  = "venktesh"
name.truelength()
let name2 = "niraj"
name2.truelength()

// important of this is it will avoid confusion who has call 
