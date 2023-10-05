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
    switch (true) {
        case playerSelection === 'scissors' && computerSelection === 'rock':
            return 'Computer Wins!';
        case playerSelection === 'scissors' && computerSelection === 'paper':
            return 'Player Wins!';
        case playerSelection === 'scissors' && computerSelection === 'scissors':
            return 'Tie Game!';
        case playerSelection === 'rock' && computerSelection === 'rock':
            return 'Tie Game!';
        case playerSelection === 'rock' && computerSelection === 'paper':
            return 'Computer Wins!';
        case playerSelection === 'rock' && computerSelection === 'scissors':
            return 'Player Wins!';
        case playerSelection === 'paper' && computerSelection === 'rock':
            return 'Player Wins!';
        case playerSelection === 'paper' && computerSelection === 'paper':
            return 'Tie Game!';
        case playerSelection === 'paper' && computerSelection === 'scissors':
            return 'Computer Wins!';
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose rock, paper, or scissors!");
        const computerSelection = getComputerChoice();
        
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();