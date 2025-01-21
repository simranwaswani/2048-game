const boardElement = document.getElementById("board");
const restartButton = document.getElementById("restart");
const scoreElement = document.getElementById("score");
const highScoreElement = document.getElementById("high-score");

let board = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

let score = 0;
let highScore = localStorage.getItem("highScore") || 0;

highScoreElement.textContent = highScore;

const updateScore = (value) => {
  score += value;
  scoreElement.textContent = score;

  if (score > highScore) {
    highScore = score;
    highScoreElement.textContent = highScore;
    localStorage.setItem("highScore", highScore);
  }
};

const createBoard = () => {
  boardElement.innerHTML = "";
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      const value = board[row][col];
      if (value !== 0) {
        cell.textContent = value;
        cell.setAttribute("data-value", value);
      }
      boardElement.appendChild(cell);
    }
  }
};

const generateRandomTile = () => {
  let emptyTiles = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (board[row][col] === 0) {
        emptyTiles.push({ row, col });
      }
    }
  }

  if (emptyTiles.length === 0) return;

  const randomIndex = Math.floor(Math.random() * emptyTiles.length);
  const { row, col } = emptyTiles[randomIndex];
  board[row][col] = Math.random() < 0.9 ? 2 : 4;
  createBoard();
};

const slide = (row) => {
  const filteredRow = row.filter((value) => value !== 0);
  const empty = Array(4 - filteredRow.length).fill(0);
  return [...filteredRow, ...empty];
};

const combine = (row) => {
  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] !== 0 && row[i] === row[i + 1]) {
      row[i] *= 2;
      updateScore(row[i]); // Update score when tiles merge
      row[i + 1] = 0;
    }
  }
  return row;
};

const move = (direction) => {
  for (let i = 0; i < 4; i++) {
    let line;
    if (direction === "left" || direction === "right") {
      line = board[i];
      if (direction === "right") line.reverse();
      line = slide(line);
      line = combine(line);
      line = slide(line);
      if (direction === "right") line.reverse();
      board[i] = line;
    } else {
      line = board.map((row) => row[i]);
      if (direction === "down") line.reverse();
      line = slide(line);
      line = combine(line);
      line = slide(line);
      if (direction === "down") line.reverse();
      for (let j = 0; j < 4; j++) {
        board[j][i] = line[j];
      }
    }
  }
  generateRandomTile();
};

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") move("left");
  if (event.key === "ArrowRight") move("right");
  if (event.key === "ArrowUp") move("up");
  if (event.key === "ArrowDown") move("down");
});

restartButton.addEventListener("click", () => {
  board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  score = 0;
  scoreElement.textContent = score;
  generateRandomTile();
  generateRandomTile();
  createBoard();
});

// Initialize the game
generateRandomTile();
generateRandomTile();
createBoard();
