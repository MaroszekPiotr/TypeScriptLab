import { TicTacToe } from "./ticTacToe";

export default class Player {
  playerType: "Human" | "Computer";
  playerSignAvailable: string[] = ["O", "X"];
  playerSign: string;
  gameBoard: TicTacToe;
  constructor(
    gameBoard: TicTacToe,
    playerType: "Human" | "Computer",
    playerNumber: number
  ) {
    this.gameBoard = gameBoard;
    this.playerType = playerType;
    this.playerSign = this.playerSignAvailable[playerNumber];
  }
}
