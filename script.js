function computerPlay () { // This function allows the computer to randomly choose rock, paper, or scissors.
    let pick = Math.floor(Math.random() * 3);
    if ( pick === 0) {
        return("rock")
        } else if (pick === 1) {
            return("paper")
        } else { 
            return("scissors")
        }
  }

  let computerScore = 0;// Keeps track of computer wins.
  let playerScore = 0; // Keeps track of player wins.
  
  
 function playRound (playerHand, computerHand) { // This function plays one round of Rock, Paper, Scissors. The result of the round is returned and scores tallied.
     computerHand = computerPlay();
    if (playerHand === "rock" && computerHand === "rock") {
        computerScore = computerScore + 0;
        playerScore =  playerScore + 0;
        container.textContent =`Tied. You and the computer both played rock. Computer: ${computerScore} Player: ${playerScore}`; 
     }  else if (playerHand === "rock" && computerHand === "paper") {
        computerScore = computerScore + 1;
        playerScore = playerScore + 0; 
        container.textContent =`You lose. Paper beats rock. Computer: ${computerScore} Player: ${playerScore}`;
     }  else if (playerHand ==="rock" && computerHand === "scissors") {
        computerScore = computerScore + 0;
        playerScore = playerScore + 1;
        container.textContent =`You win! Rock beats scissors. Computer: ${computerScore} Player: ${playerScore}`;
     }  else if (playerHand ==="paper" && computerHand === "rock") {
        computerScore = computerScore + 0;
        playerScore = playerScore + 1;
        container.textContent = `You win! Paper beats rock. Computer: ${computerScore} Player: ${playerScore}`;
     }  else if (playerHand === "paper" && computerHand === "paper") {
        computerScore = computerScore + 0;
        playerScore =  playerScore + 0;
        container.textContent =`Tied. You and the computer both played paper. Computer: ${computerScore} Player: ${playerScore}`;
     }  else if (playerHand === "paper" && computerHand === "scissors") {
        computerScore = computerScore + 1;
        playerScore = playerScore + 0; 
        container.textContent =`You lose. Scissors beats Paper. Computer: ${computerScore} Player: ${playerScore}`;
     }  else if (playerHand === "scissors" && computerHand === "rock") {
        computerScore = computerScore + 1;
        playerScore = playerScore + 0; 
        container.textContent = `You lose. Rock beats scissors. Computer: ${computerScore} Player: ${playerScore}`;
     }  else if (playerHand === "scissors" && computerHand === "paper") {
        computerScore = computerScore + 0;
        playerScore = playerScore + 1;
        container.textContent = `You win! Scissors beats paper. Computer: ${computerScore} Player: ${playerScore}`;
     }  else if (playerHand === "scissors" && computerHand === "scissors") {
        computerScore = computerScore + 0;
        playerScore =  playerScore + 0;
        container.textContent = `Tied. You and the computer both played scissors. Computer: ${computerScore} Player: ${playerScore}`;
     }  
    }

    const btn1 = document.querySelector ('#rock');
    btn1.addEventListener ('click', () => {
        game("rock");
    })
    const btn2 = document.querySelector ('#paper');
    btn2.addEventListener ('click', () => {
        game("paper");
    })
    const btn3 = document.querySelector ('#scissors');
    btn3.addEventListener ('click', () => {
        game("scissors");
    })

    const container = document.querySelector ('#container');
     
function game(player) {
    playRound (player);
    if (computerScore === 5) {
        container.textContent = 'You lose.';
        computerScore = 0;
        playerScore = 0;
    } else if (playerScore === 5) {
        container.textContent = 'You win!';
        computerScore = 0;
        playerScore = 0;
    }
}

 /*function game() {// This function plays five rounds of Rock, Paper, Scissors. Results of one round are displayed after each round and the final score is displayed after five rounds.
     for (let i = 0; i < 5; i++) {
        alert (playRound());
     }
     alert ("Computer Score: " + computerScore + "\nPlayer Score: " + playerScore);
    } */

