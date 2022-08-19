function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function getComputerChoice() {
    randomComputerNum = getRandomInt(3);
    if (randomComputerNum == 0) {
        return "Rock"
    } else if (randomComputerNum == 1) {
        return "Paper"
    } else {
        return "Scissors"
    };
};

