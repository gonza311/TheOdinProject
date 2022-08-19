function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function getComputerChoice() {
    randomComputerNum = getRandomInt(3);
    if (randomComputerNum == 0) {
        return "rock"
    } else if (randomComputerNum == 1) {
        return "paper"
    } else {
        return "scissors"
    };
};

function playRound(computerSelection, playerSelection) {
    if (computerSelection == "rock") {
        if (playerSelection.toLowerCase() == "paper") {
            return "You Win!"
        }
    } else if (computerSelection == "paper") {
        if (playerSelection.toLowerCase() == "scissors") {
            return "You Win!"
        }
    } else if (computerSelection == "scissors") {
        if (playerSelection.toLowerCase() == "rock") {
            return "You Win!"
        }
    } else if (computerSelection == playerSelection.toLowerCase()) {
        return "Tie!"
    }

    return "You Lose!"
};


let computerSelection = getComputerChoice();
let playerSelection = "rock"



