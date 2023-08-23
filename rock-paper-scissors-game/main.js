const possibleOutcomes = ['rock', 'paper', 'scissors'];

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput === 'bomb' || userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    return console.log('You have entered an incorrect value!');
  }
}

// console.log(getUserChoice('PAPeR'));

const getComputerChoice = () => {
  let compChoice = Math.floor(Math.random() * possibleOutcomes.length);
  // console.log(compChoice);

  if(compChoice === 0) {
    return possibleOutcomes[0];
  } else if(compChoice === 1) {
    return possibleOutcomes[1];
  } else {
    return possibleOutcomes[2];
  }

  // switch(compChoice) {
  //   case 0: 
  //     console.log(possibleOutcomes[0]);
  //     break;

  //   case 1:
  //     console.log(possibleOutcomes[1]);
  //     break;

  //   case 2: 
  //     console.log(possibleOutcomes[2]);
  //     break;

  //   default: 
  //     console.log('retry!');
  //     break;
  // }
}

// getComputerChoice();

const determineWinner = (userChoice, computerChoice) => { 
  if(userChoice === 'bomb') {
    return 'User wins'
  }
  if(userChoice === computerChoice) {
    return 'The game ties!';
  }

  if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'Computer wins';
    } else {
      return 'User wins';
    }
  }

  if(userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'Computer wins';
    } else {
      return 'User wins';
    }
  }

  if(userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'Computer wins';
    } else {
      return 'User wins'
    }
  }
}

// console.log(determineWinner('paper', 'scissors'));
// console.log(determineWinner('rock', 'scissors'));
// console.log(determineWinner('scissors', 'scissors'));

const playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();



































