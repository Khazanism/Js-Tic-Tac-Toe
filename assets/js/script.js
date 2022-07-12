//  Tic Tac Toe

const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';

const cellElements = document.querySelectorAll("[data-cell]");
let circleTurn;

cellElements.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

// function handleClick(e) {
//   // place mark

//   const cell = e.target;
//   const currentClass = circleTurn ? CIRCLE_CLASS : x_CLASS;
//   placeMark(cell, currentClass);

//   // check for win
//   //check for draw
//   //switch turns
// }

function handleClick(e) {
  // place mark
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);

  // check for win
   //check for draw
  //switch turns
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

// function placeMark(cell, currentClass) {
//   cell.classsList.add(currentClass);
// }
