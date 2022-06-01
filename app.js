const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    computerChoice = generateComputerChoice()
    winner = getWinner(userChoice, computerChoice)
    displayResult(userChoice, computerChoice, winner)
}))

function generateComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    const computerChoice = choices[randomNumber]
    computerChoiceDisplay.innerHTML = computerChoice
    return computerChoice
}

function getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie'
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'user'
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'user'
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'user'
    } else {
        return 'computer'
    }
}

function displayResult(userChoice, computerChoice, winner) {
    if (winner === 'user') {
        resultDisplay.innerHTML = 'You win!'
    } else if (winner === 'computer') {
        resultDisplay.innerHTML = 'You lose!'
    } else {
        resultDisplay.innerHTML = 'It\'s a tie!'
    }
}