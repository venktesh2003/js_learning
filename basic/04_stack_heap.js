// memory allocation 

/*

1)Stack = primitive type uses(value)
2)heap = non primitive (refernce)





*/
let one = {
    name:"venktesh" , 
    email : "xyz@gmail.com"
}

let two = one;   // here we are not getting copy we are getting reference

two.name = "Hey it is change now"

console.log(one.name)
console.log(two.name)

