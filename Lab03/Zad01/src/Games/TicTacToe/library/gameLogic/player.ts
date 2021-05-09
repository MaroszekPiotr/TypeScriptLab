import { TicTacToe } from "../../ticTacToe";

export enum PlayerType {
  Human = "Human",
  Computer = "Computer",
}

export default class Player {
  playerType: PlayerType;
  playerSignAvailable: string[] = ["O", "X"];
  playerSign: string;
  gameBoard: TicTacToe;
  constructor(
    gameBoard: TicTacToe,
    playerType: PlayerType,
    playerNumber: number
  ) {
    this.gameBoard = gameBoard;
    this.playerType = playerType;
    this.playerSign = this.playerSignAvailable[playerNumber];
  }
}
