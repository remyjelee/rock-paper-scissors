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



let choices = document.querySelectorAll(".choices");
let computerScoreboard = document.querySelector("#cpuscore");
let humanScoreboard = document.querySelector("#yourscore");
let point = 0;
let borderToColour = 0;
let humanSelection = 0, computerSelection = 0;
let borderToRevert = document.querySelector("#rock");
let humanScore = 0, computerScore = 0;

const textBox = document.querySelector(".textbox");
const cpuChoice = document.querySelector("#cpuchoice");

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return -1;
    } else if (humanChoice == 'rock') {
        if (computerChoice == 'paper') {
            return 0;
        } else if (computerChoice == 'scissors') {
            return 1;
        }
    } else if (humanChoice == 'paper') {
        if (computerChoice == 'rock') {
            return 1;
        } else if (computerChoice == 'scissors') {
            return 0;
        }
    } else if (humanChoice == 'scissors') {
        if (computerChoice == 'rock') {
            return 0;
        } else if (computerChoice == 'paper') {
            return 1;
        } 
    }
}


function playGame(e) {
    humanSelection = e.target.id;
    computerSelection = getComputerChoice();
    
    result = playRound(humanSelection, computerSelection);
    if (result == 1) {
        humanScore++;

        point = document.createElement("div"); /* add point?? paramer == scoreBoard */
        point.setAttribute("class", "point");
        humanScoreboard.appendChild(point);

        borderToRevert.style.border = "0";
        
        borderToColour = document.querySelector(`#${humanSelection}`);
        borderToColour.style.border = "10px solid green";

        textBox.textContent = "YOU WIN!";
        textBox.style.color ="green";
    } else if (result == 0){
        computerScore++;

        point = document.createElement("div"); /* could turn into function */
        point.setAttribute("class", "point");
        computerScoreboard.appendChild(point);
        
        borderToRevert.style.border = "0";

        borderToColour = document.querySelector(`#${humanSelection}`);
        borderToColour.style.border = "10px solid red"

        textBox.textContent = "YOU LOSE!";
        textBox.style.color ="red";

    } else if (result == -1) {
        borderToRevert.style = "0";
        
        borderToColour = document.querySelector(`#${humanSelection}`);
        borderToColour.style.border = "10px solid yellow";

        textBox.textContent = "TIE...";
        textBox.style.color = "yellow";

    }
    borderToRevert = borderToColour;
    

    /* change div or image for enemy according to their selection */

    cpuChoice.textContent = computerSelection;
    humanSelection = 0;

        /* consider adding a default case, like return 0. for now, unnecessary */
    
    if (computerScore >= 5) {
        endGame();
        textBox.textContent = "HAHA YOU SUCK!";
    }

    if (humanScore >= 5) {
        endGame();
        textBox.textContent = "GG! YOU'RE PRETTY GOOD!"
    }
};


function startGame() { 

    choices.forEach((choice) => {
        choice.addEventListener("click", playGame);
    });
}

function endGame() {
    choices.forEach((choice) => {
        choice.removeEventListener("click", playGame);
    });    

    let finalScore = document.createElement("div");
    finalScore.setAttribute("class", "finalscore");
    finalScore.textContent = `${humanScore} : ${computerScore}`;
    
    let scoreboard = document.querySelector(".scoreboard");
    scoreboard.insertBefore(finalScore, computerScoreboard);
}


/* is paramter event and e the same thing?*/

startGame();