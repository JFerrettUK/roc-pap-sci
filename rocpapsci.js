
//A function called ComputerPlay which randomly returns either Rock, Paper or Scissors.

function computerPlay() {
    let rps = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * rps.length);
    return (random, rps[random]);
} 

//Write a function that plays a single round of Rock Paper Scissors. The function should
//take two parameters - the playerSelection and computerSelection - and then return a
//string that declares the winner of the round.

let playerScore = 0
let computerScore = 0

function playRound() {

//Rock, Paper, Scissors values (both capitalised and uncapitalised).

    function titleCase(){
        return playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
      }

    let playerSelection = prompt("Rock, paper, or scissors?");
    let playerSelection2 = titleCase(playerSelection);
    let computerSelection = computerPlay();

    let playerWinRound = ("You win! " + playerSelection2 + " beats " + computerSelection + ".");
    let computerWinRound = ("You lose! " + playerSelection2 + " is beaten by " + computerSelection + ".");
    let draw = ("It's a draw! " + playerSelection2 + " versus " + computerSelection + "...");

    if (((playerSelection2 === "Rock") && (computerSelection === "scissors")) 
        || ((playerSelection2 === "Scissors") && (computerSelection === "paper"))
        || ((playerSelection2 === "Paper") && (computerSelection === "rock"))) {
        playerScore ++;  
        console.log(playerWinRound);
    } else if (((playerSelection2 === "Paper") && (computerSelection === "scissors"))
        || ((playerSelection2 === "Rock") && (computerSelection === "paper")) 
        || ((playerSelection2 === "Scissors") && (computerSelection === "rock"))) {
        computerScore ++;
        console.log(computerWinRound);
    } else if (((playerSelection2 === "Paper") && (computerSelection === "paper"))
        || ((playerSelection2 === "Rock") && (computerSelection === "rock"))
        || ((playerSelection2 === "Scissors") && (computerSelection === "scissors"))) {
        console.log(draw);
    } else {
        return ("What?")
    }
}

//Write a NEW function called game(). 

//Call the playRound function inside of this function.

//scoreCount will call at the end of the loop, declaring whether playerScore or computerScore has the greater number.

function game(playRound) {
    
//Play a 5 round game using a loop.

    console.log("Time for a 5 round game of Rock, Paper, Scissors...")

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    //Keep score.
    //Report a winner or loser at the end. 

    let playerWinGame = ("You scored " + playerScore + " and the computer scored " + computerScore + ". You win! Congratulations.");
    let computerWinGame = ("You scored " + playerScore + " and the computer scored " + computerScore + ". You lose! Better luck next time.");
    let drawGame = ("You scored " + playerScore + " and the computer scored " + computerScore + ". It's a draw!")
    
    if (playerScore > computerScore) {
        console.log(playerWinGame);
    } else if (playerScore < computerScore) {
        console.log(computerWinGame)
    } else {
        console.log(drawGame)
    }
}


