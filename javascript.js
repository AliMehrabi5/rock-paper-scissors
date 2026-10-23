
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const choice = prompt("Choose rock, paper, or scissors:");

  return choice;
}


function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return;
  }

  
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(
      `You win! ${humanChoice} beats ${computerChoice}`
    );
    humanScore++;
  } else {
    console.log(
      `You lose! ${computerChoice} beats ${humanChoice}`
    );
    computerScore++;
  }
}

}


playRound("rock", "scissors");
console.log("Human:", humanScore);
console.log("Computer:", computerScore);


console.log(getComputerChoice());
console.log(getHumanChoice());


