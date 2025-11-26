// Testing JS is linked to the HTML file //

// console.log("Hello World");

// Create a function getComputerChoice that randomly returns one of the following string variables: rock, paper, scissors. //
// A random output dictates which of the string variables is displayed. //
// The random output is a number variable, so assigning each of the three variable to a third of the output range could achieve our goal.//

//function getComputerChoice() {
//  return Math.floor(Math.random() * 3) == 0
// ? "Rock"
// : Math.floor(Math.random() * 3) == 1
// ? "Paper";
// : "Scissors";
// };
let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    return Math.floor(Math.random() * 3) == 0 ?  "rock" : Math.floor(Math.random() * 3) == 1 ?  "paper" : "scissors";}

console.log(getComputerChoice());

//function getHumanChoice() {
//    return prompt("Rock, Paper, or Scissors?");
//}

let getHumanChoice = () => prompt("Rock, Paper, or Scissors?");

console.log(getHumanChoice());

console.log(humanScore);
console.log(computerScore);

// function playRound(humanChoice,computerChoice) {
// return (humanChoice.toLowerCase() == "rock" && computerChoice == "paper") || (humanChoice.toLowerCase() == "scissors" && computerChoice == "rock") || (humanChoice.toLowerCase() == "paper" && computerChoice == "scissors") ? (`You lost! $computerChoice beats $humanChoice.`) : (humanChoice.toLowerCase() == computerChoice) ? (`Tie! Play again`) : ("You Win!")
//}

let playRound = (humanChoice, computerChoice) => {
let humanNormalized = humanChoice.toLowerCase();
return (humanNormalized === "rock" && computerChoice == "paper") || (humanNormalized === "scissors" && computerChoice === "rock") || (humanNormalized === "paper" && computerChoice === "scissors") ? (`You lost! ${computerChoice.toUpperCase()} beats ${humanNormalized.toUpperCase()}`) : (humanNormalized === computerChoice) ? (`Tie! Play again`) : ("You Win!")}