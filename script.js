const cells = [...document.querySelectorAll('.cell')];
const winner = document.querySelector('.winner');
const restart = document.querySelector('.restart');

let index = "";
let playerX = [];
let playerO = [];
let playerTurn = "x"
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
let gameBoard = [
 ["", "", ""],
 ["", "", ""],
 ["", "", ""]
]


const addSymbol = (e) => {


 if (e.target.classList[1] == "x"|| e.target.classList[1] == "o") {return}
 e.target.classList.add(playerTurn)
 if(playerTurn == "x") {
  playerTurn = "o";
 } else if (playerTurn == "o") {
  playerTurn = "x";
  
 }
 



}

const addIndex = () => {
 if (playerTurn == "x") {
  playerX.push(index)
  console.log(playerX)
 } 
 else if(playerTurn == "o") {
  playerO.push(index);
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
  addIndex();
  
 })
 
}






