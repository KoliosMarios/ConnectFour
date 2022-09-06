// picking up the squares
const squares = document.querySelectorAll(".board div");

// pick out the result
const result = document.querySelector("#result");

// pick out the current player display
const displayCurrentPlayer = document.querySelector("#current-player");

//pick out the scores display
const displayPlayerOneScore = document.querySelector("#player-one-score");
const displayPlayerTwoScore = document.querySelector("#player-two-score");

// current player variable to display
let currentPlayer = 1;

// variables to display scores
let playerOneScore = 0;
let playerTwoScore = 0;

// game winning arrays
let winningArrays = [
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
  [8, 9, 10, 11],
  [9, 10, 11, 12],
  [10, 11, 12, 13],
  [14, 15, 16, 17],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [17, 18, 19, 20],
  [21, 22, 23, 24],
  [22, 23, 24, 25],
  [23, 24, 25, 26],
  [24, 25, 26, 27],
  [28, 29, 30, 31],
  [29, 30, 31, 32],
  [30, 31, 32, 33],
  [31, 32, 33, 34],
  [35, 36, 37, 38],
  [36, 37, 38, 39],
  [37, 38, 39, 40],
  [38, 39, 40, 41],
  [0, 7, 14, 21],
  [7, 14, 21, 28],
  [14, 21, 28, 35],
  [1, 8, 15, 22],
  [8, 15, 22, 29],
  [15, 22, 29, 36],
  [2, 9, 16, 23],
  [9, 16, 23, 30],
  [16, 23, 30, 37],
  [3, 10, 17, 24],
  [10, 17, 24, 31],
  [17, 24, 31, 38],
  [4, 11, 18, 25],
  [11, 18, 25, 32],
  [18, 25, 32, 39],
  [5, 12, 19, 26],
  [12, 19, 26, 33],
  [19, 26, 33, 40],
  [6, 13, 20, 27],
  [13, 20, 27, 34],
  [20, 27, 34, 41],
  [14, 22, 30, 38],
  [7, 15, 23, 31],
  [15, 23, 31, 39],
  [0, 8, 16, 24],
  [8, 16, 24, 32],
  [16, 24, 32, 40],
  [1, 9, 17, 25],
  [9, 17, 25, 33],
  [17, 25, 33, 41],
  [2, 10, 18, 26],
  [10, 18, 26, 34],
  [3, 11, 19, 27],
  [3, 9, 15, 21],
  [4, 10, 16, 22],
  [10, 16, 22, 28],
  [5, 11, 17, 23],
  [11, 17, 23, 29],
  [17, 23, 29, 35],
  [6, 12, 18, 24],
  [12, 18, 24, 30],
  [18, 24, 30, 36],
  [13, 19, 25, 31],
  [19, 25, 31, 37],
  [20, 26, 32, 28],
];

// function that checks for winning combinations
function checkBoard() {
  for (let i = 0; i < winningArrays.length; i++) {
    // most confusing part
    // f.e. when i = 0 then squares1 = squares[winningArrays[0][0]] which is squares[0] and so forth
    // so we populate the variables square1, square2 etc with the indexes inside the winning arrays
    const square1 = squares[winningArrays[i][0]];
    const square2 = squares[winningArrays[i][1]];
    const square3 = squares[winningArrays[i][2]];
    const square4 = squares[winningArrays[i][3]];

    // check if all these squares have the player-one class
    // and if it does player one is the winner
    if (
      square1.classList.contains("player-one") &&
      square2.classList.contains("player-one") &&
      square3.classList.contains("player-one") &&
      square4.classList.contains("player-one")
    ) {
      result.innerHTML = "Player One Wins!";
      playerOneScore += 1;
      displayPlayerOneScore.innerHTML = playerOneScore;
      winningArrays.splice(i,1);
    }
    // same for player two
    if (
      square1.classList.contains("player-two") &&
      square2.classList.contains("player-two") &&
      square3.classList.contains("player-two") &&
      square4.classList.contains("player-two")
    ) {
      result.innerHTML = "Player Two Wins!";
      playerTwoScore += 1;
      displayPlayerTwoScore.innerHTML = playerTwoScore;
      winningArrays.splice(i,1);
    }
  }
}

// add an onClick on all our squares
for (let i = 0; i < squares.length; i++) {
  squares[i].onclick = () => {
    // we alert the player if he tries to play a taken square
    if (squares[i].classList.contains("taken")) {
      return;
    }
    // we make a square playable only if the square below it is taken
    else if (squares[i + 7].classList.contains("taken")) {
      if (currentPlayer == 1) {
        squares[i].classList.add("taken");
        squares[i].classList.add("player-one");
        currentPlayer = 2;
        displayCurrentPlayer.innerHTML = currentPlayer;
      } else if (currentPlayer == 2) {
        squares[i].classList.add("taken");
        squares[i].classList.add("player-two");
        currentPlayer = 1;
        displayCurrentPlayer.innerHTML = currentPlayer;
      }
    } else alert("Non Playable!");
    // we call for the function that checks if there is a winning combination every time a player clicks
    checkBoard();
  };
}
