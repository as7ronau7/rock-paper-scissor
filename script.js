const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const choices = ['rock', 'paper', 'scissor'];
let resultText = document.getElementById('result');
let winner = document.getElementById('winner');
const userDisplayScore = document.getElementById('your-score');
const computerDisplayScore = document.getElementById('computer-score');
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
        userDisplayScore.textContent = `${userScore}`;
        computerDisplayScore.textContent = `${computerScore}`;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        resultText.innerText = `${playerChoice} beats ${computerChoice}`
        userScore += 1;
        userDisplayScore.textContent = `${userScore}`;
        computerDisplayScore.textContent = `${computerScore}`;
    } else if (playerChoice === 'scissor' && computerChoice === 'paper') {
        resultText.innerText = `${playerChoice} beats ${computerChoice}`
        userScore += 1;
        userDisplayScore.textContent = `${userScore}`;
        computerDisplayScore.textContent = `${computerScore}`;
    } else {
        resultText.innerText = `The computer selected ${computerChoice} which beats your selection of ${playerChoice}`
        computerScore += 1;
        userDisplayScore.textContent = `${userScore}`;
        computerDisplayScore.textContent = `${computerScore}`;
    }
}

function whoWon() {
    if (userScore >= 5) {
        winner.innerText = `You beat the computer ${userScore} to ${computerScore}!`
    } else if (computerScore >= 5) {
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




