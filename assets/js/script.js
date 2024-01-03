const buttons = document.querySelectorAll('button');

const resultEl = document.getElementById('result');

const playerScoreEl = document.getElementById('user-score');

const computerScoreEl = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

/** Add eventlistener  plus function to the buttons

player clicks on rock paper scissors
 forEach to target each button
add eventlistener click triggers a function
*/

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        //console.log("user choice !", button.id, "computer choice", computerPlay());

        const result = playRound(button.id, computerPlay());

        resultEl.textContent = result;



    });


});




/** computer play function
array containing rock paper scissors
 random number using Math.floor Math.radom, multiply by the length of array
return  number in choice array
*/

function computerPlay() {

    const choices = ['rock', 'paper', 'scissors'];

    const randChoice = Math.floor(Math.random() * choices.length);

    return choices[randChoice];


}

/**
 * compare player selection with computer selection
 * pass two parameters player selection computer selection
 */

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {

        return "It's a Tie";
    }

    else if ((playerSelection === "rock" && computerSelection === "scissors") ||

        (playerSelection === "paper" &&
            computerSelection === "rock") ||

        (playerSelection === "scissors" && computerSelection === "paper")) {

        playerScore++;
        playerScoreEl.textContent = playerScore++;
        return `You Win! ${playerSelection} beats  ${computerSelection}`;

    }

    else {
        computerScore++;
        computerScoreEl.textContent = computerScore++;
        return `You Lose!
        ${computerSelection} beats 
         ${playerSelection}`;

    }


}





