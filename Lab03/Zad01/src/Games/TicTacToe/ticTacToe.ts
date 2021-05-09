import Cell from "./library/gameLogic/cell";
import Player, { PlayerType } from "./library/gameLogic/player";
import { IGame } from "../../Igame";
import TicTacToeUI from "./library/userInterface/ticTacToeUI";
export class TicTacToe implements IGame {
  name: string;
  sizeX: number;
  sizeY: number;
  players: Player[];
  currentPlayerIndex: number;
  lenghtRouteToWin: number;
  boardArray: Cell[];
  moveNumber: number;
  gameBoardContainer: HTMLDivElement;
  gameInfoBoxContainer: HTMLDivElement;
  isGameEnd: boolean = false;
  constructor(sizeX: number = 3, sizeY: number = sizeX) {
    this.name = "Kółko i krzyżyk";
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.boardArray = [];
    this.players = [
      new Player(this, PlayerType.Human, 0),
      new Player(this, PlayerType.Human, 1),
    ];
    this.currentPlayerIndex = 0;
    this.lenghtRouteToWin = 3;
    this.moveNumber = 0;
  }
  getGameElement(): HTMLDivElement {
    const appBoard = <HTMLDivElement>document.createElement("div");
    appBoard.className = "TicTacToeGame";
    const userInterfaceCreator = new TicTacToeUI(this);
    const userInterface = userInterfaceCreator.userInterfaceInit();
    appBoard.appendChild(userInterface);
    // this.createGamePanel(appBoard);
    // this.createGameHistory(appBoard);
    return appBoard;
  }

  // private createGamePanel(appBoard: HTMLDivElement) {
  //   const gamePanel = <HTMLDivElement>document.createElement("div");
  //   gamePanel.className = "gamePanel";
  //   this.createGameTitleContainer(gamePanel);
  //   this.createGameMenuContainer(gamePanel);
  //   this.createGameBoardContainer(gamePanel);
  //   this.createGameInfoBoxContainer(gamePanel);
  //   appBoard.appendChild(gamePanel);
  // }
  // private createGameHistory(appBoard: HTMLDivElement): void {
  //   const gameHistory = <HTMLDivElement>document.createElement("div");
  //   gameHistory.className = "gameHistory";
  //   appBoard.appendChild(gameHistory);
  // }

  // private createGameTitleContainer(gamePanel: HTMLDivElement): void {
  //   const gameTitleContainer = <HTMLDivElement>document.createElement("div");
  //   gameTitleContainer.className = "gameTitle";
  //   const title = <HTMLHeadingElement>document.createElement("h2");
  //   title.textContent = "TicTacToe";
  //   gameTitleContainer.appendChild(title);
  //   gamePanel.appendChild(gameTitleContainer);
  // }

  // private createGameMenuContainer(gamePanel: HTMLDivElement): void {}

  // private createGameInfoBoxContainer(gamePanel: HTMLDivElement): void {}

  // private createGameBoardContainer(gamePanel: HTMLDivElement): void {
  //   const gameBoardContainer = <HTMLDivElement>document.createElement("div");
  //   gameBoardContainer.className = "gameBoard";
  //   this.createGameBoard(gameBoardContainer);
  //   gamePanel.appendChild(gameBoardContainer);
  // }

  // private createGameBoard(gameBoardContainer: HTMLDivElement): void {
  //   const gameBoardTable: HTMLTableElement = <HTMLTableElement>(
  //     document.createElement("table")
  //   );
  //   for (let i = 0; i < this.sizeX; i++) {
  //     const row: HTMLTableRowElement = <HTMLTableRowElement>(
  //       document.createElement("tr")
  //     );
  //     for (let j = 0; j < this.sizeY; j++) {
  //       this.addCell(row, i, j);
  //     }
  //     gameBoardTable.appendChild(row);
  //   }
  //   gameBoardContainer.appendChild(gameBoardTable);
  // }
  // private addCell(
  //   row: HTMLElement,
  //   rowPosition: number,
  //   columnPosition: number = 1
  // ): void {
  //   const boardElement = new Cell(rowPosition, columnPosition);
  //   this.boardArray.push(boardElement);
  //   const cell: HTMLTableCellElement = <HTMLTableDataCellElement>(
  //     document.createElement("td")
  //   );
  //   cell.textContent = "";
  //   const functionReference = () =>
  //     this.getMove(cell, boardElement, functionReference);
  //   cell.addEventListener("click", functionReference);
  //   row.appendChild(cell);
  // }
  // private getMove(
  //   cell: HTMLTableCellElement,
  //   boardElement: Cell,
  //   functionReference
  // ): void {
  //   cell.textContent = this.players[this.currentPlayerIndex].playerSign;
  //   boardElement.playerId = this.currentPlayerIndex;
  //   this.moveNumber++;
  //   cell.removeEventListener("click", functionReference);
  //   if (this.checkIfWin(this.currentPlayerIndex, boardElement))
  //     console.log("wygrana");
  //   this.switchPlayer();
  // }
  // private switchPlayer(): void {
  //   if (this.currentPlayerIndex === this.players.length - 1)
  //     this.currentPlayerIndex = 0;
  //   else this.currentPlayerIndex++;
  // }
  // private checkIfWin(playerId: number, actualCell: Cell): boolean {
  //   if (this.moveNumber >= this.lenghtRouteToWin * this.players.length - 1) {
  //     const playerPositions: Cell[] = this.boardArray.filter(
  //       (cell) => cell.playerId === playerId
  //     );
  //     if (this.checkVertical(actualCell, playerPositions)) return true;
  //     if (this.checkHorizontal(actualCell, playerPositions)) return true;
  //     if (this.checkDiagonalLeft(actualCell, playerPositions)) return true;
  //     if (this.checkDiagonalRight(actualCell, playerPositions)) return true;
  //   }
  //   return false;
  // }

