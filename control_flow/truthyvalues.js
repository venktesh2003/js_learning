// Truthy value :  all values except falsy , "0" ,'false' , " ", [] ,{}, function(){} ,  
// falsy values : false , 0 , -0 , BigInt , 0n , null , "" , undefined , NaN
const email= "w@jci.com"

if(email ){
    console.log("this user has email ")

}
else{
    console.log("user dont have email ");
    
}
const email1= ""

if(email1 ){
    console.log("this user has email ")

}
else{
    console.log("user dont have email ");
    
}



const arr = []  // here empty array is true but above empty string is false why ??? this is where truthy and falsy value comes
if(arr){
    console.log("this is consider as true");
    
}
else{
    console.log("this is false");
    
}

// falsy values : false , 0 , -0 , BigInt , 0n , null , "" , undefined , NaN

if(-1){
    console.log("this is falsy value");
    
}else{
    console.log("this is not falsy ");
    
}

// how to check empty object
const emptyobject = {}
if(Object.keys(emptyobject).length === 0)
{
    console.log("object is empty");
    
}
else {
    console.log("not empty object");
    
}

// how to check empty array 

let arra = []
if(arra.length === 0)
{
    console.log("array is empty");
    
}

// Nullish Coalescing operartor (??) null , undefined

let val1;
val1 = 5 ?? 20  // it will assign the first value other than null or undefined if we didnot get any value from right 
console.log(val1)
let val2 = null ?? 30
console.log(val2)
console.log(undefined ?? 14)
console.log(10??5??66)
console.log(null ?? undefined)



// ternary operator

 // condition ? execute if condition is true : execute this if false

 10>2 ? console.log("10 is greater than 2") : console.log("condition is false");
 
 

