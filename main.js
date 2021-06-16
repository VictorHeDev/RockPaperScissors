function computerPlay() {
    let chance = Math.floor(Math.random() * 100);
    if (chance < 33) {
      return 'r';
    } else if (chance < 66) {
      return 'p';
    } else {
      return 's'
    }
  }
  
  function playRound(playerSelection, computerSelection) {
    // return a string that declares the winner of the round
    playerSelection = prompt("Please type 'rock', 'paper', or 'scissors': ")
  
    computerSelection = computerPlay();
    if (computerSelection === playerSelection[0].toLowerCase()) {
      console.log('Tie!');
    } else if ((computerSelection === 'r' && playerSelection[0] === 's') ||
      (computerSelection === 'p' && playerSelection[0] === 'r') ||
      (computerSelection === 's' && playerSelection[0] === 'p')) {
      console.log('Computer wins!');
    } else {
      console.log('Human wins!');
    }
  }
  
  function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
  }
  
  game();