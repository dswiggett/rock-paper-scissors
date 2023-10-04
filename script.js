function getComputerChoice() {
    let choice = Math.floor(Math.random() * 9) + 1;
    switch (choice) {
        case 1:
        case 2:
        case 3:
            return console.log('rock');
        case 4:
        case 5:
        case 6:
            return console.log('paper');
        case 7:
        case 8:
        case 9:
            return console.log('scissors');
    }
}
getComputerChoice();