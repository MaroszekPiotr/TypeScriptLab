import { TicTacToe } from "../../ticTacToe";
import GameMenu from "./gameMenu/gameMenu";

export default class TicTacToeUI {
  game: TicTacToe;
  constructor(game: TicTacToe) {
    this.game = game;
    // this.userInterfaceInit();
  }
  userInterfaceInit(): HTMLDivElement {
    const appBoard = <HTMLDivElement>document.createElement("div");
    appBoard.className = "TicTacToeGame";
    this.createGamePanel(appBoard);
    this.createGameHistory(appBoard);
    return appBoard;
  }
  private createGamePanel(appBoard: HTMLDivElement) {
    const gamePanel = <HTMLDivElement>document.createElement("div");
    gamePanel.className = "gamePanel";
    this.createGameTitleContainer(gamePanel);
    this.createGameMenuContainer(gamePanel);
    this.createGameBoardContainer(gamePanel);
    this.createGameInfoBoxContainer(gamePanel);
    appBoard.appendChild(gamePanel);
  }
  private createGameHistory(appBoard: HTMLDivElement): void {
    const gameHistory = <HTMLDivElement>document.createElement("div");
    gameHistory.className = "gameHistory";
    appBoard.appendChild(gameHistory);
  }

  private createGameTitleContainer(gamePanel: HTMLDivElement): void {
    const gameTitleContainer = <HTMLDivElement>document.createElement("div");
    gameTitleContainer.className = "gameTitle";
    const title = <HTMLHeadingElement>document.createElement("h2");
    title.textContent = "TicTacToe";
    gameTitleContainer.appendChild(title);
    gamePanel.appendChild(gameTitleContainer);
  }

  private createGameMenuContainer(gamePanel: HTMLDivElement): void {
    const menuCreator = new GameMenu();
    const temp = menuCreator.menuInit();
    gamePanel.appendChild(temp);
  }

  private createGameInfoBoxContainer(gamePanel: HTMLDivElement): void {}

  private createGameBoardContainer(gamePanel: HTMLDivElement): void {
    const gameBoardContainer = <HTMLDivElement>document.createElement("div");
    gameBoardContainer.className = "gameBoard";
    // this.createGameBoard(gameBoardContainer);
    gamePanel.appendChild(gameBoardContainer);
  }
}
