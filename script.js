const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const choices = ['rock', 'paper', 'scissor'];
let resultText = document.getElementById('result');
let winner = document.getElementById('winner');
let userScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;

// function to get randomized computer choice once it is called
function getComputerChoice() {
    computerChoice = choices[Math.floor(Math.random(choices.length) * 3)];
    return computerChoice;
}

function rockPaperScissor(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        resultText.innerText = `It's a tie!`;
    } else if (playerChoice === 'rock' && computerChoice === 'scissor') {
        resultText.innerText = `${playerChoice} beats ${computerChoice}`
        userScore += 1;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        resultText.innerText = `${playerChoice} beats ${computerChoice}`
        userScore += 1;
    } else if (playerChoice === 'scissor' && computerChoice === 'paper') {
        resultText.innerText = `${playerChoice} beats ${computerChoice}`
        userScore += 1;
    } else {
        resultText.innerText = `The computer selected ${computerChoice} which beats your selection of ${playerChoice}`
        computerScore += 1;
    }
}

function whoWon() {
    if (userScore >= 3) {
        winner.innerText = `You have beat the computer ${userScore} to ${computerScore}!`
    } else if (computerScore >= 3) {
        winner.innerText = `The computer won ${computerScore} to ${userScore}!`
    }
}

rock.addEventListener('click', () => { 
    playerChoice = rock.value;
    getComputerChoice();
    document.getElementById('ready-section').style.display = 'block';
    rockPaperScissor(playerChoice, computerChoice)
    whoWon()
});
paper.addEventListener('click', () => {
    playerChoice = paper.value
    getComputerChoice();
    rockPaperScissor(playerChoice, computerChoice)
    whoWon()
});
scissor.addEventListener('click', () => {
    playerChoice = scissor.value
    getComputerChoice();
    rockPaperScissor(playerChoice, computerChoice)
    whoWon()
});




