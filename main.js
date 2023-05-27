let cells = document.querySelectorAll(".row > div");
let currentPlayer = "X";
let winningPlayer = document.querySelector(".result");
let gameOver = false;

// Event listener to check for a click inside each cell
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

// Function for click event
function cellClicked(event) {
  // If the game is over cells reset
  if (gameOver) {
    resetCells();
    return;
  }
  if (!gameOver && event.target.textContent === "") {
    event.target.textContent = currentPlayer;
    checkWin(currentPlayer);
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    checkDraw();
  }
}

// Function to check to see if either player won.
function checkWin(player) {
  if (
    cells[0].textContent === player &&
    cells[1].textContent === player &&
    cells[2].textContent === player
  ) {
    winningPlayer.textContent = player + " Wins!";
    gameOver = true;
  } else if (
    cells[3].textContent === player &&
    cells[4].textContent === player &&
    cells[5].textContent === player
  ) {
    winningPlayer.textContent = player + " Wins!";
    gameOver = true;
  } else if (
    cells[6].textContent === player &&
    cells[7].textContent === player &&
    cells[8].textContent === player
  ) {
    winningPlayer.textContent = player + " Wins!";
    gameOver = true;
  } else if (
    cells[0].textContent === player &&
    cells[3].textContent === player &&
    cells[6].textContent === player
  ) {
    winningPlayer.textContent = player + " Wins!";
    gameOver = true;
  } else if (
    cells[1].textContent === player &&
    cells[4].textContent === player &&
    cells[7].textContent === player
  ) {
    winningPlayer.textContent = player + " Wins!";
    gameOver = true;
  } else if (
    cells[2].textContent === player &&
    cells[5].textContent === player &&
    cells[8].textContent === player
  ) {
    winningPlayer.textContent = player + " Wins!";
    gameOver = true;
  } else if (
    cells[0].textContent === player &&
    cells[4].textContent === player &&
    cells[8].textContent === player
  ) {
    winningPlayer.textContent = player + " Wins!";
    gameOver = true;
  } else if (
    cells[2].textContent === player &&
    cells[4].textContent === player &&
    cells[6].textContent === player
  ) {
    winningPlayer.textContent = player + " Wins!";
    gameOver = true;
  }
}

// Function to clear cells if win or draw
function resetCells() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
  gameOver = false;
  winningPlayer.textContent = "";
  currentPlayer = "X";
}

// Function to check if there was a draw or not.
function checkDraw() {
  let isDraw = true;
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === "") {
      isDraw = false;
      break;
    }
  }
  if (isDraw) {
    winningPlayer.textContent = "It's a Draw!";
    gameOver = true;
  }
}
