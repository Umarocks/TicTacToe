let playerChoice="";

function playerChoiceClick(element){
    //make a funtion to start a new game whenever this is invoked to avoid cheating and glitches
    playerChoice=element.textContent;
    console.log(playerChoice);
} 

function inputOnMap(element){
    const buttonId = element.id;
    const buttonContent = document.getElementById(buttonId);
    if(buttonContent.textContent.trim()===''){
        buttonContent.innerHTML=playerChoice;

    }
    // console.log(buttonContent.textContent);
}