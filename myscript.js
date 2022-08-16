const gameChoices = ['Rock', 'Paper', 'Scissors'];


function getComputerChoice() {
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
};
let playerWins = 0;
let computerWins = 0;

function playRound() {
    let playerSelection = prompt('Rock, paper, or scissors?').toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();
    if (playerSelection === computerSelection){
        return `It\'s a tie. Score is ${playerWins} to ${computerWins}`
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        ++playerWins;
        return `You win! Rock beats scissors. Score is ${playerWins} to ${computerWins}`
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        ++playerWins;
        return `You win! Scissors beats paper. Score is ${playerWins} to ${computerWins}`
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        ++computerWins;
        return `You lose! Paper beats rock. Score is ${playerWins} to ${computerWins}`
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        ++computerWins;
        return `You lose! Rock beats scissors. Score is ${playerWins} to ${computerWins}`
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        ++playerWins;
        return `You win! Paper beats rock. Score is ${playerWins} to ${computerWins}`
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerWins++;
        return `You lose! Scissors beats paper. Score is ${playerWins} to ${computerWins}`
    }   
    
};


function game() {
    for (let i = 0; i< 5; i++) {
        console.log(playRound(i));
}
     if (playerWins > computerWins) {
        return `You won with ${playerWins} wins.`
    }
    else if (computerWins < playerWins) {
        return `You lost. Computer wins with ${computerWins} wins.`
    }
    else {
        return `No one wins. It's a tie game at ${playerWins} to ${computerWins}.`
        }
};

