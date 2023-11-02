let playerChoice="X";

function playerChoiceClick(element){
    //make a funtion to start a new game whenever this is invoked to avoid cheating and glitches
    playerChoice=element.textContent;
    console.log(playerChoice);
} 
let counter=0;

function inputOnBoard(element){
    const buttonId = element.id;
    const buttonContent = document.getElementById(buttonId);
    if(buttonContent.textContent.trim()===''){
        buttonContent.innerHTML=playerChoice;
        counter++;
    }
    console.log(counter);
    // console.log(buttonContent.textContent);
}



function resetBoard(){
    const allButtonsOnBoard = document.querySelector('.map').querySelectorAll("button");
    allButtonsOnBoard.forEach(element => {
        element.textContent='';
    });
    counter=0;
}