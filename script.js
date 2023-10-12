const results = document.querySelector('#results');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const buttons = document.querySelectorAll('button');
let gameOver = 5;
let playerScore = 0;
let playerScoreNum = document.querySelector('#player-score');
let computerScore = 0;
let computerScoreNum = document.querySelector('#computer-score');
let playerChoice;
let computerChoice;

// player choice
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        switch (e.target) {
            case rock:
                playerChoice = 'rock';
                computerChoice = getComputerChoice();
                console.log(playerChoice, computerChoice)
                roundResults();
            break;
            case paper:
                playerChoice = 'paper';
                computerChoice = getComputerChoice();
                console.log(playerChoice, computerChoice)
                roundResults();
            break;
            case scissors:
                playerChoice = 'scissors';
                computerChoice = getComputerChoice();
                console.log(playerChoice, computerChoice)
                roundResults();
            break;
        }
    });
});

// computer choice
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 9) + 1;
    switch (choice) {
        case 1:
        case 2:
        case 3:
            return 'rock';
        case 4:
        case 5:
        case 6:
            return 'paper';
        case 7:
        case 8:
        case 9:
            return 'scissors';
    };
}

// results
function roundResults() {
    if (
        playerChoice === 'rock' && computerChoice === 'rock' || 
        playerChoice === 'paper' && computerChoice === 'paper' || 
        playerChoice === 'scissors' && computerChoice === 'scissors') {
           results.textContent = 'Tie Game!';
    } else if (
        playerChoice === 'rock' && computerChoice === 'scissors' || 
        playerChoice === 'paper' && computerChoice === 'rock' || 
        playerChoice === 'scissors' && computerChoice === 'paper') {
           playerScore++;
           results.textContent = 'Player Wins!';
    } else if (
        playerChoice === 'rock' && computerChoice === 'paper' || 
        playerChoice === 'paper' && computerChoice === 'scissors' || 
        playerChoice === 'scissors' && computerChoice === 'rock') {
           computerScore++;
           results.textContent = 'Computer Wins';
    }
}