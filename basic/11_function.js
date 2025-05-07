function myfunc(number1 , number2)   // these are parameters
{
    return number1+number2;
}
myfunc(4 , "a")
console.log(myfunc(4 ,"a")); // these are argurment\

// storing function in variable

function isloggedin(username)
{
    console.log(`${username} is logged in `)
}

// interview 
isloggedin() // this will give result as undefined if we dont gve arguement
