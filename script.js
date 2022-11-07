const sign = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let pcScore = 0;
let score = 0;
let gameRound = 200;

function getComputerChoice() {
  const random = sign[Math.floor(Math.random() * sign.length)];
  return random;
}

function getNextRandom() {
  return getComputerChoice.shift();
}

function playRound(playerSelection, computerSelection) {
  //Player Win Condition
  if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return 1;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return 1;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return 1;
    //Computer Win condition
  } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
    return 2;
  } else if (computerSelection == "Paper" && playerSelection == "Rock") {
    return 2;
  } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
    return 2;
    //Tie
  } else if (computerSelection == "Rock" && playerSelection == "Rock") {
    return 0;
  } else if (computerSelection == "Paper" && playerSelection == "Paper") {
    return 0;
  } else if (computerSelection == "Scissors" && playerSelection == "Scissors") {
    return 0;
  } else return "Something is wrong in playRound Function";
}

function game() {
  for (let i = 0; playerScore < 5 && pcScore < 5; i++) {
    let computerSelection = getComputerChoice();
    let computerSelection2 = getComputerChoice();
    //const playerSelection = prompt("Pick Rock Paper or Scissors");
    let winner = playRound(computerSelection2, computerSelection);
    if (winner === 1) {
      playerScore = playerScore + 1;
      console.log("playerScore score is " + playerScore);
      if (playerScore === 5) {
        console.log("Player win");
      }
    } else if (winner === 2) {
      pcScore = pcScore + 1;
      console.log("Pc score is " + pcScore);
      if (pcScore === 5) {
        console.log("Pc win");
      }
    } else if (winner === 0) {
      console.log("Tie");
    } else {
      console.log("Something went wrong");
    }
  }
}

console.log(game());
