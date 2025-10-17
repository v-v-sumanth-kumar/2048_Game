
export function slideLeft(board) {
  let newBoard = board.map(row => slideAndMergeRow(row));
  return newBoard;
}

function slideAndMergeRow(row) {
  let arr = row.filter(val => val !== 0);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr[i] *= 2;
      arr[i + 1] = 0;
    }
  }
  arr = arr.filter(val => val !== 0);
  while (arr.length < row.length) arr.push(0);
  return arr;
}

export function slideRight(board) {
  let newBoard = board.map(row => slideAndMergeRow(row.slice().reverse()).reverse());
  return newBoard;
}

function transpose(board) {
  let newBoard = board[0].map((_, colIndex) => board.map(row => row[colIndex]));
  return newBoard;
}

export function slideUp(board) {
  let transposed = transpose(board);
  let moved = slideLeft(transposed);
  return transpose(moved);
}

export function slideDown(board) {
  let transposed = transpose(board);
  let moved = slideRight(transposed);
  return transpose(moved);
}

export function addRandomTile(board) {
  let emptyPositions = [];
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] === 0) emptyPositions.push([r, c]);
    }
  }
  if (emptyPositions.length === 0) return board;

  let [row, col] = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
  let newValue = Math.random() < 0.9 ? 2 : 4;
  let newBoard = board.map(r => r.slice());
  newBoard[row][col] = newValue;
  return newBoard;
}

export function isGameOver(board) {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] === 0) return false;
      let curr = board[r][c];
      if ((c < board[0].length - 1 && board[r][c + 1] === curr) ||
          (r < board.length - 1 && board[r + 1][c] === curr)) 
        return false;
    }
  }
  return true;
}
