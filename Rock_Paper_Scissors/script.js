function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function getComputerChoice() {
    randomComputerNum = getRandomInt(3);
    if (randomComputerNum == 0) {
        return "rock";
    } else if (randomComputerNum == 1) {
        return "paper";
    } else {
        return "scissors";
    };
};

function playRound(computerSelection, playerSelection) {
    if (computerSelection == "rock" && playerSelection.toLowerCase() == "paper") {
        return "You win the round";
    } else if (computerSelection == "paper" && playerSelection.toLowerCase() == "scissors") {
        return "You win the round!";
    } else if (computerSelection == "scissors" && playerSelection.toLowerCase() == "rock") {
        return "You win the round!";
    } else if (computerSelection == playerSelection.toLowerCase()) {
        return "The round is a tie!";
    };

    return "You lose the round!";
};

function addPoint(stringResult) {
    if (stringResult == "You win the round!") {
        playerScore++
    } else if (stringResult == "You lose the round!") {
        computerScore++
    };
};

function endOfGame() {
    if (playerScore > computerScore) {
        return "You win the game!";
    } else {
        return "You lost the game!";
    };
}; 

function game() {
    playerScore = 0;
    computerScore = 0;
    // for (let i = 0; i < 5; i++) {
    //     playerSelection = prompt("Choose: Rock, Papers, or Scissors")
    //     result = playRound(computerSelection, playerSelection)
    //     console.log(result)
    //     addPoint(result)
    // };
    console.log(endOfGame());
};

let computerSelection;
let playerSelection;
let playerScore;
let computerScore;

const playerChoice = document.querySelector('.playerChoice')
const computerChoice = document.querySelector('.computerChoice')
const roundResult = document.querySelector('.roundResult')
const choiceButtons = document.querySelectorAll('.selection')
choiceButtons.forEach(choice => {
    choice.addEventListener('click', () => {
        computerSelection = getComputerChoice();
        playerSelection = choice.textContent.toLowerCase();
        computerChoice.innerHTML = (`Computer chose ${computerSelection}`);
        playerChoice.innerHTML = (`Player chose ${playerSelection}`);
        let Result = (playRound(computerSelection,playerSelection));
        roundResult.innerHTML = Result;
    })
});








