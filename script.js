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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('Computer Wins!');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('Player Wins!');
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        console.log('Tie Game!');
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log('Tie Game!');
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('Computer Wins!');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('Player Wins!');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('Player Wins!');
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log('Tie Game!');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('Computer Wins!');
    }
    console.log(playerSelection, computerSelection);
}

const playerSelection = prompt("Choose rock, paper, or scissors!");
const computerSelection = getComputerChoice();

playRound();