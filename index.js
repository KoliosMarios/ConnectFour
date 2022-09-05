// picking up the squares
const squares = document.querySelectorAll(".board div");

// pick out the result
const result = document.querySelector("#result");

// pick out the current player display
const displayCurrentPlayer = document.querySelector("#current-player");

// current player variable to display
let currentPlayer = 1;

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
  };
}
