
const game = () => {

    let playerScore = 0;
    let computerScore = 0;
    let moves =0;


    const playGame = () => {



        const buttons = document.querySelectorAll('button');

        const resultEl = document.getElementById('result');

        const playerScoreEl = document.getElementById('user-score');

        const computerScoreEl = document.getElementById('computer-score');




    



        /** Add eventlistener  plus function to the buttons
        
        player clicks on rock paper scissors
         using  a forEach to target each button
        add eventlistener click triggers a function
        */

        buttons.forEach((button) => {

            button.addEventListener("click", () => {

                
                const playerChoice = button.id;

     
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${5 - moves}`;


                const result = playRound(playerChoice, computerChoice());

                resultEl.textContent = result;


                // Function to check who wins
                playRound(this.innerText, computerChoice)

                // Calling gameOver function after 10 moves
                if (moves === 5) {
                    gameOver(playerChoice, movesLeft);
                }



            });


        });




        /** computer choice function
        array containing rock paper scissors
         random number using Math.floor Math.radom, multiply by the length of array
        return  number in choice array
        */

        function computerChoice() {

            const arrayChoice = ['rock', 'paper', 'scissors'];

            const randChoice = Math.floor(Math.random() * arrayChoice.length);

            return arrayChoice[randChoice];


        }




        /** 
         * compare player selection with   computer selection to find a winner
         * pass two parameters player selection computer selection
         */

        function playRound(playerSelection, computerSelection) {


            if (playerSelection === computerSelection) {

                return 'Tie';

            }

            else if ((playerSelection === "rock" && computerSelection === "scissors") ||

                (playerSelection === "paper" &&
                    computerSelection === "rock") ||

                (playerSelection === "scissors" && computerSelection === "paper")) {

                playerScore++;
                playerScoreEl.textContent = playerScore++;


                return `You Win! 
            ${playerSelection} beats 
              ${computerSelection}`;




            }

            else {
                computerScore++;
                computerScoreEl.textContent = computerScore++;

                return `You Lose

             ${computerSelection}  beats 
              ${playerSelection}`;


            }


        }


    }

    /**function to run when game's over
     */
    const gameOver = (playerChoice, movesLeft) => {

        const chooseMove = document.querySelector('.move');
        const resultEl = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerChoice.forEach(button => {
            button.style.display = 'none';
        })


        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';





        if (playerScore > computerScore) {

            resultEl.style.fontSize = '2rem';
            resultEl.innerText = 'You Won The Game'
            resultEl.style.color = '#308D46';

        }
        else if (playerScore < computerScore) {

            resultEl.style.fontSize = '2rem';
            resultEl.innerText = 'You Lost The Game';
            resultEl.style.color = 'red';

        }

        else {

            resultEl.style.fontSize = '2rem';
            resultEl.innerText = 'Tie';
            resultEl.style.color = 'grey'

        }

        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })


    } // end game over














    // calling play game function
    playGame();


}

// calling game function

game();