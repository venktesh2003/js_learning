 // interview problem
 // how to know the property of the object user getOwnPropertyDescriptor(object name  , property)


console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);  // you cant chanfe value because of you see the propert 
//of the object it is not conigurable and writable



let descriptor =  Object.getOwnPropertyDescriptor(Math , "PI")
 console.log(descriptor)

 let obj = {
    name : "venktesh" , 
    age : 20 , 
    mail : "jmahajve@ex.com" , 
    isavailable:false
 }

 //console.log(Object.getOwnPropertyDescriptor(obj))  // this should give undefined because u need to specify the property
 console.log(Object.getOwnPropertyDescriptor(obj , "name"))


 /* 

 {
  value: 'venktesh',
  writable: true,
  enumerable: true,
  configurable: true
}
  */

// How to change the properties now as we are owner
//Object.defineProperties(objectname , property you want to change , {properties})

Object.defineProperty(obj , 'name' , {
    value : 5 , 
    writable : false , 
    enumrable:false , 
    configuration : true
})

console.log(obj)


// writable - not abke to rewrite
