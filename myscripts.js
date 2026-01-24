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
    }
    //Lose
    else if (
        (humanChoice === "Rock" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Scissor") ||
        (humanChoice === "Scissor" && computerChoice === "Rock")
    ) {
        resultMessages.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    } 
    //Win
    else { 
        resultMessages.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }
    resultBox.appendChild(resultMessages);
}

//Logic for 5 rounds
//While user's score or computer's score < 5, repeat the logic for one round
//After the loop, check user's score if < 5, prints computer win and else, user wins
function playGame() {
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

//Start the game
//playGame();

//Interact with button
const buttonBox = document.querySelector('#buttonsBox');
const resultBox = document.querySelector('#resultBox')

buttonBox.addEventListener('click', (event) => {
    let target = event.target;
    let humanChoice;
    let computerChoice;

    switch(target.id) {

        case 'rockButton':
            humanChoice = "Rock";
            computerChoice = getComputerChoice();

            playRound(humanChoice, computerChoice, resultBox);
            break;

        case 'paperButton':
            humanChoice = "Paper";
            computerChoice = getComputerChoice();

            playRound(humanChoice, computerChoice, resultBox);
            break;
            
        case 'scissorButton':
            humanChoice = "Scissor";
            computerChoice = getComputerChoice();

            playRound(humanChoice, computerChoice, resultBox);
            break;
    }
});

