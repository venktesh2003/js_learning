async function getallusers(){
    try {
         const response = await fetch("https://jsonplaceholder.typicode.com/users")
    //console.log(response)
    const data = response.json();
    console.log(data)
    console.log("i executed")
    } catch (error) {
        console.log('error is  ', error);
        
    }
   
}
getallusers()

//-----------------------------------------------------------------

// without async and await but same thing

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.catch((error)=>{
    console.log(error)
})
.then((data)=>{
    console.log(data)
})