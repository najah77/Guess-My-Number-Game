'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉Correct Number'

// document.querySelector('.number').textContent = '13'
// document.querySelector('.score').textContent = '10'
// document.querySelector('.guess').value = 23;
// console.log( document.querySelector('.guess').value );

let secretNumber = Math.trunc(Math.random()*20)+1;
let score =  20;
let highScore = 0;
var audio = new Audio('tada-fanfare-a-6313.mp3')
var audioLose = new Audio('game-over-39-199830.mp3')

const canvas = document.querySelector('#confetti')
const jsConfetti = new JSConfetti();

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
// document.querySelector('.number').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number (document.querySelector('.guess').value);

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('.score').textContent = score;
    // document.querySelector('.message').textContent = 'Start guessing...'
    displayMessage('Start guessing...')
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})

    if(!guess){
        // document.querySelector('.message').textContent = '⚠️ No number'
        displayMessage('⚠️ Please Enter a Number')
    }else if(guess === secretNumber){
        // document.querySelector('.message').textContent = '🎉 Correct Number';
        displayMessage('🎉 Correct Number')
        jsConfetti.addConfetti()
        audio.play();
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green'
        document.querySelector('.number').style.width = '30rem'

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore
        }
    }else if(guess !== secretNumber){
        if (score > 1){
            // document.querySelector('.message').textContent = guess > secretNumber ? '📉 Too high!' : '📈 Too low'
            displayMessage(guess > secretNumber ? '📉 Too high!' : '📈 Too low')
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            // document.querySelector('.message').textContent = '😫 You lost the game!'
            displayMessage('😫 You lost the game!')
            jsConfetti.addConfetti({
                emojis: ['🤬', '😪', '😯', '😥', '😒', '😫']
            })
            audioLose.play()
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red'
            document.querySelector('.number').style.width = '30rem'
        }
    }


    // else if(guess > secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📉 Too high!'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = '😥 You lost the game! '
    //         document.querySelector('body').style.backgroundColor = 'red'
    //         document.querySelector('.number').style.width = '30rem'
    //         document.querySelector('.score').textContent = 0

    //     }
    // }else if(guess < secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📈 Too low'
    //         score--
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = '😥 You lost the game! '
    //         document.querySelector('body').style.backgroundColor = 'red'
    //         document.querySelector('.number').style.width = '30rem'
    //         document.querySelector('.score').textContent = 0
    //     }

    // }


    
    
})
 

