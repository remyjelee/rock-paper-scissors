function getComputerChoice() {
    result = Math.random();
    if (result >= 0 && result < 1/3) {
        return "rock";
    } else if (result >= 1/3 && result < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let input = 0;
    do {
        input = prompt("Scissors, Paper... Rock!");
        input = input.toLowerCase();
    } while (input != 'rock' && input != 'paper' && input != 'scissors');    

    return input;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`Tie! Both are ${computerChoice}.`)
        return -1;
    } else if (humanChoice == 'rock') {
        if (computerChoice == 'paper') {
            return computerWon(humanChoice, computerChoice);
        } else if (computerChoice == 'scissors') {
            return humanWon(humanChoice, computerChoice);
        }
    } else if (humanChoice == 'paper') {
        if (computerChoice == 'rock') {
            return humanWon(humanChoice, computerChoice);
        } else if (computerChoice == 'scissors') {
            return computerWon(humanChoice, computerChoice);
        }
    } else if (humanChoice == 'scissors') {
        if (computerChoice == 'rock') {
            return humanWon(humanChoice, computerChoice);
        } else if (computerChoice == 'paper') {
            return computerWon(humanChoice, computerChoice);
        } 
    }
}

function humanWon(humanChoice, computerChoice) {
    computerChoice = computerChoice.at(0).toUpperCase() + computerChoice.slice(1);
    humanChoice = humanChoice.at(0).toUpperCase() + humanChoice.slice(1);
    
    console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
    return 1;
}

function computerWon(humanChoice, computerChoice) {
    computerChoice = computerChoice.at(0).toUpperCase() + computerChoice.slice(1);
    humanChoice = humanChoice.at(0).toUpperCase() + humanChoice.slice(1);
    
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    return 0;
}

function playGame() {
    let humanSelection = 0, computerSelection = 0;
    let humanScore = 0, computerScore = 0;

    /*logic for 5 rounds */ 
    for  (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        result = playRound(humanSelection, computerSelection);
        if (result == 1) {
            humanScore++;
        }
        else if (result == 0){
            computerScore++;
        }
    }

    console.log(`Human score: ${humanScore}\nComputer Score: ${computerScore}`);
}

playGame();