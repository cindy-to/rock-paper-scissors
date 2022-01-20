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
    let playerSelection = prompt("What will you play?", "");
    playerHand = playerSelection.toLowerCase();
     computerHand = computerPlay();
    if (playerHand === "rock" && computerHand === "rock") {
        computerScore = computerScore + 0;
        playerScore =  playerScore + 0;
        return("Tied. You and the computer both played rock."); 
     }  else if (playerHand === "rock" && computerHand === "paper") {
        computerScore = computerScore + 1;
        playerScore = playerScore + 0; 
        return("You lose. Paper beats rock.");
     }  else if (playerHand ==="rock" && computerHand === "scissors") {
        computerScore = computerScore + 0;
        playerScore = playerScore + 1;
        return("You win! Rock beats scissors.");
     }  else if (playerHand ==="paper" && computerHand === "rock") {
        computerScore = computerScore + 0;
        playerScore = playerScore + 1;
         return("You win! Paper beats rock");
     }  else if (playerHand === "paper" && computerHand === "paper") {
        computerScore = computerScore + 0;
        playerScore =  playerScore + 0;
         return("Tied. You and the computer both played paper.");
     }  else if (playerHand === "paper" && computerHand === "scissors") {
        computerScore = computerScore + 1;
        playerScore = playerScore + 0; 
         return ("You lose. Scissors beats Paper.");
     }  else if (playerHand === "scissors" && computerHand === "rock") {
        computerScore = computerScore + 1;
        playerScore = playerScore + 0; 
         return("You lose. Rock beats scissors.");
     }  else if (playerHand === "scissors" && computerHand === "paper") {
        computerScore = computerScore + 0;
        playerScore = playerScore + 1;
         return("You win! Scissors beats paper.");
     }  else if (playerHand === "scissors" && computerHand === "scissors") {
        computerScore = computerScore + 0;
        playerScore =  playerScore + 0;
         return("Tied. You and the computer both played scissors.");
     }  else {
         return ("invalid entry");
     } 
    }

 function game() {// This function plays five rounds of Rock, Paper, Scissors. Results of one round are displayed after each round and the final score is displayed after five rounds.
     for (let i = 0; i < 5; i++) {
        alert (playRound());
     }
     alert ("Computer Score: " + computerScore + "\nPlayer Score: " + playerScore);
    }

