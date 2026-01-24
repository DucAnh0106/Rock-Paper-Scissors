function getComputerChoice() {
    //math floor to round decimal numbers down, math random from 0(inclusive) to 1(exclusive)
    let num = Math.floor(Math.random() * 3); // get number: 0, 1, 2
    //all have 1/3 chances
    if (num === 0) {
        return "Scissor";
    } else if (num === 1) {
        return "Rock";
    } else {
        return "Paper";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissor?",'');
    return choice;
}

//Logic for one round (user's choice is case-insensitive)
//Who wins get the score incremented by 1
function playRound(humanChoice, computerChoice, resultBox) {
    let resultMessages = document.createElement('p');

    //Draw
    if (humanChoice === computerChoice) {
        resultMessages.textContent = `Draw! You both played ${humanChoice}`;
        resultBox.insertBefore(resultMessages, resultBox.firstChild);

        return "Draw";
    }
    //Lose
    else if (
        (humanChoice === "Rock" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Scissor") ||
        (humanChoice === "Scissor" && computerChoice === "Rock")
    ) {
        resultMessages.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        resultBox.insertBefore(resultMessages, resultBox.firstChild);

        return "Lose";
    } 
    //Win
    else { 
        resultMessages.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        resultBox.insertBefore(resultMessages, resultBox.firstChild);

        return "Win";
    }
}

//Logic for 5 rounds
//While user's score or computer's score < 5, repeat the logic for one round
//After the loop, check user's score if < 5, prints computer win and else, user wins
function playGame(scoreBox) {
    //intialize 2 variables to store user and computer's score and set their values to 0
    let computerScore = 0;
    let humanScore = 0;

    //repeat logic for one round
    while (computerScore < 5 && humanScore < 5) {
        //Get the user's input and the computer's choice
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        //add points
        (playRound(humanChoice, computerChoice) === "Lose") ? ++computerScore : ++humanScore;
    }
    
    //check who won
    console.log( (humanScore < 5) ? 'You lose to a computer haha!' : 'You win! Congrats.' );
}

//Interact with button
const buttonBox = document.querySelector('#buttonsBox');
const resultBox = document.querySelector('#resultBox')
const playerScoreDisplay = document.querySelector('#scoreBox #player_point');
const computerScoreDisplay = document.querySelector('#scoreBox #computer_point')

let computerScore = 0;
let humanScore = 0;

buttonBox.addEventListener('click', function newPlayGame(event) {
    let target = event.target;
    let humanChoice;
    let computerChoice;

    switch(target.id) {

        case 'rockButton':
            humanChoice = "Rock";
            computerChoice = getComputerChoice();

            roundResult = playRound(humanChoice, computerChoice, resultBox);
            if (roundResult === 'Lose') {
                ++computerScore;
            } else if (roundResult === 'Win') {
                ++humanScore;
            }
            break;

        case 'paperButton':
            humanChoice = "Paper";
            computerChoice = getComputerChoice();

            roundResult = playRound(humanChoice, computerChoice, resultBox);
            if (roundResult === 'Lose') {
                ++computerScore;
            } else if (roundResult === 'Win') {
                ++humanScore;
            }
            break;
            
        case 'scissorButton':
            humanChoice = "Scissor";
            computerChoice = getComputerChoice();

            roundResult = playRound(humanChoice, computerChoice, resultBox);
            if (roundResult === 'Lose') {
                ++computerScore;
            } else if (roundResult === 'Win') {
                ++humanScore;
            }
            break;
    }

    //update the points after every round
    playerScoreDisplay.textContent = `PLAYER SCORE: ${humanScore}`;
    computerScoreDisplay.textContent = `COMPUTER SCORE: ${computerScore}`;

    if (computerScore >= 5) {
        buttonBox.removeEventListener('click', newPlayGame);
        let ending = document.createElement('p')
        ending.textContent = "Game over! You lose to a computer haha!"
        resultBox.insertBefore(ending, resultBox.firstChild);
    } else if (humanScore >= 5) {
        buttonBox.removeEventListener('click', newPlayGame);
        let ending = document.createElement('p')
        ending.textContent = "You win! Congrats."
        resultBox.insertBefore(ending, resultBox.firstChild);
    }
});




