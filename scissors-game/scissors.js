
const options = ["Rock", "Paper", "Scissors"];

function getRandomComputerResult() {
    let index = Math.floor(Math.random() * options.length);
    return options[index]
}

function hasPlayerWonTheRound(playerChoice, computerChoice) {
    return ((playerChoice==="Rock" && computerChoice==="Scissors") ||
(playerChoice==="Scissors" && computerChoice==="Paper") || (playerChoice==="Paper" && computerChoice==="Rock"))
}


let playerScore = 0;
let computerScore = 0;
function getRoundResults (userOption) {
    const computerResult = getRandomComputerResult();
    if(hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++
       return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (userOption === computerResult) {
        return `It's a tie! Both chose ${userOption}`;
    } else {
        computerScore++
        return `Computer wins! ${computerResult} beats ${userOption}`;
    }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score")
const roundResultMsg = document.getElementById("result-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionContainer = document.querySelector(".option-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
    roundResultMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
    if(playerScore ===3 || computerScore===3) {
        winnerMsgElement.innerText = `${playerScore ===3? "Player": "Computer"} has won the game!`;
        
        resetGameBtn.style.display = "block";
        optionContainer.style.display = "none"
    }
}


const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
    showResults("Rock")
})
paperBtn.addEventListener("click", function () {
    showResults("Paper")
})
scissorsBtn.addEventListener("click", function () {
    showResults("Scissors")
})

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    resetGameBtn.style.display = "none";
    optionContainer.style.display = "flex";
    winnerMsgElement.innerText = "";
    roundResultMsg.innerText = "";

}

resetGameBtn.addEventListener("click", function() {
    resetGame()
})






