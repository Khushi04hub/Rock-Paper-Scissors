
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
    let userInput = prompt(" Rock Paper Scissors Shoot! Enter Your Choice : ")
    return userInput
}

function playRound(compChoice, humanChoice) {
    if (compChoice === humanChoice) {
        console.log("It's a tie!")
    }
    else if (compChoice === "rock" && humanChoice === "scissors" || compChoice === "paper" && humanChoice === "rock" || compChoice === "scissors" && humanChoice === "paper") {
        console.log(`${compChoice} beats ${humanChoice}     You Loose!`)
        compScore++
    }
    else{
        console.log(`${humanChoice} beats ${compChoice}     You Won!`)
        humanScore++
    }
}

function showScore(compScore, humanScore) {
    console.log(`Computer Score : ${compScore}      Your Score : ${humanScore}`)
}

function showWinner(compScore, humanScore){
    if (compScore === humanScore){
        console.log("***IT'S A TIE***")
    }
    else if (compScore > humanScore){
        console.log("YOU LOST!!!!")
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

