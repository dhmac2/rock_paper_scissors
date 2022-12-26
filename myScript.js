let playerSelection;
let computerSelection;
let playerScore;
let computerScore;

function getComputerChoice () {
    value = Math.floor(Math.random()*3)+1;
    console.log(value)
    
    if (value === 3) {
        compChoice = "Scissor";
    } else if (value === 2){
        compChoice = "Paper";
    } else {
        compChoice = "Rock";
    }

    return compChoice
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection === computerSelection) {
        return "You Tied! " + playerSelection + " ties " + computerSelection
    } else if ((playerSelection === "Rock" & computerSelection === "Scissor") || (playerSelection === "Paper" & computerSelection === "Rock")
    || (playerSelection === "Scissor" & computerSelection === "Paper") ){
        playerScore++;
        return "You Won! " + playerSelection + " beats " + computerSelection;
    } else {
        computerScore++;
        return "You Lost! " + computerSelection + " beats " + playerSelection;
    }

}

function scoreChecker(playerScore, computerScore) {
    if (playerScore >= 3) {
        return "Congrats! You won with " + playerScore + " over " + computerScore;
    } else if (computerScore >= 3) {
        return "Better luck next time. The Computer won " + computerScore + " over " + playerScore;
    }
    else {
        return "It's a draw. Try again"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection =  window.prompt("What do you pick? Rock, Paper or Scissor?");
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    console.log(scoreChecker(playerScore, computerScore))
}


// const playerSelection =  window.prompt("What do you pick? Rock, Paper or Scissor?");
// const computerSelection = getComputerChoice();

game()
