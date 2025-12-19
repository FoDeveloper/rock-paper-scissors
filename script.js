let getComputerChoice = () => {
    return Math.floor(Math.random() * 3) === 0 ?  "rock" : Math.floor(Math.random() * 3) === 1 ?  "paper" : "scissors";}

let playRound = (humanChoice, computerChoice) => {
    let humanNormalized = humanChoice.toLowerCase();
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

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", playRound);

paper.addEventListener("click", playRound);

scissors.addEventListener("click", playRound);