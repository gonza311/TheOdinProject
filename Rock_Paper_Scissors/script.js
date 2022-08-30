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
        return "You win the round!";
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
    playerScoreDisplay.innerHTML = (`Player Score: ${playerScore}`);
    computerScoreDisplay.innerHTML = (`Computer Score: ${computerScore}`);
};

function checkEndOfGame() {
    if (playerScore == 5) {
        endGame = true;
        return "You win the game!"
    } else if (computerScore == 5) {
        endGame = true;
        return "You lost the game!";
    };
}; 


let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let endGame = false;

const playerChoice = document.querySelector('.playerChoice');
const computerChoice = document.querySelector('.computerChoice');
const roundResult = document.querySelector('.roundResult');
const playerScoreDisplay = document.querySelector('.playerScoreDisplay');
const computerScoreDisplay = document.querySelector('.computerScoreDisplay');
playerScoreDisplay.innerHTML = (`Player Score: ${playerScore}`);
computerScoreDisplay.innerHTML = (`Computer Score: ${computerScore}`);

const choiceButtons = document.querySelectorAll('.selection');
choiceButtons.forEach(choice => {
    choice.addEventListener('click', () => {
        if (endGame != true) {
            computerSelection = getComputerChoice();
            playerSelection = choice.textContent.toLowerCase();
            computerChoice.innerHTML = (`Computer chose ${computerSelection}`);
            playerChoice.innerHTML = (`Player chose ${playerSelection}`);

            let Result = (playRound(computerSelection,playerSelection));
            roundResult.innerHTML = Result;

            addPoint(Result);
            checkEndOfGame()
        };



    })
});








