// how to make promise
let promiseOne = new Promise(function(resolve , reject){
  
// DO Async task here
// example -> DB call , cryptography , network

setTimeout(function(){
    
    console.log('Async task is completed')
       resolve() // if this is not added than your promise is not consumed properly try to comment and see the output
       // it will not go to then part if resolve is not added
} , 2000)



    
}); //promise is object

//  consume promise
promiseOne.then(function(){
    console.log('promise is full filled')
})        // then has connection with resolve if you run it without calling resolve() in promise that means you havent consume promise properly 
         // promise with then


// creating promise without storing it in variable

new Promise((resolve , reject)=>{
    setTimeout(()=>{
        console.log("Async task 2 ");
        
    } , 3000)
    resolve()
}).then(()=>{
    console.log("promise 2 full filled")
})

let promise3 = new Promise(function(resolve , reject)
{
    setTimeout(()=>{
        console.log("Async task 3");
        resolve({username:"venktesh" , email:"venktesh@example.com"})
    }, 2000)
})

promise3.then((user)=>{
    console.log(user.username + " "+ user.email)
    console.log("promise 3 full fillled")
})

let promise4 = new Promise(function(resolve , reject){
    setTimeout( 
        function(){
            let error = false;
            if(!error){
                resolve({username:"venktesh" , password:"124"})
            }else{
                reject('ERROR something went wrong');  // reject user for error if something went wrong and all 

            }
        }, 1000)
})

promise4.then((user)=>{
    console.log(user);
    return user.username
    
})
.then((username)=>{
    console.log(username)    //.then chaingn whatever the then return than it will go to nex then
})
.catch(()=>{
    console.log("error")
}) 
.finally(()=>{
    {    // finally let you know if everrything goes good
   console.log("promise full filled successfully");
   
}
})



let promise5 = new Promise(function(resolve , reject){
setTimeout(()=>{
        let error = false
        if(!error){
             resolve({username:"javascript" , password:"124"})

        }
        else{
            reject("JS went wrong and you are promise 5")
        }
       
    }, 2000)

});
     
// async await exact same as then 

async function consumepromise5() {
    const response = await promise5 
           // await act as then

           try{
            console.log(response);
           }catch(error){
            console.log(error);
            
           }


}
consumepromise5()

//----------------------------------------------------------

