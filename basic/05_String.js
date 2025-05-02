
// const name = "venktsh"
// const surname = "mahajan"

// // we can concatenate string 
// console.log(name + surname);
// // above one is out dated sysntax use string using backticks (``)
// console.log(`my name is ${name} and my surname is ${surname}`);

/* ------------------------------- */
// some string useful function

// const game = new String("contra")
// console.log(game.toUpperCase());
// console.log(game.indexOf('x'))

// const string1 = "venktesh"
// console.log(string1.substring(-8 , 4))  // in .substring method you cant use negatives if you use that it will get ignored
// let another = string1.slice(-7 , 4)
// console.log(another);
// -------------------------------

 // removing unwanted Spaces from start and end of a String

let name = "     venktesh      Mahajan                "
console.log(name)
console.log(name.trim())  // it will remove unwanted spaces from start and end
const url  = "https://google%20.com"

//replacing some character 
console.log(url.replace('%20' , ''))

console.log(url)

// split method   split(seprator)

console.log(url.split('%'))