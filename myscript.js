const gameChoices = ['Rock', 'Paper', 'Scissors'];


function getComputerChoice() {
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
};


function playRound() {
    let playerSelection = prompt('Rock, paper, or scissors?').toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();
    if (playerSelection === computerSelection){
        console.log("It's a tie.")
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log("You win! Rock beats scissors.")
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log("You win! Scissors beats paper.")
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log("You lose! Paper beats rock.")
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log("You lose! Rock beats scissors.")
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log("You win! Paper beats rock.")
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log("You lose! Scissors beats paper.")
    }   
    
};


function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i< 5; i++) {
    console.log(playRound(i));
    }
}

