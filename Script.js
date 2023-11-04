var playerChoice = "X";
var computerChoice = "O";
let counter = 0; //counter helps to keep track of how many plays have been made so that when counter becomes 9 we can push restart screen

//This function checks the choice of player to play x or o
function playerChoiceClick(element) {
  if (element.textContent.trim() === "X") {
    computerChoice = "O";
    playerChoice = element.textContent;
  }
  if (element.textContent.trim() === "O") {
    computerChoice = "X";
    playerChoice = element.textContent;
  }
  //   console.log(playerChoice + computerChoice);
  resetBoard();
}

// This function pushes the player choice to that button and displays it to the board
function inputOnBoard(element) {
  const buttonId = element.id;
  const buttonContent = document.getElementById(buttonId);
  if (buttonContent.textContent.trim() === "") {
    buttonContent.innerHTML = playerChoice;
    counter++;
  }
  CheckLogic();
}

//This function checks for logic for winning
function CheckLogic() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Horizontal rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Vertical columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];
  const allButtonsOnBoardCheck = document
    .querySelector(".map")
    .querySelectorAll("button");

  for (const condition of winConditions) {
    const [a, b, c] = condition;
    const computerDispaly = document.querySelector("#computerWonMessage");
    const playerWonMessage = document.querySelector("#playerWonMessage");
    const container = document.querySelector(".container");
    if (
      allButtonsOnBoardCheck[a].textContent.trim().toLowerCase() ===
        playerChoice.trim().toLowerCase() &&
      allButtonsOnBoardCheck[b].textContent.trim().toLowerCase() ===
        playerChoice.trim().toLowerCase() &&
      allButtonsOnBoardCheck[c].textContent.trim().toLowerCase() ===
        playerChoice.trim().toLowerCase()
    ) {
      container.style.display = "none";
      playerWonMessage.style.display = "block";
      return;
    }
    if (
      allButtonsOnBoardCheck[a].textContent.trim().toLowerCase() ===
        computerChoice.trim().toLowerCase() &&
      allButtonsOnBoardCheck[b].textContent.trim().toLowerCase() ===
        computerChoice.trim().toLowerCase() &&
      allButtonsOnBoardCheck[c].textContent.trim().toLowerCase() ===
        computerChoice.trim().toLowerCase()
    ) {
      computerDispaly.style.display = "block";
      container.style.display="none";
      return;
    }
  }
  // No win condition matched
  console.log("No win yet.");
}

//This function resets the board if player changes his icon or on restart button click
function resetBoard() {
  const allButtonsOnBoard = document
    .querySelector(".map")
    .querySelectorAll("button");
  allButtonsOnBoard.forEach((element) => {
    element.textContent = "";
  });
  counter = 0;
  const displayMap = document.querySelector(".container");
  displayMap.style.display = "block";
  const playerDisplay = document.querySelector("#playerWonMessage");
  playerDisplay.style.display = "none";
  const computerDispaly = document.querySelector("#computerWonMessage");
  computerDispaly.style.display = "none";
}
