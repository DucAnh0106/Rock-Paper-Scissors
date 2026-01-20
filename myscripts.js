function getComputerChoice() {
    //math floor to round decimal numbers down, math random from 0(inclusive) to 1(exclusive)
    let num = Math.floor(Math.random() * 12); // get number from 0 to 11 (both inclusive)
    //all have 1/3 chances
    if (num >= 0 & num < 4) {
        return "Scissor";
    } else if (num >= 4 & num < 8) {
        return "Rock";
    } else {
        return "Paper";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissor?",'');
    return choice;
}
//Get the user's input and the computer's choice
const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

//intialize 2 variables to store user and computer's score and set their values to 0
let computerScore = 0;
let humanScore = 0;

//Logic for one round (user's choice is case-insensitive)
//Who wins get the score incremented by 1
function playRound(humanChoice, computerChoice) {
    //make user's choice case-insensitive
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

    //Draw
    if (humanChoice === computerChoice) return `Draw! You both played ${humanChoice}`;

    //Lose
    if (
        (humanChoice == "Rock" & computerChoice == "Paper") ||
        (humanChoice == "Paper" & computerChoice == "Scissor") ||
        (humanChoice == "Scissor" & computerChoice == "Rock")
    ) {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    } 
    //Win
    else { 
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
}

//Logic for 5 rounds
//While user's score or computer's score < 5, repeat the logic for one round
//After the loop, check user's score if < 5, prints computer win and else, user wins