  // private checkVertical(actualCell: Cell, playerPositions: Cell[]): boolean {
  //   let counter = 1;
  //   let i: number;
  //   const checkCondition = () =>
  //     playerPositions.findIndex(
  //       (position) =>
  //         position.positionY === actualCell.positionY &&
  //         position.positionX === i
  //     );
  //   for (i = actualCell.positionX - 1; i >= 0; i--) {
  //     if (checkCondition() >= 0) counter++;
  //     else break;
  //   }
  //   for (i = actualCell.positionX + 1; i >= 0; i++) {
  //     if (checkCondition() >= 0) counter++;
  //     else break;
  //   }
  //   if (counter >= this.lenghtRouteToWin) return true;
  //   return false;
  // }
  // private checkHorizontal(actualCell: Cell, playerPositions: Cell[]): boolean {
  //   let counter = 1;
  //   let i: number;
  //   const checkCondition = () =>
  //     playerPositions.findIndex(
  //       (position) =>
  //         position.positionX === actualCell.positionX &&
  //         position.positionY === i
  //     );
  //   for (i = actualCell.positionY - 1; i >= 0; i--) {
  //     if (checkCondition() >= 0) counter++;
  //     else break;
  //   }
  //   for (i = actualCell.positionY + 1; i >= 0; i++) {
  //     if (checkCondition() >= 0) counter++;
  //     else break;
  //   }
  //   if (counter >= this.lenghtRouteToWin) return true;
  //   return false;
  // }
  // private checkDiagonalLeft(
  //   actualCell: Cell,
  //   playerPositions: Cell[]
  // ): boolean {
  //   let counter = 1;
  //   let i: number;
  //   let j: number;
  //   const checkCondition = () =>
  //     playerPositions.findIndex(
  //       (position) => position.positionX === i && position.positionY === j
  //     );
  //   // prettier-ignore
  //   for (i = actualCell.positionX - 1, j = actualCell.positionY - 1; i >= 0; i--, j--) {
  //     if (checkCondition() >= 0) counter++;
  //     else break;
  //   }
  //   // prettier-ignore
  //   for (i = actualCell.positionX + 1, j = actualCell.positionY + 1; i >= 0; i++, j++) {
  //     if (checkCondition() >= 0) counter++;
  //     else break;
  //   }
  //   if (counter >= this.lenghtRouteToWin) return true;
  //   return false;
  // }
  // private checkDiagonalRight(
  //   actualCell: Cell,
  //   playerPositions: Cell[]
  // ): boolean {
  //   let counter = 1;
  //   let i: number;
  //   let j: number;
  //   const checkCondition = () =>
  //     playerPositions.findIndex(
  //       (position) => position.positionX === i && position.positionY === j
  //     );
  //   // prettier-ignore
  //   for (i = actualCell.positionX + 1, j = actualCell.positionY - 1; j >= 0; i++, j--) {
  //     if (checkCondition() >= 0) counter++;
  //     else break;
  //   }
  //   // prettier-ignore
  //   for (i = actualCell.positionX - 1, j = actualCell.positionY + 1; i >= 0;i--, j++) {
  //     if (checkCondition() >= 0) counter++;
  //     else break;
  //   }
  //   if (counter >= this.lenghtRouteToWin) return true;
  //   return false;
  // }
}
