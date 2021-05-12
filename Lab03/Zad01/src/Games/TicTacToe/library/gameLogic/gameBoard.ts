import { Guid } from "../../../../helpers/guid";
import { TicTacToe } from "../../ticTacToe";
import { SessionStorageStore } from "../storageHelpers/sessionStorage";
import Cell from "./cell";
import { IGameState } from "./IGameState";
import Move from "./move";

export default class GameBoard {
  game: TicTacToe;
  move: Move;
  gameHistory: Cell[] = [];
  constructor(game: TicTacToe) {
    this.game = game;
    this.createGameBoard(this.game.gameBoardContainer);
    this.move = new Move(this.game);
  }
  createGameBoard(gameBoardContainer: HTMLDivElement): void {
    // if (this.game.gameID === null) this.game.gameID = Guid.newGuid();
    this.game.gameBoardContainer.textContent = "";
    this.game.gameInfoBoxContainer.textContent = "";
    this.game.isGameEnd = false;
    this.game.boardArray.length = 0;
    this.game.sessionMoveHistory.deleteStorage();
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
    const nextMoveRef = () => this.move.getMove(boardElement);
    boardElement.nextMoveRef = nextMoveRef;
    boardElement.tableCellRef = cell;
    boardElement.tableCellRef.textContent = "";
    cell.addEventListener("click", nextMoveRef);
    row.appendChild(cell);
  }

  loadGameState(gameStore: IGameState[]) {
    this.createGameBoard(this.game.gameBoardContainer);
    this.game.currentPlayerIndex = 0;
    gameStore.map((turn) => {
      const actualCell: Cell = this.game.boardArray.find(
        (element) =>
          element.positionX === turn.positionX &&
          element.positionY === turn.positionY
      );
      this.move.getMove(actualCell);
    });
  }
}
