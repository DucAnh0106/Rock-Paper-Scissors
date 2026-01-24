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

//Logic for one round (user's choice is case-insensitive)
//Who wins get the score incremented by 1 and print out winning message
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
function initGame() {
    //this part is to declare what's needed to refer to during the game
    const buttonBox = document.querySelector('#buttonsBox');
    const resultBox = document.querySelector('#resultBox')
    const humanScoreDisplay = document.querySelector('#scoreBox #human_point');
    const computerScoreDisplay = document.querySelector('#scoreBox #computer_point')
    const restartButton = document.querySelector('#restartButton');

    let computerScore = 0;
    let humanScore = 0;

    //This part is how the game should be play
    function playGame(event) {
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
        humanScoreDisplay.textContent = `PLAYER SCORE: ${humanScore}`;
        computerScoreDisplay.textContent = `COMPUTER SCORE: ${computerScore}`;

        //The first to 5 points wins the game
        if (computerScore >= 5) {
            buttonBox.removeEventListener('click', playGame);
            let ending = document.createElement('p')
            ending.textContent = "Game over! You lose to a computer haha!"
            resultBox.insertBefore(ending, resultBox.firstChild);

        } else if (humanScore >= 5) {
            buttonBox.removeEventListener('click', playGame);
            let ending = document.createElement('p')
            ending.textContent = "You win! Congrats."
            resultBox.insertBefore(ending, resultBox.firstChild);
        }
    }
    
    //click attack buttons to start playing
    buttonBox.addEventListener('click', playGame);

    //click restart button to restart the game
    restartButton.addEventListener('click', () => {
        window.location.reload(); //this reloads the current page;
    })
}

//Run the game
initGame();
