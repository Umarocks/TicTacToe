var playerChoice = "X";
let counter = 0;

function playerChoiceClick(element) {
  //make a funtion to start a new game whenever this is invoked to avoid cheating and glitches
  playerChoice = element.textContent;
  console.log(playerChoice);
//   resetBoard();
}

function inputOnBoard(element) {
  const buttonId = element.id;
  const buttonContent = document.getElementById(buttonId);
  if (buttonContent.textContent.trim() === "") {
    buttonContent.innerHTML = playerChoice;
    counter++;
  }
  CheckLogic();
}

function CheckLogic() {
    const allButtonsOnBoardCheck = document.querySelector(".map").querySelectorAll("button");
    const a = allButtonsOnBoardCheck[1];
    if(allButtonsOnBoardCheck[0].textContent.trim().toLowerCase()===playerChoice.trim().toLowerCase()&&allButtonsOnBoardCheck[1].textContent.trim().toLowerCase()===playerChoice.trim().toLowerCase()&&allButtonsOnBoardCheck[2].textContent.trim().toLowerCase()===playerChoice.trim().toLowerCase()){
        console.log("PLAYER WON");
    }
    else if(allButtonsOnBoardCheck[3].textContent.trim().toLowerCase()===playerChoice.trim().toLowerCase()&&allButtonsOnBoardCheck[4].textContent.trim().toLowerCase()===playerChoice.trim().toLowerCase()&&allButtonsOnBoardCheck[5].textContent.trim().toLowerCase()===playerChoice.trim().toLowerCase()){
        console.log("PLAYER WON");
    }
    else if(allButtonsOnBoardCheck[6].textContent.trim().toLowerCase()===playerChoice.trim().toLowerCase()&&allButtonsOnBoardCheck[7].textContent.trim().toLowerCase()===playerChoice.trim().toLowerCase()&&allButtonsOnBoardCheck[8].textContent.trim().toLowerCase()===playerChoice.trim().toLowerCase()){
        console.log("PLAYER WON");
    }
    else if(allButtonsOnBoardCheck[0].textContent.trim().toLowerCase()===playerChoice.trim().toLowerCase()&&allButtonsOnBoardCheck[3].textContent.trim().toLowerCase()===playerChoice.trim().toLowerCase()&&allButtonsOnBoardCheck[6].textContent.trim().toLowerCase()===playerChoice.trim().toLowerCase()){
        console.log("PLAYER WON");
    }
    else if(allButtonsOnBoardCheck[1].textContent.trim().toLowerCase()===playerChoice.trim().toLowerCase()&&allButtonsOnBoardCheck[4].textContent.trim().toLowerCase()===playerChoice.trim().toLowerCase()&&allButtonsOnBoardCheck[7].textContent.trim().toLowerCase()===playerChoice.trim().toLowerCase()){
        console.log("PLAYER WON");
    }
    else if(allButtonsOnBoardCheck[2].textContent.trim().toLowerCase()===playerChoice.trim().toLowerCase()&&allButtonsOnBoardCheck[5].textContent.trim().toLowerCase()===playerChoice.trim().toLowerCase()&&allButtonsOnBoardCheck[8].textContent.trim().toLowerCase()===playerChoice.trim().toLowerCase()){
        console.log("PLAYER WON");
    }
    else if(allButtonsOnBoardCheck[0].textContent.trim().toLowerCase()===playerChoice.trim().toLowerCase()&&allButtonsOnBoardCheck[4].textContent.trim().toLowerCase()===playerChoice.trim().toLowerCase()&&allButtonsOnBoardCheck[8].textContent.trim().toLowerCase()===playerChoice.trim().toLowerCase()){
        console.log("PLAYER WON");
    }
    else if(allButtonsOnBoardCheck[2].textContent.trim().toLowerCase()===playerChoice.trim().toLowerCase()&&allButtonsOnBoardCheck[4].textContent.trim().toLowerCase()===playerChoice.trim().toLowerCase()&&allButtonsOnBoardCheck[6].textContent.trim().toLowerCase()===playerChoice.trim().toLowerCase()){
        console.log("PLAYER WON");
    }
    
}






function resetBoard() {
  const allButtonsOnBoard = document
    .querySelector(".map")
    .querySelectorAll("button");
  allButtonsOnBoard.forEach((element) => {
    element.textContent = "";
  });
  counter = 0;
}



