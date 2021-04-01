import GameBoard from "./gameBoard";
const root = document.getElementById("root");
root.appendChild(new GameBoard(3, 3).DrawGameBoard());
