let playerScore = 0;
let computerScore = 0;

const lose = 'You lose this round!'
const win = 'You win this round!'
const tie = 'Its a tie, Try again'
      
        function getComputerChoice(){
        const choices = ['rock', 'paper', 'scissors']
        const choice = choices[Math.floor(Math.random()* choices.length)];
        return choice 
        }
        
 const btns = document.querySelectorAll('.btn');
 const refresh = document.querySelector('.refresh')
 const body = document.querySelector('body');
 const results = document.createElement('div');
 const resText = document.createElement('div');
 body.appendChild(results);
 body.appendChild(resText);
 results.textContent = 'Score';
 resText.textContent = '';
 refresh.addEventListener('click', (e)=> {
  location.href = location.href;

 })


 btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
const playerSelection = e.target.value;
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);


    });
 })

 function playRound(playerSelection, computerSelection) {
    if (playerScore === 5 || computerScore === 5) {
      return;
    }
    if ((playerSelection === 'rock' && computerSelection === 'paper') || 
        (playerSelection === 'scissors' && computerSelection === 'rock') || 
        (playerSelection === 'paper' && computerSelection === 'scissors')) {
      computerScore++;
      resText.textContent = lose;
    } else if (playerSelection == computerSelection) {
      resText.textContent = tie;
    } else if (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors')) {
      alert('Improper selection made try again')
    } else {
      playerScore++;
      resText.textContent = win;
    }
  
    results.textContent = 'Player score: ' + playerScore  + ' ' + 'Computer score: ' + computerScore;
  
    if (playerScore === 5) {
      resText.textContent = 'You have won!';
    } else if (computerScore === 5) {
      resText.textContent = 'Computer has won';
    }
  }






        
// function game(){
// for(let i = 1; i <= 5; i++){ // What the loop is going to be. 
// playerSelection = prompt('Choose you choice of weapon').toLowerCase() // This will allow you to input a selection.
// const computerSelection = getComputerChoice(); // Sets one of the parameters for playRound function using getCompterChoice func. 
// playRound(playerSelection, computerSelection) // Calls playRound function.
// }
// if (playerScore > computerScore){ // If playerScore is more than computerScore then log you have won.
// console.log('You have won the game!')
// } 
// else if (playerScore < computerScore){// If playerScore is less than computerScore then log you have lost.
// console.log('You have lost the game! Computer wins')
// }
// else {console.log('its a tie game, play again')} // Otherwise log it is a tie.
// }
//   game()
    
    