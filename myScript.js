//let playerSelection;
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");

function getComputerChoice () {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = "";
    if (playerSelection === computerSelection) {
        result = "You Tied! " + playerSelection + " ties " + computerSelection
    } else if ((playerSelection === "rock" & computerSelection === "scissor") || 
               (playerSelection === "paper" & computerSelection === "rock") || 
               (playerSelection === "scissor" & computerSelection === "paper")) {
        playerScore++;
        result = "You Won! " + playerSelection + " beats " + computerSelection;
    } else {
        computerScore++;
        result = "You Lost! " + computerSelection + " beats " + playerSelection;
    }
        result += "\n Player Score: " + playerScore + "\n Computer score: " + computerScore;

        if (playerScore >= 5) {
            result += "\n Congrats! You won! Reload the page to play again.";
            disableButtons();
        } else if (computerScore >= 5) {
            result += "\n I won! Reload the page to play again.";
            disableButtons();
        }

    document.getElementById('result').innerText = result;
    return
}

buttons.forEach(button => {
    button.addEventListener('click', function(){
                playRound(button.id)
    })
})

