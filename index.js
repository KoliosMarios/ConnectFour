// picking up the squares
const squares = document.querySelectorAll(".board div");

// pick out the result
const result = document.querySelector("#result");

// pick out the current player display
const displayCurrentPlayer = document.querySelector("#current player");

// current player variable to display
let currentPlayer = 1;

// add an onClick on all our squares
for (let i = 0; i < squares.length; i++) {
  squares[i].onclick = () => {
    alert("You have clicked square " + i);
  };
}
