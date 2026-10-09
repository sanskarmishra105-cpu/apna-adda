const cells = [...document.querySelectorAll(".cell")];
const statusLine = document.querySelector("#status");
const scoreLine = document.querySelector("#score");
const resetButton = document.querySelector("#reset");
const newGameButton = document.querySelector("#new-game");
const winningLines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];
let board = Array(9).fill("");
let currentPlayer = "X";
let gameOver = false;
const scores = { X: 0, O: 0, draws: 0 };

function updateScore() {
  scoreLine.textContent = `X ${scores.X} · O ${scores.O} · Draws ${scores.draws}`;
}

function finishRound(winner, winningLine = []) {
  gameOver = true;
  winningLine.forEach(index => cells[index].classList.add("winner"));
  if (winner) {
    scores[winner] += 1;
    statusLine.textContent = `Player ${winner} wins!`;
  } else {
    scores.draws += 1;
    statusLine.textContent = "It's a draw!";
  }
  updateScore();
}

function play(index) {
  if (gameOver || board[index]) return;
  board[index] = currentPlayer;
  cells[index].textContent = currentPlayer;
  cells[index].setAttribute("aria-label", `Square ${index + 1}: ${currentPlayer}`);
  cells[index].classList.toggle("o", currentPlayer === "O");
  cells[index].disabled = true;

  const winningLine = winningLines.find(line => line.every(i => board[i] === currentPlayer));
  if (winningLine) return finishRound(currentPlayer, winningLine);
  if (board.every(Boolean)) return finishRound(null);

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusLine.textContent = `Player ${currentPlayer}'s turn`;
}

function resetRound() {
  board = Array(9).fill("");
  currentPlayer = "X";
  gameOver = false;
  cells.forEach((cell, index) => {
    cell.textContent = "";
    cell.disabled = false;
    cell.classList.remove("o", "winner");
    cell.setAttribute("aria-label", `Row ${Math.floor(index / 3) + 1}, column ${(index % 3) + 1}`);
  });
  statusLine.textContent = "Player X's turn";
}

cells.forEach(cell => cell.addEventListener("click", () => play(Number(cell.dataset.index))));
resetButton.addEventListener("click", resetRound);
newGameButton.addEventListener("click", () => {
  scores.X = 0;
  scores.O = 0;
  scores.draws = 0;
  updateScore();
  resetRound();
});
updateScore();