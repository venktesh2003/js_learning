// functions with objects 

// what if you dont know how many items user will buy like
// function calculate_cartprice(num1)
// {
//     return num1
    
// }

calculate_cartprice(200  , 400 , 500 )  // this is tought situatino now,
// TO AVOID ABOVE THING we use rest operatot

// 1)SPREAD OPERATOR

function calculate_cartprice(...num1)   // this ...variable name is rest operator and spread operator both depend on user case

{
    return num1
    
}

console.log(calculate_cartprice(200 , 300 , 400)) // this will give output as array of all the values

// How to use objeccts in functions
const user = {
    name : "venktesh" , 
    age : 20 , 
    gender : "male"
}

function handleobject(anyobject)
{
     console.log(`this is the name ${anyobject.name} , this is age ${anyobject.age}`)
}
handleobject(user)
 // what if the property does not exist we can use the typechecking

 //ANOTHER WAY  // directly pass object without storing it in variable

 handleobject({
    name : "sam" , 
    age : 40,

 })

 // same we can use with arrays 

 let array = [30 , 40 , 50 , 60]
 function handlearray(takearray)
 {
    console.log(takearray[2])

 }
 handlearray(array)
 
 // console.log(`this is the  , ${handlearray([30 , 40 , 50 , 60])}`);

