let form = document.querySelector('form')
// the below use case will give you the empty values

// const height = parseInt(document.querySelector('#height').value)

// adding the event listner 

form.addEventListener('submit' , function(e){
    e.preventDefault() // this method will stop submitting form
    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)
    let results = document.querySelector('#results')

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = "please enter the correct height"

    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = "please enter the correct weight"

    }
    else{
        const BMI = (weight / ((height*height)/10000)).toFixed(2)
        // show result 
    
        results.innerHTML = `<span>${BMI}</span>`
        }
 
      
})