const buttons = document.querySelectorAll('button');

/** Add eventlistener  plus function to the buttons

player clicks on rock paper scissors
 forEach to target each button
add eventlistener click triggers a function
*/

buttons.forEach(button => {

    button.addEventListener('click', () => {

        console.log("user choice !", button.id, "computer choice", computerPlay());
    });


});

/** computer play function
array containing rock paper scissors
 random number using Math.floor Math.radom, multiply by the length of array
return  number in choice array
*/

function computerPlay(){

    const choices = ['rock', 'paper', 'scissors'];

    const randChoice = Math.floor(Math.random() * choices.length);

    return choices[randChoice];


}




