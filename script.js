(function(){
let userInput = document.querySelector('.numberInput')
let form = document.querySelector('form')
let result = document.querySelector('.result')
let submitBtn = document.querySelector('.submitBtn')
let startBtn = document.querySelector('.startGameBtn')
let guessDisplay = document.querySelector('.guessDisplay');

let guessNumberArray = []
let randomNumber = Math.floor(Math.random()*100)

form.addEventListener('submit',(event)=>{
    event.preventDefault()

    let userInputValue = parseInt(userInput.value)

    if(userInputValue === randomNumber){
        result.innerText = 'Too Congrats!'
        submitBtn.disabled = true  
        startBtn.disabled = false
    } else if (userInputValue > randomNumber){
        result.innerText = 'Too high!'   
    } else if (userInputValue < randomNumber){
        result.innerText = 'Too Low!'   
    } 

   guessNumberArray.push(userInputValue)
   guessDisplay.innerText = `${guessNumberArray.join(', ')}`
  
   if(guessNumberArray.length === 5){
       result.innerText = 'You Lose the game!'
       submitBtn.disabled = true  
       startBtn.disabled = false
   }

   form.reset();

});

startBtn.addEventListener('click',()=>{
    randomNumber = Math.floor(Math.random()*100)
    
    submitBtn.disabled = false  
    startBtn.disabled = true
    guessNumberArray.splice(0,guessNumberArray.length)

    result.innerHTML= ''
    guessDisplay.innerHTML = ''
})
})();

//--------------------------------------------------------------------

// ( function() {
//     let userInput = document.querySelector('.numberInput');
//     let form = document.querySelector('form');
//     let submitBtn = document.querySelector('.submitBtn');
//     let startBtn = document.querySelector('.startGameBtn');
//     let result = document.querySelector('.result');
//     let guessDisplay = document.querySelector('.guessDisplay');

//     let guessNumberArray = []
//     let randomNumber = Math.floor(Math.random()* 100);

//     form.addEventListener('submit',(event)=>{
//         event.preventDefault();

//         const userInputValue = parseInt(userInput.value)

//         if(userInputValue === randomNumber){
//             result.innerHTML = 'Too Congrats!'
//             submitBtn.disabled = true
//             startBtn.disabled = false
//         } else if(userInputValue > randomNumber){
//             result.innerHTML = 'Too high!'
//         } else if(userInputValue < randomNumber) {
//             result.innerHTML = 'Too low!'
//         }
//              guessNumberArray.push(userInputValue)
//              guessDisplay.innerHTML = `Your Guess: ${guessNumberArray.join(', ')}`

//         if(guessNumberArray.length === 5){
//             result.innerHTML = 'To loss the game!'
//             submitBtn.disabled = true
//             startBtn.disabled = false
//         }

//         form.reset();

//     });
//     startBtn.addEventListener('click',()=>{
//         randomNumber = Math.floor(Math.random()* 100);
        
//         submitBtn.disabled = false
//         startBtn.disabled = true
//         guessNumberArray.splice(0,guessNumberArray.length)

//         result.innerHTML= ''
//         guessDisplay.innerHTML = ''
//     })
// })()