//A function called ComputerPlay which randomly returns either Rock, Paper or Scissors.

function computerPlay() {
    let rps = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * rps.length);
    return (random, rps[random]);
} 

//Take two parameters - the playerSelection and computerSelection - and then return a
//string that declares the winner of the round.

let playerScore = 0
let computerScore = 0
let winner = `Best of 5, yeah? Let's play...`

let score = `Computer : ${computerScore}   |   Player : ${playerScore}`

let scoreboard = document.createElement('P');
scoreboard.classList.add('content');
scoreboard.textContent = score;
resultBox.appendChild(scoreboard);

let announcement = document.createElement('P');
announcement.classList.add('content');
announcement.textContent = winner;
resultBox.appendChild(announcement);

function playRound(playerSelection) {

    let computerSelection = computerPlay();

    let playerWinRound = (playerSelection + " beats " + computerSelection + ". You win this round!");
    let computerWinRound = (playerSelection + " is beaten by " + computerSelection + ". You lose this round!");
    let draw = (playerSelection + " versus " + computerSelection + ". This round is a draw!");

    const resultBox = document.querySelector('#resultBox');
    const rocResult = document.createElement('P');

    if (((playerSelection === "Rock") && (computerSelection === "scissors")) 
        || ((playerSelection === "Scissors") && (computerSelection === "paper"))
        || ((playerSelection === "Paper") && (computerSelection === "rock"))) {
            playerScore ++;
            winner = playerWinRound;
            console.log(winner)
            return (playerScore, winner);
    } else if (((playerSelection === "Paper") && (computerSelection === "scissors"))
        || ((playerSelection === "Rock") && (computerSelection === "paper")) 
        || ((playerSelection === "Scissors") && (computerSelection === "rock"))) {
            computerScore ++;
            winner = computerWinRound;
            console.log(winner)
            return (computerScore, winner);
    } else if (((playerSelection === "Paper") && (computerSelection === "paper"))
        || ((playerSelection === "Rock") && (computerSelection === "rock"))
        || ((playerSelection === "Scissors") && (computerSelection === "scissors"))) {
            winner = draw;
            console.log(winner)
            return winner;
    } else {
        rocResult.classList.add('content');
        rocResult.textContent = "What?";
        resultBox.appendChild(rocResult);
    }
    
    return (computerScore, playerScore, winner);
}


//Write a NEW function called game(). 

//Call the playRound function inside of this function.

//scoreCount will call at the end of the loop, declaring whether playerScore or computerScore has the greater number.

//Play a 5 round game using a loop.

//function game(playRound) {

//    console.log("Time for a 5 round game of Rock, Paper, Scissors...")

//    for (let i = 0; i < 5; i++) {
//    playRound();
//  }

//Keep score.
//Report a winner or loser at the end. 

//    let playerWinGame = ("You scored " + playerScore + " and the computer scored " + computerScore + ". You win! Congratulations.");
//    let computerWinGame = ("You scored " + playerScore + " and the computer scored " + computerScore + ". You lose! Better luck next time.");
//    let drawGame = ("You scored " + playerScore + " and the computer scored " + computerScore + ". It's a draw!")
    
//    if (playerScore > computerScore) {
//       console.log(playerWinGame);
//    } else if (playerScore < computerScore) {
//       console.log(computerWinGame)
//  } else {
//       console.log(drawGame)
//  }
//}


function updateScore (playerScore, computerScore) {
    scoreboard.classList.add('content');
    let score = `Player : ${playerScore}   |   Computer : ${computerScore}`
    scoreboard.textContent = score; 
}

function updateWinner (winner) {
    announcement.classList.add('content');
    if (computerScore === 5) {
        announcement.textContent = "The computer reached 5 points. You lose the game!"; 
        computerScore = 0;
        playerScore = 0;
    } else if (playerScore === 5) {
        announcement.textContent = "You reached 5 points. You win the game!"; 
        computerScore = 0;
        playerScore = 0;
    } else {
    announcement.textContent = winner; 
    }
}

const rocBtn = document.querySelector('.rock');
rocBtn.addEventListener('click', () => {
    playRound("Rock");
    updateScore(playerScore, computerScore)
    updateWinner(winner)
  }); 
  
const papBtn = document.querySelector('.paper');
papBtn.addEventListener('click', () => {
    playRound("Paper");
    updateScore(playerScore, computerScore)
    updateWinner(winner)
  }); 

const sciBtn = document.querySelector('.scissors');
sciBtn.addEventListener('click', () => {
    playRound("Scissors");
    updateScore(playerScore, computerScore)
    updateWinner(winner)
  }); 