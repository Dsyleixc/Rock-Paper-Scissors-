'use strict';

const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const roundResultText = document.querySelector('.round-result-text');
const choicesButtons = document.querySelectorAll('.choice');
const playerScoreText = document.querySelector('.player-score');
const computerScoreText = document.querySelector('.computer-score');
const playerChoiceImage = document.querySelector('#player-choice');
const computerChoiceImage = document.querySelector('#computer-choice');
const playerWinOrLoseImage = document.querySelector(
   '.player-win-or-lose-image'
);
const computerWinOrLoseImage = document.querySelector(
   '.computer-win-or-lose-image'
);

let playerScoreCount = 0;
let computerScoreCount = 0;
let playerChoice;
let computerChoice;
const choices = ['rock', 'paper', 'scissors'];

// Add event listeners to the choices buttons
choicesButtons.forEach((button) => {
   button.addEventListener('click', () => {
      playerChoice = button.id;
      playGame();
   });
});

// Randomize computer choice
const computerChoiceFunction = () => {
   const randomChoice = Math.floor(Math.random() * choices.length);
   return choices[randomChoice];
};

// Update images
const updateImages = function () {
   playerChoiceImage.src = `images/${playerChoice}.png`;
   playerChoiceImage.alt = playerChoice;
   computerChoiceImage.src = `images/${computerChoice}.png`;
   computerChoiceImage.alt = computerChoice;
};

// Player Wins
const playerWins = () => {
   playerScoreCount++;
   playerScoreText.textContent = playerScoreCount;
   playerWinOrLoseImage.src = 'images/win.png';
   computerWinOrLoseImage.src = 'images/lose.png';
   console.log('Player wins');
};

// Computer Wins
const computerWins = () => {
   computerScoreCount++;
   computerScoreText.textContent = computerScoreCount;
   computerWinOrLoseImage.src = 'images/win.png';
   playerWinOrLoseImage.src = 'images/lose.png';

   console.log('Computer wins');
};

// Play the game
const playGame = () => {
   computerChoice = computerChoiceFunction();
   updateImages();
   if (playerChoice === computerChoice) {
      playerWinOrLoseImage.src = 'images/tie.png';
      computerWinOrLoseImage.src = 'images/tie.png';
      console.log('It is a tie');
   } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
      playerWins();
   } else if (playerChoice === 'paper' && computerChoice === 'rock') {
      playerWins();
   } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
      playerWins();
   } else {
      computerWins();
   }
};
