const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3);
    if(randomNum === 0) {
        return 'rock';
    } else if(randomNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
} 

// console.log(getComputerChoice());

const playRound = (playerSelection, computerSelection) => {
    if(playerSelection === computerSelection) {
        return 'The game ties!';
    }

    if(playerSelection === 'rock') {
        if(computerSelection === 'paper') {
            return 'computer wins';
        } else {
            return 'player won';
        }  
    }

    if(playerSelection === 'paper') {
        if(computerSelection === 'scissors') {
            return 'computer wins';
        } else {
            return 'player won';
        }
    }

    if(playerSelection === 'scissors') {
        if(computerSelection === 'rock') {
            return 'computer wins';
        } else {
            return 'player won';
        }
    }

    
}
