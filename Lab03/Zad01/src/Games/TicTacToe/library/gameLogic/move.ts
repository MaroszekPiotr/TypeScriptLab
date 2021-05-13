import { Guid } from "../../../../helpers/guid";
import { TicTacToe } from "../../ticTacToe";
import Cell from "./cell";
import GameBoard from "./gameBoard";
import { IGameSave } from "./IGameSave";
import { IGameMoveHistory } from "./IGameMoveHistory";
import { IGameState } from "./IGameState";

export default class Move {
  game: TicTacToe;
  gameBoard: GameBoard;
  constructor(gameBoard: GameBoard) {
    this.game = gameBoard.game;
    this.gameBoard = gameBoard;
  }

  getMove(boardElement: Cell): void {
    if (this.game.isGameEnd === true) return;
    boardElement.tableCellRef.textContent =
      this.game.players[this.game.currentPlayerIndex].playerSign;
    boardElement.playerId = this.game.currentPlayerIndex;
    this.game.moveNumber++;
    boardElement.tableCellRef.removeEventListener(
      "click",
      boardElement.nextMoveRef
    );
    this.gameBoard.gameHistory.push(boardElement);
    // this.game.sessionMoveHistory.addToStorage(boardElement);
    this.game.sessionMoveHistory.addToStorage(this.saveState(boardElement));
    this.game.saveGame.addToStorage(this.saveGame(boardElement));
    if (this.checkIfWin(this.game.currentPlayerIndex, boardElement)) {
      this.game.gameInfoBoxContainer.textContent = `Player "${
        this.game.players[this.game.currentPlayerIndex].playerSign
      }" wins!`;
      this.game.winner = this.game.players[this.game.currentPlayerIndex];
      this.game.isGameEnd = true;
    }
    this.switchPlayer();
  }
  private switchPlayer(): void {
    if (this.game.currentPlayerIndex === this.game.players.length - 1)
      this.game.currentPlayerIndex = 0;
    else this.game.currentPlayerIndex++;
  }

  private saveState(boardElement: Cell): IGameState {
    const game = {
      gameID: this.gameBoard.gameID,
      gameState: this.gameBoard.gameHistory,
    };
    return game;
  }

  private saveGame(boardElement: Cell): IGameSave {
    const game = {
      gameID: this.gameBoard.gameID,
      gameSize: this.game.sizeX,
      gameState: this.gameBoard.gameHistory,
    };
    return game;
  }

  checkIfWin(playerId: number, actualCell: Cell): boolean {
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
