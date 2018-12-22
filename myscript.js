// ROCK PAPER SCIRROS CODE //
var playerScore = 0;
var computerScore = 0;
var roundNum = 5;
var playerOutput = document.getElementById('player');
var computerOutput = document.getElementById('computer');
var messageOutput = document.getElementById('message');
var finalMessage = document.querySelector('.finalMessage');



function computerPlay()
{
  //function returns random 'Rock','Paper',or 'Sicssors' for Computer
  var randomNum = Math.floor(Math.random() * 3) + 1;
  switch (randomNum)
  {
    case 1:
      return "ROCK";
      break;

    case 2:
      return "PAPER";
      break;

    case 3:
      return "SCISSORS";
      break;

    default:
      return "Something went wrong";
    }
}

//Game checks whos winning
function playRound(playerSelection, computerSelection)
  {
    switch(playerSelection)
    {
      case 'ROCK':
        if(computerSelection == 'PAPER'){
          computerScore+=1;
          return 'Paper Wins!';
        }
        else if(computerSelection == 'ROCK'){
          return 'It\'s a TIE!';
        }
        else if(computerSelection == 'SCISSORS'){
          playerScore+=1;
          return 'Rock Wins!';
        }
        case 'PAPER':
          if(computerSelection == 'PAPER'){
            return 'It\'s a TIE!';
          }
          else if(computerSelection == 'ROCK'){
            playerScore+=1;
            return 'Paper Wins!';
          }
          else if(computerSelection == 'SCISSORS'){
            computerScore+=1;
            return 'Scissors Wins!';
          }

        case 'SCISSORS':
          if(computerSelection == 'SCISSORS'){
            return 'It\'s a TIE!';
          }
          else if(computerSelection == 'ROCK'){
            computerScore+=1;
            return 'Rock Wins!';
          }
          else if(computerSelection == 'PAPER'){
            playerScore+=1;
            return 'Scissors Wins!';
          }

          default:
            return 'Boooo! Play by the rules!';
    }
  }

function game(){
  var computerSelection = computerPlay();


  if(checkWin()){
    button.removeEventListener('click',game);
  }
  else {
    messageOutput.innerHTML = playRound(playerSelection,computerSelection);
      checkWin();
  }
  playerOutput.innerHTML = playerScore;
  computerOutput.innerHTML = computerScore;
}

function checkWin(){

  if (playerScore === roundNum || computerScore === roundNum){
    if (computerScore === roundNum){
      finalMessage.innerHTML = 'You Lose Buddy!';
    }
    else finalMessage.innerHTML = 'You Won My Dude!';
    return true;
  }
  else {
    return false;
  }
}


// function finalscore(){
//
//   var finalMessage = document.querySelector('.finalMessage');
//
//
//   if(playerScore > computerScore){
//     finalMessage.innerHTML = 'You Won!';
//   }
//   else if(playerScore < computerScore){
//     finalMessage.innerHTML = 'You Lose!';
//   }
//   else{
//     finalMessage.innerHTML = 'It\'s a Tie!';
//   }
//
// }




// Event Listners and stuff //
//assign  playerSelection to Whatever button press

//Plays game when Button's are pressed.
const btns = document.querySelectorAll('button.btn');
btns.forEach((button) =>{
  button.addEventListener('click', () => {
    playerSelection = button.id.toUpperCase();
  });
  button.addEventListener('click',game);
    console.log(button);
});

const resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener('click',(e) =>{
  computerScore = 0;
  playerScore = 0;
  playerOutput.innerHTML = playerScore;
  computerOutput.innerHTML = computerScore;
  messageOutput.innerHTML = "Again?";
  finalMessage.innerHTML = "";

});
