import { TicTacToe } from "../../ticTacToe";
import Cell from "./cell";

export default class GameBoard {
  game: TicTacToe;
  constructor(game: TicTacToe) {
    this.game = game;
    this.createGameBoard(this.game.gameBoardContainer);
  }
  createGameBoard(gameBoardContainer: HTMLDivElement): void {
    this.game.gameBoardContainer.textContent = "";
    this.game.gameInfoBoxContainer.textContent = "";
    this.game.isGameEnd = false;
    this.game.boardArray.length = 0;
    const gameBoardTable: HTMLTableElement = <HTMLTableElement>(
      document.createElement("table")
    );
    for (let i = 0; i < this.game.sizeX; i++) {
      const row: HTMLTableRowElement = <HTMLTableRowElement>(
        document.createElement("tr")
      );
      for (let j = 0; j < this.game.sizeY; j++) {
        this.addCell(row, i, j);
      }
      gameBoardTable.appendChild(row);
    }
    gameBoardContainer.appendChild(gameBoardTable);
  }
  private addCell(
    row: HTMLElement,
    rowPosition: number,
    columnPosition: number = 1
  ): void {
    const boardElement = new Cell(rowPosition, columnPosition);
    this.game.boardArray.push(boardElement);
    const cell: HTMLTableCellElement = <HTMLTableDataCellElement>(
      document.createElement("td")
    );
    cell.textContent = "";
    const nextMoveRef = () => this.getMove(cell, boardElement, nextMoveRef);
    cell.addEventListener("click", nextMoveRef);
    row.appendChild(cell);
  }
  private getMove(
    cell: HTMLTableCellElement,
    boardElement: Cell,
    functionReference
  ): void {
    if (this.game.isGameEnd === true) return;
    cell.textContent = this.game.players[
      this.game.currentPlayerIndex
    ].playerSign;
    boardElement.playerId = this.game.currentPlayerIndex;
    this.game.moveNumber++;
    cell.removeEventListener("click", functionReference);
    if (this.checkIfWin(this.game.currentPlayerIndex, boardElement)) {
      this.game.gameInfoBoxContainer.textContent = `Player "${
        this.game.players[this.game.currentPlayerIndex].playerSign
      }" wins!`;
      this.game.isGameEnd = true;
    }
    this.switchPlayer();
  }
  private switchPlayer(): void {
    if (this.game.currentPlayerIndex === this.game.players.length - 1)
      this.game.currentPlayerIndex = 0;
    else this.game.currentPlayerIndex++;
  }
  private checkIfWin(playerId: number, actualCell: Cell): boolean {
    if (
      this.game.moveNumber >=
      this.game.lenghtRouteToWin * this.game.players.length - 1
    ) {
      const playerPositions: Cell[] = this.game.boardArray.filter(
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
    if (counter >= this.game.lenghtRouteToWin) return true;
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
    if (counter >= this.game.lenghtRouteToWin) return true;
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
    if (counter >= this.game.lenghtRouteToWin) return true;
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
    if (counter >= this.game.lenghtRouteToWin) return true;
    return false;
  }
}
