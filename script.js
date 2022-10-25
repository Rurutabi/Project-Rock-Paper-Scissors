const sign = ["Rock", "Paper", "Scissors"]

function getComputerChoice(){
    const random = sign[Math.floor(Math.random()*sign.length)]
    return random;
}
function playRound(playerSelection, computerSelection){
    //Player Win Condition
   if(playerSelection == "Rock" && computerSelection == "Scissors"){
    return "You Win! Rock beats Scissors"
   } else if(playerSelection == "Paper" && computerSelection == "Rock"){
    return "You Win! Paper beats Rock"
   } else if(playerSelection == "Scissors" && computerSelection == "Paper"){
    return "You Win! Scissors beats Paper"
    //Computer Win condition
    }else if(computerSelection == "Rock" && playerSelection == "Scissors"){
    return "You lose! Computer choose Scissors"
    } else if(computerSelection == "Paper" && playerSelection == "Rock"){
    return "You lose! Computer choose Rock"
    } else if(computerSelection == "Scissors" && playerSelection == "Paper"){
     return "You lose! Computer choose  Paper"
    //Tie
    }else if(computerSelection == "Rock" && playerSelection == "Rock"){
    return "Both pick Rock, Nobody win!"
    } else if(computerSelection == "Paper" && playerSelection == "Paper"){
    return "Both pick Paper, Nobody win!"
    } else if(computerSelection == "Scissors" && playerSelection == "Scissors"){
     return "Both pick Scissors, Nobody win!"
    }
     else
     return "Something is wrong"
}

const playerSelection = "Rock"
const ComputerSelection = getComputerChoice()
console.log(playRound(playerSelection, ComputerSelection))