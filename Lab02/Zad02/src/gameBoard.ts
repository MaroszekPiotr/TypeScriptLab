import Cell from "./cell";
import Player from "./player";
export default class GameBoard {
  sizeX: number;
  sizeY: number;
  players: Player[];
  currentPlayerIndex: number;
  lenghtRouteToWin: number;
  boardArray: Cell[];
  constructor(sizeX: number = 3, sizeY: number = sizeX) {
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.boardArray = [];
    this.players = [new Player(this, "Human", 0), new Player(this, "Human", 1)];
    this.currentPlayerIndex = 0;
    this.lenghtRouteToWin = 3;
  }
  DrawGameBoard(): HTMLTableElement {
    const htmlBoard: HTMLTableElement = document.createElement("table");
    htmlBoard.className = "GameBoard";
    this.CreateGameBoard(htmlBoard, this.sizeX, this.sizeY);
    return htmlBoard;
  }
  private CreateGameBoard(
    htmlBoard: HTMLTableElement,
    numberOfRows: number = 1,
    numberOfCells: number = 1
  ): void {
    for (let i = 0; i < numberOfRows; i++) {
      const row: HTMLElement = document.createElement("tr");
      for (let j = 0; j < numberOfCells; j++) {
        this.AddCell(row, numberOfCells);
      }
      htmlBoard.appendChild(row);
    }
  }
  private AddCell(
    row: HTMLElement,
    rowPosition: number,
    columnPosition: number = 1
  ): void {
    const boardElement = new Cell(rowPosition, columnPosition);
    this.boardArray.push(boardElement);
    const cell: HTMLTableCellElement = document.createElement("td");
    cell.textContent = "0";
    const functionReference = () =>
      this.GetMove(cell, boardElement, functionReference);
    cell.addEventListener("click", functionReference);
    row.appendChild(cell);
  }
  private GetMove(
    cell: HTMLTableCellElement,
    boardElement: Cell,
    functionReference
  ): void {
    cell.textContent = this.players[this.currentPlayerIndex].playerSign;
    boardElement.playerId = this.currentPlayerIndex;
    cell.removeEventListener("click", functionReference);
    this.SwitchPlayer();
  }
  private SwitchPlayer(): void {
    if (this.currentPlayerIndex === this.players.length - 1)
      this.currentPlayerIndex = 0;
    else this.currentPlayerIndex++;
  }
  private CheckIfWin(playerId: number, actualCell: Cell): void {}
}
