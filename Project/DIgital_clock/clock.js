const clock = document.getElementById('clock')
//or 

// let clock = document.QuerySelector('#clock')
let date = new Date();
console.log(date.toLocaleTimeString())

//setInterval(function(){} , time)

setInterval(function(){
    let date = new Date();
console.log(date.toLocaleTimeString())
clock.innerHTML =date.toLocaleTimeString()
} , 1000)