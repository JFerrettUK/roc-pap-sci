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
//let playerSelection = "rock";

//Run computerPlay and store that value (2)

//let computerSelection = computerPlay();

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

function playRound() {
    function titleCase(){
        return playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
      }

    let playerSelection = prompt("Rock, paper, or scissors?");
    let playerSelection2 = titleCase(playerSelection);
    let computerSelection = computerPlay();

    let playerWinRound = ("You win! " + playerSelection2 + " beats " + computerSelection + ".");
    let computerWinRound = ("You lose! " + playerSelection2 + " is beaten by " + computerSelection + ".");
    let draw = "Draw!";

    if (((playerSelection2 === "Rock") && (computerSelection === "scissors")) 
        || ((playerSelection2 === "Scissors") && (computerSelection === "paper"))
        || ((playerSelection2 === "Paper") && (computerSelection === "rock"))) {
        return playerWinRound;
    } else if (((playerSelection2 === "Paper") && (computerSelection === "scissors"))
        || ((playerSelection2 === "Rock") && (computerSelection === "paper")) 
        || ((playerSelection2 === "Scissors") && (computerSelection === "rock"))) {
        return computerWinRound; 
    } else if (((playerSelection2 === "Paper") && (computerSelection === "paper"))
        || ((playerSelection2 === "Rock") && (computerSelection === "rock"))
        || ((playerSelection2 === "Scissors") && (computerSelection === "scissors"))) {
        return draw; 
    } else {
        return ("What?")
    }
}


//Write a NEW function called game(). 

//Call the playRound function inside of this function

//Play a 5 round game using a loop

//Keep score 

function game(playRound) {
    let playerWin = "Player wins the game! Congratulations!";
    let computerWin = "Computer wins the game! Congratulations!";
    
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
     }
}

//Report a winner or loser at the end.