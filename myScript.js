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
        return "You Won! " + playerSelection + " beats " + computerSelection
    } else {
        return "You Lost! " + computerSelection + " beats " + playerSelection
    }

}

const playerSelection =  window.prompt("What do you pick? Rock, Paper or Scissor?");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));