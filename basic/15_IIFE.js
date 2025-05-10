// IIFE  == Immediately invoke function expression this is used in scenarion like we need something to get executed just at start of 
          // the applcation example database connection

// NOTE : we dont want pollution from global scope thats why we use IIFE

// SYNTAX : (functiondeclaration)()  -- >function call 

(function myname()
{
  console.log("my name is venktesh");
  console.log("DB is connected");
  
})();

// this is function call we write IIFE in paranthesis

// conider if we have one more function 
(function nextcode()  // this is also called named IIFE
{
    console.log(`this is my code`)
})()

// this will give error because functio  need to look where to end execution so ; is the thing we can user
// there should be semicolon (;) between back to back IIFE or some code to skip the error

console.log("this is outside function");

(()=>{
    console.log(`this is my arrow IIFE`)
})();


// there can be parameters also in IIFE

((username)=>{
    console.log(`this is the user ${username}`);
    
})("ventkes")
