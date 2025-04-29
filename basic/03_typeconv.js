// let score = "33";

// console.log(typeof score);
// let numval = Number(score);
// console.log(typeof numval)

//consversion to number

// "33" =>33
//"33abc" =>NaN
// true  =>1 false =>0

// let somenumber = 33
// let stringnumber = String(somenumber)
// console.log(typeof somenumber)
// console.log(typeof stringnumber)

// ==============summaer data type=  ===============================

//type of data 1)primitive ->these are call by value (String , number , boolean , null , undefined , Symbol , BigInt)
            
               // 2)Non primitive ->refernce by (Arrays , objects , Functions )

               //java script is dynamic type language 
               const score1 = 100
               const score2= 12.333
               const ourside  = null 
               let userEmail;   // undefined

               // SYMBOLS  -> used to identify uniquely 
               const id = Symbol('112')
               const anotherId = Symbol('112')
               console.log(id === anotherId)
//------------no primitive--------------------------

// //Arrays 
const array = ["1" , 2,5];
// Object
let object = {
    name:"venktesh" , 
    class: 10 , 
// }

// function
let myfunction = function(){
    console.log("hello ");}
    
