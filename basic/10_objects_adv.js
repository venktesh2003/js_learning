// singleton sytax
let obj  = new Object(); // this is singleton

let tinderuser = { name : "tinder" , age:40 , login:true, 

}
console.log(tinderuser);

let Hinge = {
    name:"hinge" , 
    version : 2.0
}


 // how to merge the two object
 
 const obj3  = {Hinge , tinderuser}
 console.log(obj3)  // output will be object inside object 

 //1)Assgin method to solve above problem we can use Object.assign() method
 // {} -- >this in argument act as target and rest act as soucr
 
 const obj4  = Object.assign({} , Hinge , tinderuser)
  console.log(obj4)

  // merging object using spread operator

  const spreadde = {...tinderuser , ...Hinge}
  console.log(spreadde)


  // How value come from DB : Array of object

  // if you want the Keys from object 
  console.log(Object.keys(tinderuser))
 // if you want the value from object
  console.log(Object.values(tinderuser))

   // if you want the entries from object
   console.log(Object.entries(tinderuser))

   // scenaro : what if any key doesnot exist than -- > check if it has propery

   console.log(tinderuser.hasOwnProperty('version'))

