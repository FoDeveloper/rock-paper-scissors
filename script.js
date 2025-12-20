let getComputerChoice = () => {
    let random = (Math.random() * 3);
    return Math.floor(random) === 0 ?  "rock" : Math.floor(random) === 1 ?  "paper" : "scissors";}
let humanScore = 0;
let computerScore = 0;

let playRound = (humanChoice, computerChoice) => {
    let result;
    let humanNormalized = humanChoice.toLowerCase();
    if ((humanNormalized === "rock" && computerChoice === "paper") || (humanNormalized === "scissors" && computerChoice === "rock") || (humanNormalized === "paper" && computerChoice === "scissors")) {
        result = "Loser!";}
    else if (humanNormalized === computerChoice) {
        result = `Tie!`;}
    else {
        result = "Winner!";}
        return(result);}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
       const humanChoice = (button.id);
       playRound(humanChoice, getComputerChoice());
    }); 
});

