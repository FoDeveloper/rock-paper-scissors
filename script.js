let getComputerChoice = () => {
    let random = (Math.random() * 3);
    return Math.floor(random) === 0 ?  "rock" : Math.floor(random) === 1 ?  "paper" : "scissors";}

let humanScore = 0;
let computerScore = 0;
let gameOver;

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

const resultDiv = document.createElement("div");
document.body.appendChild(resultDiv);
const scoreDiv = document.createElement("div");
document.body.appendChild(scoreDiv);
const humanWinner = document.createElement("div");
const cpuWinner = document.createElement("div");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (gameOver =="over") {return};
       const humanChoice = (button.id);
       const computerChoice = getComputerChoice();
       let outcome = "";
       const roundResult = playRound(humanChoice, computerChoice);
       if (roundResult === "Winner!") {
        humanScore++;
        outcome = "You!";
       ;}

       else if (roundResult === "Loser!") {
       computerScore++;
       outcome = "CPU!";
       ;}

       else if (roundResult === "Tie!") {
       outcome = "Tie!";}

       resultDiv.textContent = `Round Winner: ${outcome}`;
       scoreDiv.textContent = `Human:${humanScore} - CPU:${computerScore}`;
       
       if (humanScore === 5) {
        gameOver = "over";
       humanWinner.textContent = "You Win!";
       document.body.appendChild(humanWinner);}

       else if (computerScore === 5) {
        gameOver = "over";
        cpuWinner.textContent = "You Lose!";
        document.body.appendChild(cpuWinner);
       }}
    )
  }
)
       