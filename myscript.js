

const rock = document.getElementById('rock');

rock.addEventListener('click', function() { 
    let playerSelection = 'rock';
    playRound(playerSelection);
});

const paper = document.getElementById('paper');

paper.addEventListener('click', function() {
    let playerSelection = 'paper';
    playRound(playerSelection);
});

const scissors = document.getElementById('scissors');

scissors.addEventListener('click', function() {
    let playerSelection = 'scissors';
    playRound(playerSelection);
});

function getComputerChoice() {
    const gameChoices = ['rock', 'paper', 'scissors'];
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
};



let playerWins = 0;
let computerWins = 0;


const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');

const result = document.querySelector('.resultText');

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection == computerSelection){
        result.textContent = "It's a draw."
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        ++playerWins;
        playerScore.textContent = playerWins;
        result.textContent = "You win! Rock beats scissors."
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        ++playerWins;
        playerScore.textContent = playerWins;
        result.textContent = "You win! Scissors beats paper."
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        ++computerWins;
        computerScore.textContent = computerWins;
        result.textContent = "You lose! Paper beats rock."
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        ++computerWins;
        computerScore.textContent = computerWins;
        result.textContent = "You lose! Rock beats scissors."
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        ++playerWins;
        playerScore.textContent = playerWins;
        result.textContent = "You win! Paper beats rock."
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerWins++;
        computerScore.textContent = computerWins;
        result.textContent = "You lose! Scissors beats paper."
    }
    if (playerWins === 5) {
        result.textContent = "You win!"
    }
    else if (computerWins === 5) {
        result.textContent = "Computer wins!"

    }
};



function game() {
        console.log(playRound(i));
     if (playerWins > computerWins) {
        console.log(`You won the game with ${playerWins}.`)
        return endGame();
    }
    else if (computerWins > playerWins) {
        console.log(`You lost the game. Computer wins with ${computerWins}.`)
        return endGame();
    }
    else {
        console.log(`No one wins the game. It's a tie at ${playerWins} for you and ${computerWins} for the computer.`)
        return endGame();
    }
}

function endGame() {
    computerWins = 0;
    playerWins = 0;
    computerScore.textContent = 0;
    playerScore.textContent= 0;
};

const reset = document.getElementById('reset');

reset.addEventListener('click', endGame);