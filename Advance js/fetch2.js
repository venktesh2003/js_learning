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