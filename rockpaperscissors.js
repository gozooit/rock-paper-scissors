function computerPlay() {
    let res;
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            res = "Rock";
            break;
        case 1:
            res = "Paper";
            break;
        case 2:
            res = "Scissors";
            break;
    }
    return res;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function playRoundOld(playerSelection = capitalize(prompt("What do you chose ? (Rock, Paper or Scissors ?)\n")), computerSelection=computerPlay()) {
    let win;
    if (playerSelection === computerSelection) {
        return `${playerSelection} vs ${computerSelection}, it's even !\n`;
    }
    if (playerSelection === "Rock") {
        win = (computerSelection === "Scissors") || false;
    } else if (playerSelection === "Paper") {
        win = (computerSelection === "Rock") || false;
    } else if (playerSelection === "Scissors") {
        win = (computerSelection === "Paper") || false;
    } else {
        return "Please enter one of the following : Rock, Paper or Scissors·\n";
    }

    if (win) {
        return `You Won! ${playerSelection} beats ${computerSelection}\n`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}\n`;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "even";
    }
    if (playerSelection === "Rock") {
        return (computerSelection === "Scissors") || false;
    } else if (playerSelection === "Paper") {
        return (computerSelection === "Rock") || false;
    } else if (playerSelection === "Scissors") {
        return (computerSelection === "Paper") || false;
    } else {
        return "error";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i<5; i++) {
        playerSelection = capitalize(prompt("What do you chose ? (Rock, Paper or Scissors ?)\n"));
        computerSelection = computerPlay();
        win = playRound(playerSelection, computerSelection);
        if (typeof(win) === "string") {
            if (win === "even") {
                console.log(`${playerSelection} vs ${computerSelection}, it's even !\n`)
                console.log(`Round ${i + 1} - Current score is -> You : ${playerScore} // Computer : ${computerScore}\n`)
            } else if (win === "error") {
                console.log(`Round ${i + 1} - ERROR! Please enter one of the following : Rock, Paper or Scissors·\n`)
            }
        }
        else if (typeof(win) === "boolean") {
            if (win) {
                playerScore++;
                console.log(`You Won! ${playerSelection} beats ${computerSelection}\n`)
                console.log(`Round ${i + 1} - Current score is -> You : ${playerScore} // Computer : ${computerScore}\n`)
            } else {
                computerScore++;
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}\n`)
                console.log(`Round ${i + 1} - Current score is -> You : ${playerScore} // Computer : ${computerScore}\n`)
            }
        }
    }
}

game();