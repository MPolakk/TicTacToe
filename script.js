const cells = [...document.querySelectorAll('.cell')];
const winner = document.querySelector('.winner');
const restart = document.querySelector('.restart');

let index = "";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let roundWon = false;
let playerTurn = "x";

let winCombinations = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 4, 8],
[2, 4, 6],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8]
]



const addSymbol = (e) => {


 if (e.target.classList[1] == "x"|| e.target.classList[1] == "o" || roundWon=== true) {return}
 e.target.classList.add(playerTurn)
 gameBoard[index] = playerTurn;
 if(playerTurn == "x") {
  
  playerTurn = "o";
  
 } else if (playerTurn == "o") {
  
  playerTurn = "x";
  
 }
 



}



const checkWin = () => {
 

 for(let i = 0; i < winCombinations.length; i++) {
  const winNumber = winCombinations[i];
  let a = gameBoard[winNumber[0]];
  let b = gameBoard[winNumber[1]];
  let c = gameBoard[winNumber[2]];
  if ( a === "" || b === "" || c === "") {
   continue;
  }
  if (a===b && b === c) {
   roundWon = true;
   break;
  }

 }
 if(roundWon) {
  winner.innerText = `Wygrał ${playerTurn}`
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  index = "";
 }
 
 }




 



const restartGame = () => {
 cells.forEach((cell) => {
  cell.classList.remove("x", "o")
 })
}




restart.addEventListener('click', restartGame);



for(let i = 0; i < cells.length; i++) {
 cells[i].addEventListener('click', (e)=> {
  index = i;
  addSymbol(e);
  checkWin();
  console.log(gameBoard)
 })
 
}






