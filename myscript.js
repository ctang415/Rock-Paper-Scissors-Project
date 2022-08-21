

const rock = document.getElementById('rock');

rock.addEventListener('click', function() { 
    playerSelection= 'rock';
    let computerSelection = getComputerChoice().toLowerCase();
    playRound(playerSelection, computerSelection);
});

const paper = document.getElementById('paper');
paper.addEventListener('click', function() {
    playerSelection = 'paper';
    let computerSelection = getComputerChoice().toLowerCase();
    playRound(playerSelection, computerSelection);
});

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', function() {
    playerSelection = 'scissors';
    let computerSelection = getComputerChoice().toLowerCase();
    playRound(playerSelection, computerSelection);
});

function getComputerChoice() {
    const gameChoices = ['Rock', 'Paper', 'Scissors'];
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
};
let playerWins = 0;
let computerWins = 0;

let playerSelection ='';

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return `It's a draw. Score is ${playerWins} to ${computerWins}.`
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        ++playerWins;
        return `You win! Rock beats scissors. Score is ${playerWins} to ${computerWins}.`
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        ++playerWins;
        return `You win! Scissors beats paper. Score is ${playerWins} to ${computerWins}.`
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        ++computerWins;
        return `You lose! Paper beats rock. Score is ${playerWins} to ${computerWins}.`
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        ++computerWins;
        return `You lose! Rock beats scissors. Score is ${playerWins} to ${computerWins}.`
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        ++playerWins;
        return `You win! Paper beats rock. Score is ${playerWins} to ${computerWins}.`
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerWins++;
        return `You lose! Scissors beats paper. Score is ${playerWins} to ${computerWins}.`
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
    playerWins= 0;
};
