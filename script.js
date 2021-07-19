let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  let targetNumber = Math.floor(Math.random() * 10);
  return targetNumber;
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  if (Math.abs(targetNumber - humanGuess) <= Math.abs(targetNumber - computerGuess)) {
    return true;
  } else {
    return false;
  }
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}