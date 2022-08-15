const gameChoices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
};

