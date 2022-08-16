const gameChoices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
};

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "It's a tie."
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return "You win! Rock beats scissors."
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You win! Scissors beats paper."
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You lose! Paper beats rock."
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You lose! Rock beats scissors."
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You win! Paper beats rock."
    }
    else {
        return "You lose! Scissors beats paper."
    }   
    
};
const computerSelection = getComputerChoice().toLowerCase();
const playerSelection = prompt('Rock, paper, or scissors?').toLowerCase();


console.log(playRound(playerSelection, computerSelection));

function game(playRound) {
    for(let i = 0; i< 5; i++) {
        const playerWins = 0;
        const computerWins = 0;
    }

};