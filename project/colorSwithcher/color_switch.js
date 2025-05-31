// select buttons and body 

let body  = document.querySelector("body")
let buttons = document.querySelectorAll('.button')
buttons.forEach(function(btn){
    console.log(btn)

    // applying event listner

    btn.addEventListener('click' , function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;

        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;

        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;

        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = 'purple';

        }
        
    })
  


})
