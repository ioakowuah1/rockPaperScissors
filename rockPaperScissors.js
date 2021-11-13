const getUserChoice = function (userInput){
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" ) {
      return userInput;
    } else if(userInput === 'bomb'){
      return userInput;
    } else {
      console.log("Error, Please type rock, paper or scissors");
    }
  }
  
  console.log(getUserChoice('rock'))
  
  function getComputerChoice(){
    randomNumber= Math.floor(Math.random()*3);
    switch (randomNumber){
      case 0:
      return 'rock';
      case 1:
      return 'paper';
      case 2:
      return 'scissors'
    }
  }
  
  console.log(getComputerChoice())
  
  function determineWinner(userChoice,computerChoice){
    if (userChoice === 'bomb'){
      console.log('User has won!');
    }
    if (userChoice === computerChoice){
      return 'Game is a tie!';
    }
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return 'Computer has won!';
      } else{
        console.log('User has won!')
      }
    } if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'The computer won!';
    } else {
      return "You won!"
    }
  } if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return "The computer won!"
    } else {
      return 'You won!'
    }
  }
  } 
  
  console.log(determineWinner('paper','scissors'));
  // prints something like 'The computer won!
  
  console.log(determineWinner('paper','paper'));
  // prints something like 'Game is a tie!'
  
  console.log(determineWinner('paper','rock'));
  //prints something like 'The user won!'
  
  function playGame(){
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice,computerChoice))
  };
  
  playGame();
  
  
  
  