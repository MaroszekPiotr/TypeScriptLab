import Cell from "./cell";
import Player from "./player";
import { IGame } from "../../Igame";
export class GameBoard implements IGame {
  name: string;
  sizeX: number;
  sizeY: number;
  players: Player[];
  currentPlayerIndex: number;
  lenghtRouteToWin: number;
  boardArray: Cell[];
  moveNumber: number;
  constructor(sizeX: number = 3, sizeY: number = sizeX) {
    this.name = "Kółko i krzyżyk";
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.boardArray = [];
    this.players = [new Player(this, "Human", 0), new Player(this, "Human", 1)];
    this.currentPlayerIndex = 0;
    this.lenghtRouteToWin = 3;
    this.moveNumber = 0;
  }
  getGameElement(): HTMLElement {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode("Hello TicTacToe"));
    return div;
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
        this.AddCell(row, i, j);
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
    cell.textContent = "";
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
    this.moveNumber++;
    cell.removeEventListener("click", functionReference);
    if (this.CheckIfWin(this.currentPlayerIndex, boardElement))
      console.log("wygrana");
    this.SwitchPlayer();
  }
  private SwitchPlayer(): void {
    if (this.currentPlayerIndex === this.players.length - 1)
      this.currentPlayerIndex = 0;
    else this.currentPlayerIndex++;
  }
  private CheckIfWin(playerId: number, actualCell: Cell): boolean {
    if (this.moveNumber >= this.lenghtRouteToWin * this.players.length - 1) {
      const playerPositions: Cell[] = this.boardArray.filter(
        (cell) => cell.playerId === playerId
      );
      if (this.checkVertical(actualCell, playerPositions)) return true;
      if (this.checkHorizontal(actualCell, playerPositions)) return true;
      if (this.checkDiagonalLeft(actualCell, playerPositions)) return true;
      if (this.checkDiagonalRight(actualCell, playerPositions)) return true;
    }
    return false;
  }

  private checkVertical(actualCell: Cell, playerPositions: Cell[]): boolean {
    let counter = 1;
    let i: number;
    const checkCondition = () =>
      playerPositions.findIndex(
        (position) =>
          position.positionY === actualCell.positionY &&
          position.positionX === i
      );
    for (i = actualCell.positionX - 1; i >= 0; i--) {
      if (checkCondition() >= 0) counter++;
      else break;
    }
    for (i = actualCell.positionX + 1; i >= 0; i++) {
      if (checkCondition() >= 0) counter++;
      else break;
    }
    if (counter >= this.lenghtRouteToWin) return true;
    return false;
  }
  private checkHorizontal(actualCell: Cell, playerPositions: Cell[]): boolean {
    let counter = 1;
    let i: number;
    const checkCondition = () =>
      playerPositions.findIndex(
        (position) =>
          position.positionX === actualCell.positionX &&
          position.positionY === i
      );
    for (i = actualCell.positionY - 1; i >= 0; i--) {
      if (checkCondition() >= 0) counter++;
      else break;
    }
    for (i = actualCell.positionY + 1; i >= 0; i++) {
      if (checkCondition() >= 0) counter++;
      else break;
    }
    if (counter >= this.lenghtRouteToWin) return true;
    return false;
  }
  private checkDiagonalLeft(
    actualCell: Cell,
    playerPositions: Cell[]
  ): boolean {
    let counter = 1;
    let i: number;
    let j: number;
    const checkCondition = () =>
      playerPositions.findIndex(
        (position) => position.positionX === i && position.positionY === j
      );
    // prettier-ignore
    for (i = actualCell.positionX - 1, j = actualCell.positionY - 1; i >= 0; i--, j--) {
      if (checkCondition() >= 0) counter++;
      else break;
    }
    // prettier-ignore
    for (i = actualCell.positionX + 1, j = actualCell.positionY + 1; i >= 0; i++, j++) {
      if (checkCondition() >= 0) counter++;
      else break;
    }
    if (counter >= this.lenghtRouteToWin) return true;
    return false;
  }
  private checkDiagonalRight(
    actualCell: Cell,
    playerPositions: Cell[]
  ): boolean {
    let counter = 1;
    let i: number;
    let j: number;
    const checkCondition = () =>
      playerPositions.findIndex(
        (position) => position.positionX === i && position.positionY === j
      );
    // prettier-ignore
    for (i = actualCell.positionX + 1, j = actualCell.positionY - 1; j >= 0; i++, j--) {
      if (checkCondition() >= 0) counter++;
      else break;
    }
    // prettier-ignore
    for (i = actualCell.positionX - 1, j = actualCell.positionY + 1; i >= 0;i--, j++) {
      if (checkCondition() >= 0) counter++;
      else break;
    }
    if (counter >= this.lenghtRouteToWin) return true;
    return false;
  }
}
