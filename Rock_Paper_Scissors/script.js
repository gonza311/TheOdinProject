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

function addPoint(stringResult) {
    if (stringResult == "You Win!") {
        playerScore++
    } else if (stringResult == "You Lose!") {
        computerScore++
    }
};

function endOfGame() {
    if (playerScore > computerScore) {
        return "You win the game!"
    } else {
        return "You lost the game!"
    }
}; 

function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose: Rock, Papers, or Scissors")
        result = playRound(computerSelection, playerSelection)
        console.log(result)
        addPoint(result)
    };
    console.log(endOfGame())
};


let computerSelection = getComputerChoice();
let playerSelection;
let playerScore = 0;
let computerScore = 0;



