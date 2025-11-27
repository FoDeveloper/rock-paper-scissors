let getComputerChoice = () => {
    return Math.floor(Math.random() * 3) === 0 ?  "rock" : Math.floor(Math.random() * 3) === 1 ?  "paper" : "scissors";}

let getHumanChoice = () => prompt("Rock, Paper, or Scissors?");

let playGame = () => {
let humanScore = 0;
let computerScore = 0;

let playRound = (humanChoice, computerChoice) => {
    let humanNormalized = humanChoice.toLowerCase();
    let result;
    let message;
    if ((humanNormalized === "rock" && computerChoice === "paper") || (humanNormalized === "scissors" && computerChoice === "rock") || (humanNormalized === "paper" && computerChoice === "scissors")) {
        result = "Loser!";
        message = `${result} ${computerChoice.toUpperCase()} beats ${humanNormalized.toUpperCase()}`;}
    
    else if (humanNormalized === computerChoice) {
        result = `Tie!`
        message = `${result} ${humanNormalized.toUpperCase()} is equal to ${computerChoice.toUpperCase()}`;
    }

    else {
        result = "Winner!";
        message = `${result} ${humanNormalized.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
    }
    return {
        result,
        message};}

for (let i = 0; i <5; i++) {
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const round = playRound(humanSelection,computerSelection);
if (round.result === "Loser!"){
    ++computerScore
}
else if (round.result === "Winner!") {
    ++humanScore}
alert(`CPU Choice: ${computerSelection}, Human Choice: ${humanSelection}. 
${round.message}. 
SCORE: Human:${humanScore} CPU:${computerScore}`);
}

if(humanScore > computerScore) {
    alert (`Human wins ${humanScore} - ${computerScore}`)
}
else if (humanScore === computerScore) {
    alert ('Draw.')
}
else {alert (`CPU wins ${computerScore} - ${humanScore}`)}
}

(playGame());