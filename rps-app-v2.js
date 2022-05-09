//Your game is going to play against the computer, 
//so begin with a function called computerPlay that
//will randomly return either ‘Rock’, ‘Paper’ or 
//‘Scissors’. We’ll use this function in the game 
//to make the computer’s play. Tip: use the console 
//to make sure this is returning the expected output 
//before moving to the next step!

//Rock, Paper, Scissors values (both capitalised and uncapitalised).

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

//let playerSelection = prompt("Rock, paper, or scissors?");
let playerSelection = "rock";

//Run computerPlay and store that value (2)

//const computerSelection = computerPlay();

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

function playRound(playerSelection, computerSelection) {
    let playerSelectionLC = playerSelection.toLowerCase();
    if ((playerSelectionLC === "rock") && (computerSelection === "scissors")) {
        return ("You win! Rock beats scissors.");
    } else if ((playerSelectionLC === "scissors") && (computerSelection === "paper")) {
        return ("You win! Scissors beats paper.");
    } else if ((playerSelectionLC === "paper") && (computerSelection === "rock")) {
        return ("You win! Paper beats rock.");
    } else if ((playerSelectionLC === "paper") && (computerSelection === "scissors")) {
        return ("You lose! Paper is beaten by scissors.");
    } else if ((playerSelectionLC === "rock") && (computerSelection === "paper")) {
        return ("You lose! Rock is beaten by paper.");
    } else if ((playerSelectionLC === "scissors") && (computerSelection === "rock")) {
        return ("You lose! Scissors are beaten by rock.");
    } else if ((playerSelectionLC === "paper") && (computerSelection === "paper")) {
        return ("Paper versus paper is a draw...");
    } else if ((playerSelectionLC === "rock") && (computerSelection === "rock")) {
        return ("Rock versus rock is a draw...");
    } else if ((playerSelectionLC === "scissors") && (computerSelection === "scissors")) {
        return ("Scissors versus scissors is a draw");
    } else {
        return ("What?")
    }
}

//Write a NEW function called game(). 

//Call the playRound function inside of this function

//Play a 5 round game using a loop

//Keep score 

//Report a winner or loser at the end.

function game() {
    let consolelog1 = playRound(playerSelection, computerSelection);
    console.log(consolelog1);
    let consolelog2 = playRound(playerSelection, computerSelection);
    console.log(consolelog2);
    let consolelog3 = playRound(playerSelection, computerSelection);
    console.log(consolelog3);
    let consolelog4 = playRound(playerSelection, computerSelection);
    console.log(consolelog4);
    let consolelog5 = playRound(playerSelection, computerSelection);
    console.log(consolelog5);
}