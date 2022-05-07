//Your game is going to play against the computer, 
//so begin with a function called computerPlay that
//will randomly return either ‘Rock’, ‘Paper’ or 
//‘Scissors’. We’ll use this function in the game 
//to make the computer’s play. Tip: use the console 
//to make sure this is returning the expected output 
//before moving to the next step!

//Rock, Paper, Scissors values (both capitalised and uncapitalised).

const rock = "Rock";
const rock2 = "rock";
const scissors = "Scissors";
const scissors2 = "scissors";
const paper = "Paper";
const paper2 = "paper";

//A function called ComputerPlay which randomly returns either Rock, Paper or Scissors.

function computerPlay() {
    let rps = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * rps.length);
    return (random, rps[random]);
}

//Write a function that plays a single round of Rock Paper Scissors. The function should
//take two parameters - the playerSelection and computerSelection - and then return a
//string that declares the winner of the round like so: "You Lose! Paper beats Rock"

//Ask for player input (1)

let playerInput = prompt("Rock, paper, or scissors?");

//Make player input lowercase

let playerInputLC = playerInput.toLowerCase();

//Run computerPlay and store that value (2)

let computerInput = computerPlay()

//Create the following potential outputs with a if/switch/tertary operator (first value 1, second value 2):
//◦ If Rock > Scissors
//◦ If Scissors > Paper
//◦ If Paper > Rock
//◦ If Paper > Scissors
//◦ If Rock > Paper
//◦ If Scissors > Rock
//◦ If Rock > Rock
//◦ If Paper > Paper
//◦ If Scissors > Scissors

if ((playerInputLC === "rock") && (computerInput === "scissors")) {
    alert("You win! Rock beats scissors.");
} else if ((playerInputLC === "scissors") && (computerInput === "paper")) {
    alert("You win! Scissors beats paper.");
} else if ((playerInputLC === "paper") && (computerInput === "rock")) {
    alert("You win! Paper beats pock.");
} else if ((playerInputLC === "paper") && (computerInput === "scissors")) {
    alert("You lose! Scissors beats paper.");
} else if ((playerInputLC === "rock") && (computerInput === "paper")) {
    alert("You lose! Paper beats rock.");
} else if ((playerInputLC === "scissors") && (computerInput === "rock")) {
    alert("You lose! Rock beats scissors.");
} else if ((playerInputLC === "paper") && (computerInput === "paper")) {
    alert("Paper versus paper is a draw...");
} else if ((playerInputLC === "rock") && (computerInput === "rock")) {
    alert("Rock versus rock is a draw...");
} else if ((playerInputLC === "scissors") && (computerInput === "scissors")) {
    alert("Scissors versus scissors is a draw");
} else {
    alert("What?")
}


//Return a string that declares a winner of the round dependant on the relevant condition:
//◦ If Rock > Scissors = "You win! Rock beats Scissors."
//◦ If Scissors > Paper = "You win! Scissors beats Paper."
//◦ If Paper > Rock = "You win! Paper beats Rock."
//◦ If Paper > Scissors = "You lose! Scissors beats Paper."
//◦ If Rock > Paper = "You lose! Paper beats Rock."
//◦ If Scissors > Rock = "You lose! Rock beats Scissors."
//◦ If Rock > Rock = "Rock versus rock is a draw...”
//◦ If Paper > Paper = “Paper versus paper is a draw...”
//◦ If Scissors > Scissors = “Scissors versus scissors is a draw...”



//A separate function will then store the total number of times Player or Computer win.