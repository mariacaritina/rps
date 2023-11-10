const choices = ["rock", "paper", "scissors"];

function getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}


let userChoice = "";
let computerChoice = "";

function playGame(choice) {
    userChoice = choice;
    document.querySelectorAll('.option').forEach(option => option.classList.remove('selected'));
    document.getElementById(choice).classList.add('selected');
}

function compareChoices() {
    computerChoice = getRandomChoice();

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        result = `You lose! ${computerChoice} beats ${userChoice}.`;
    }

    alert(result);
}
