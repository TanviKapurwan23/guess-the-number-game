'use strict';





// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "Correct Number";
// console.log(document.querySelector('.message').textContent);


// document.querySelector('.number').textContent = 13;
// console.log(document.querySelector('.number').textContent);


// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.score').textContent);


// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);






let SecretNumber = Math.trunc(Math.random()*20)+1;
console.log("SecretNumber",SecretNumber);
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;

}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
  
    // When there's no input
    if(!guess){
        displayMessage('⛔️ No Number');
        // document.querySelector('.message').textContent = '⛔️ No Number';
    } else if (guess === SecretNumber){      // When player Wins
        displayMessage('✅ Correct Number')
        // document.querySelector('.message').textContent = '✅ Correct Number';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = SecretNumber;

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

      //When the guess is wrong 
    } else if (guess !== SecretNumber) {
        if (score > 1) {
        //   document.querySelector('.message').textContent =
        //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
          displayMessage(guess > SecretNumber ? '📈 Too high!' : '📉 Too low!');
          score--;
          document.querySelector('.score').textContent = score;
        } else {
        //   document.querySelector('.message').textContent = '💥 You lost the game!';
          displayMessage('💥 You lost the game!');
          document.querySelector('.score').textContent = 0;
        }
      }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    SecretNumber = Math.trunc(Math.random()*20)+1;
    // document.querySelector('.message').textContent = 'Start Guessing...';
    displayMessage('Start Guessing...');
    document.querySelector('.score').textContent = score; 
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})