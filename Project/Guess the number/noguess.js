const randomNumber = parseInt(Math.random()*100 + 1);
const submit = document.querySelector('#subt')  // selecting the submit button 
const userInput = document.querySelector('#guessfield')  // selecting the user input
const guessslot =document.querySelector('.guesses')
let remaining = document.querySelector('.lastResult')  // getting the remaining one
const lower_or_high = document.querySelector('.loworHi')
const startover = document.querySelector('.resultParas')

// creating the paragraph we will select the value

let p= document.querySelector('p')
let prevguess = []   // we will display the users previous guess
let numGuess = 1;   // this will display the number of guess
let playgame = true;  // checking whether user is playing game
if(playgame)
{
    submit.addEventListener('click' , function(e){
        e.preventDefault()
        let guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}
// writing functions

function validateGuess(guess)
{
     // checing the validation of user input check value bet 100 or 0 
     if(isNaN(guess))
     {
        alert('please enter a valid number')

     }
     else if(guess<1)
     {
         alert('please enter a number greater than 0')

     }
     else if(guess>100)
     {
         alert('please enter a number less than 100')

     }
     else{
        prevguess.push(guess)
        if(numGuess === 11){
            displayguess(guess)
            displaymessage(`Game over , Random number was ${randomNumber}`)
            endgame()
            
        }
        else{
                displayguess(guess)
                checkguess(guess)
            }
     }

}

function checkguess(guess){
     // this will pring the ,message  // validation
     if(guess === randomNumber)
     {
        displaymessage(`you Guessed it right`)
        endgame()
     }
     else if(guess<randomNumber)
     {
        displaymessage(`number is too low`)
     }
     else if(guess>randomNumber)
     {
        displaymessage(`number is too high`)
     }

}

function displayguess(guess)
{
    // this will update array and gueses
    userInput.innerHTML = ''
    guessslot.innerHTML+=`${guess} ,`
    numGuess++;
    remaining.innerHTML = `${10-numGuess}`


}
function displaymessage(meesage)
{
      // user input will empty on next guess and dom manipulation and remaining guesses we will display
     lower_or_high.innerHTML = `<h2>${meesage}</h2>`
}

function newgame(){
  // 
  const newgame_button = document.querySelector('newGame')
  newgame_button.addEventListener('click' , function(e){
    prevguess = []
    randomNumber = parseInt(Math.random()*100 + 1);
    numGuess = 1;
    guessslot.innerHTML = ''
    remaining.innerHTML`${11-numguess}`
    userInput.removeAttribute('disabled')
    startover.removeChild(p)
   playgame = true;

  })
}

function endgame()
{
    userInput.value = ``;
    userInput.setAttribute('disabled' , '')  // not allow user to play more
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
    startover.appendChild(p)
    playgame = false

    newgame()
}
