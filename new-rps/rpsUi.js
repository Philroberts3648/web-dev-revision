const container = document.querySelector('#container');
let display = document.getElementById('display');
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');

let playerScore = 0;
let computerScore = 0;

const rockKey = () => {
    let playerSelection = 'rock';
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    if(playRound === 'The game ties!') {
        return 'game ties, play another round!';
    }

    if(playRound === 'computer wins') {
        computerScore++;
        return `computer score: ${computerScore}`;
    }

    if(playRound === 'player wins') {
        playerScore++;
        return `player score: ${computerScore}`;
    }
    
    display.innerHTML = playRound(playerSelection, computerSelection);
}

const paperKey = () => {
    let playerSelection = 'paper';
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    if(playRound === 'The game ties!') {
        return 'game ties, play another round!';
    }

    if(playRound === 'computer wins') {
        computerScore++;
        return `computer score: ${computerScore}`;
    }

    if(playRound === 'player wins') {
        playerScore++;
        return `player score: ${computerScore}`;
    }
    
    display.innerHTML = playRound(playerSelection, computerSelection);
}

const scissorsKey = () => {
    let playerSelection = 'scissors';
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    if(playRound === 'The game ties!') {
        return 'game ties, play another round!';
    }

    if(playRound === 'computer wins') {
        computerScore++;
        return `computer score: ${computerScore}`;
    }

    if(playRound === 'player wins') {
        playerScore++;
        return `player score: ${computerScore}`;
    }

    display.innerHTML = playRound(playerSelection, computerSelection);

    
}

rock.addEventListener('click', rockKey);
paper.addEventListener('click', paperKey);
scissors.addEventListener('click', scissorsKey);

