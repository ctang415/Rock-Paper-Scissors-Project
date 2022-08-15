const gameChoices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
};

function playRound (playerSelection, computerSelection) {

    


};
const computerSelection = getComputerChoice().toLowerCase();
const playerSelection = prompt('Rock, paper, or scissors?').toLowerCase();


console.log(playRound(playerSelection, computerSelection));