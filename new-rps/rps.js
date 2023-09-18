const container = document.querySelector('#container');
let display = document.getElementById('display');
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');

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
        return 'The game ties';
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

// let playerSelection = 'rock';
// let computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection))


const rockKey = () => {
    let playerSelection = 'rock';
    let computerSelection = getComputerChoice();
    display.innerHTML = playRound(playerSelection, computerSelection);
}

const paperKey = () => {
    let playerSelection = 'paper';
    let computerSelection = getComputerChoice();
    display.innerHTML = playRound(playerSelection, computerSelection);
}

const scissorsKey = () => {
    let playerSelection = 'scissors';
    let computerSelection = getComputerChoice();
    display.innerHTML = playRound(playerSelection, computerSelection);
}

rock.addEventListener('click', rockKey);
paper.addEventListener('click', paperKey);
scissors.addEventListener('click', scissorsKey);

// let playerSelection = 'Rock';
// playerSelection = playerSelection.toLowerCase();
// let computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection), playerSelection, computerSelection);


// const game = () => {
//     let playerCount = 0;
//     let computerCount = 0;
//     let playerSelection;
//     playerSelection = playerSelection.toLowerCase();
//     let computerSelection = getComputerChoice();
//     playRound(playerSelection, computerSelection);
//     console.log(playRound(playerSelection, computerSelection), playerSelection, computerSelection);
    
//     if(playRound === 'The game ties') {
//         console.log('the game ties');
//     }
    
//     if(playRound === 'computer wins') {
//         computerCount++;
//         console.log(computerCount);
//          console.log(`computer wins ${computerCount} times!`)
//     }
    
//     if(playRound === 'player won') {
//         playerCount++;
//         console.log(playerCount);
//         console.log(`player wins ${playerCount} times`)
//     }
    
//     console.log(playerCount, computerCount);
    
//     if(computerCount > playerCount) {
//         console.log('computer wins the game!');
//     } else {
//         console.log('Player is the champion!');
//     }


// }



// game();