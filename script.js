
let compScore = 0
let humanScore = 0

function getCompChoice() {
    let randomNumber = Math.floor(Math.random() * 10) + 1
    if (randomNumber <= 3) {
        return "Rock"
    }
    else if (randomNumber > 3 && randomNumber < 7) {
        return "Paper"
    }
    else if (randomNumber >= 7) {
        return "Scissors"
    }
}

function getHumanChoice() {
    let userInput = prompt("Your Choice : ")
    return userInput
}

function playRound(compChoice, humanChoice) {
    if (compChoice === humanChoice) {
        console.log("It's a tie!")
    }
    else if (compChoice === "rock" && humanChoice === "paper") {
        console.log("Paper beats Rock ! You win!")
        humanScore++;
    }
    else if (compChoice === "rock" && humanChoice === "scissors") {
        console.log("Rock beats Scissors!   Computer Wins!")
        compScore++
    }
    else if (compChoice === "paper" && humanChoice === "rock") {
        console.log("Paper beats Rock! Computer wins!")
        compScore++
    }
    else if (compChoice === "paper" && humanChoice === "scissors") {
        console.log("Scissors beat Paper! You win!")
        humanScore++
    }
    else if (compChoice === "scissors" && humanChoice === "rock") {
        console.log("Rock beats Scissors! You win!")
        humanScore++
    }
    else if (compChoice === "scissors" && humanChoice === "paper") {
        console.log("Scissors beat Paper! Computer wins!")
        compScore++
    }
}

function showScore(compScore, humanScore) {
    console.log(`Computer Score : ${compScore}      Human Score : ${humanScore}`)
}

function showWinner(compScore, humanScore){
    if (compScore === humanScore){
        console.log("***IT'S A TIE***")
    }
    else if (compScore > humanScore){
        console.log("***COMPUTER WON!***")
    }
    else {
        console.log("***YOU WON!***")
    }
}

function playGame() {



    compScore = 0
    humanScore = 0
    for (let i = 1; i <= 5; i++) {
        let compChoice = getCompChoice().toLowerCase()
        let humanChoice = getHumanChoice().toLowerCase()
        playRound(compChoice, humanChoice)
        showScore(compScore, humanScore)
    }
    showWinner(compScore,humanScore)
}

playGame()

