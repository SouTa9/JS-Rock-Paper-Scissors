let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    let humanChoice = prompt("What's your choice?");
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else {
        console.log("Please enter only allowed values");
        return getHumanChoice();
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("Human won!");
        humanScore++;
    } else {
        console.log("Computer won!");
        computerScore++;
    }
}



function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Final Score: Human ${humanScore}, Computer ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer won the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();