import GameBoard from "./gameBoard";

export default class Player {
  playerType: "Human" | "Computer";
  playerSignAvailable: string[] = ["O", "X"];
  playerSign: string;
  gameBoard: GameBoard;
  constructor(
    gameBoard: GameBoard,
    playerType: "Human" | "Computer",
    playerNumber: number
  ) {
    this.gameBoard = gameBoard;
    this.playerType = playerType;
    this.playerSign = this.playerSignAvailable[playerNumber];
  }
}
