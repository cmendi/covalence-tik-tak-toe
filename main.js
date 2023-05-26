let cells = document.querySelectorAll(".row > div");
let currentPlayer = "X";
let winningPlayer = document.querySelector(".result");

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

function cellClicked(event) {
  if (event.target.textContent === "") {
    event.target.textContent = currentPlayer;
    checkWin(currentPlayer);
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWin(player) {
  if (
    cells[0].textContent === player &&
    cells[1].textContent === player &&
    cells[2].textContent === player
  ) {
    winningPlayer.textContent = player + " Wins!";
  } else if (
    cells[3].textContent === player &&
    cells[4].textContent === player &&
    cells[5].textContent === player
  ) {
    winningPlayer.textContent = player + " Wins!";
  } else if (
    cells[6].textContent === player &&
    cells[7].textContent === player &&
    cells[8].textContent === player
  ) {
    winningPlayer.textContent = player + " Wins!";
  } else if (
    cells[0].textContent === player &&
    cells[3].textContent === player &&
    cells[6].textContent === player
  ) {
    winningPlayer.textContent = player + " Wins!";
  } else if (
    cells[1].textContent === player &&
    cells[4].textContent === player &&
    cells[7].textContent === player
  ) {
    winningPlayer.textContent = player + " Wins!";
  } else if (
    cells[2].textContent === player &&
    cells[5].textContent === player &&
    cells[8].textContent === player
  ) {
    winningPlayer.textContent = player + " Wins!";
  } else if (
    cells[0].textContent === player &&
    cells[4].textContent === player &&
    cells[8].textContent === player
  ) {
    winningPlayer.textContent = player + " Wins!";
  } else if (
    cells[2].textContent === player &&
    cells[4].textContent === player &&
    cells[6].textContent === player
  ) {
    winningPlayer.textContent = player + " Wins!";
  }
}

// Clear cells if winner or draw
function resetCells() {
  for (let i = 0; i > cells.length; i++) {
    cells[i].textContent = "";
  }
}
