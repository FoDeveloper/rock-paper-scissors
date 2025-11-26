// Testing JS is linked to the HTML file //

// console.log("Hello World");

// Create a function getComputerChoice that randomly returns one of the following string variables: rock, paper, scissors. //
// A random output dictates which of the string variables is displayed. //
// The random output is a number variable, so assigning each of the three variable to a third of the output range could achieve our goal.//

//function getComputerChoice() {
//  return Math.floor(Math.random() * 3);
// }

let getComputerChoice = () => {
    return Math.floor(Math.random() * 3) == 0 ?  "Rock" : Math.floor(Math.random() * 3) == 1 ?  "Paper" : "Scissors";}

console.log(getComputerChoice());

//function getHumanChoice() {
//    prompt("Rock, Paper, or Scissors?");
//}

let getHumanChoice = () => prompt("Rock, Paper, or Scissors?");

console.log(getHumanChoice());