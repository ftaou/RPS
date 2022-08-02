
//1. pick out span based on id

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

//2. get all the possible choices

const possibleChoices = document.querySelectorAll('button');
const list = ['paper', 'rock', 'scissors'];

// 3. grab them all and store clicked button in userChoice variable

let userChoice;

/* for each possible choice in possible choices, you want to add an event listener 
for click. So every button is awaiting a click and will do an action depending on 
which button it is. Then the button that you click, will now be e. You want to get 
e's id so that you can assign it to the empty space next to the user's choice, which 
is why innerHTML is used, to change that space to have the id of the button.
*/

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    //4. Generate a computer choice right after the user has given their choice
    generateComputerChoice();
}));

function generateComputerChoice(){
    const randomNumber = Math.floor((Math.random() * possibleChoices.length)); 
    // since possibleChoices is an array with elements between 0 and 2, use randomNumber
    // as the index
    computerChoiceDisplay.innerHTML = list[randomNumber];
    let num = 0;

    // because I used a different list than the choices (I could have modificed the original list instead)
    for(i = 0; i < list.length; i++){
        if(list[i] === userChoice){
            num = i;
        }
    }
    
    getResult(num, randomNumber);
    
    //professor used this method:

    /*if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }*/

    //computerChoiceDisplay.innerHTML = computerChoice;

}

function getResult(c1, c2){
    //list has the options in such an order that the 
    //previous always beats the next
    if (c1 !== c2) {
        if (c1 === (( c2 + 1 ) % 3)) {
             resultDisplay.innerHTML = 'Computer wins!'; 
        }
        else { 
            resultDisplay.innerHTML = 'User wins!';
            
        }
    }
    else {
        resultDisplay.innerHTML = 'Its a tie!';
        console.log('tie');
    }
}