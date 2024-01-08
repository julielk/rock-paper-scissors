
const game = () => {

    let playerScore = 0;
    let computerScore = 0; 
    

   const playGame = () => {

       

    const buttons = document.querySelectorAll('button');

    const resultEl = document.getElementById('result');

    const playerScoreEl = document.getElementById('user-score');

    const computerScoreEl = document.getElementById('computer-score');

   


    /**
     * playerChoice
     */






    /** Add eventlistener  plus function to the buttons
    
    player clicks on rock paper scissors
     using  a forEach to target each button
    add eventlistener click triggers a function
    */

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            //console.log("user choice !", button.id, "computer choice", computerPlay());
               const playerSelection = button.id;
               
             const result = playRound(playerSelection,computerChoice());
               
            resultEl.textContent = result;

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
     * compare player selection with computer selection to find a winner
     * pass two parameters player selection computer selection
     */

    function playRound(playerSelection, computerSelection) {


        if (playerSelection ===computerSelection) {

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
       // calling play game function
       playGame();


}

// calling game function

game();