// objects   
 // 1)singleton = when object is created from constructor it is called singleton
  // 2) object literal = when object is created from literal


  const jsuser = {
    name:"mhi" ,     // key is string behind the scene but value can anyrhing
    age:18 , 
    "mydistance":10,
    city : "pune" , 
    isloggedin : false , 
}
  
// how to access the object
 
console.log(jsuser.name)   // this is not the good way
 // console.log(jsuser[name]) // this will give error because key is string at the end
console.log(jsuser["name"])  // this is good way

console.log(typeof jsuser.mydistance)
console.log(typeof jsuser["mydistance"])

// why to use objet["key"]


// how to use the symbols as key

let mysymbol = Symbol("key1")

let my = {
  name : "venktesh" , 
  //"key1": "this  is my key" , 
   [mysymbol] : "this is my key " , 

  age : 30

}
console.log(my[mysymbol])

 // object value changes
 my.age = 50;
 console.log(my)
 // if you dont want any value of objet to get changes than is Freeze menthod
 Object.freeze(my)  // you will not get any error but you cant make any changes in this

 my.name = "fdfd"
 console.log(my)

 // fuction in objet
 let obj3 = {
  name : "object3", 
  age : 50
 }

 obj3.greetings = function(){
  console.log(`hello my name is ${this.name}`)
 }
 console.log(obj3.greetings) // this is just refence output will be anonymous

 console.log(obj3.greetings())
