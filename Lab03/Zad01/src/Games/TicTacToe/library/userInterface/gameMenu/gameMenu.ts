import { ThemeSwitch } from "../../../../../themeSwitch";
import { TicTacToe } from "../../../ticTacToe";
import GameBoard from "../../gameLogic/gameBoard";
import { IGameMoveHistory } from "../../gameLogic/IGameMoveHistory";
import { IGameState } from "../../gameLogic/IGameState";

export default class GameMenu {
  game: TicTacToe;
  constructor(game: TicTacToe) {
    this.game = game;
  }
  menuInit(): HTMLDivElement {
    const menu = <HTMLDivElement>document.createElement("div");
    menu.className = "gameMenu";
    this.setBoardSize(menu);
    this.newGameBtn(menu);
    this.prevGameTurn(menu);
    this.setGameSkin(menu);
    return menu;
  }
  private setBoardSize(menuNode: HTMLDivElement) {
    const label = <HTMLLabelElement>document.createElement("label");
    const input = <HTMLInputElement>document.createElement("input");
    label.textContent = "Board size:";
    input.type = "number";
    input.value = "3";
    input.size = 1;
    input.min = "3";
    input.max = "9";
    input.id = "inputBoardSizeStyle";
    input.addEventListener("change", (e: any) => this.setBoard(e.target.value));
    label.appendChild(input);
    menuNode.appendChild(label);
  }
  private newGameBtn(menuNode: HTMLDivElement) {
    const label = <HTMLLabelElement>document.createElement("label");
    label.textContent = "new game";
    const btn = <HTMLButtonElement>document.createElement("button");
    btn.textContent = "new game";
    btn.addEventListener("click", () => this.setNewGame());
    label.appendChild(btn);
    menuNode.appendChild(label);
  }
  private prevGameTurn(menuNode: HTMLDivElement) {
    const label = <HTMLLabelElement>document.createElement("label");
    label.textContent = "get turn back";
    const btn = <HTMLButtonElement>document.createElement("button");
    btn.textContent = "previous";
    btn.addEventListener("click", () => this.prevTurn());
    label.appendChild(btn);
    menuNode.appendChild(label);
  }
  private setGameSkin(menuNode: HTMLDivElement) {
    const label = <HTMLLabelElement>document.createElement("label");
    label.textContent = "skin";
    const switchSkin = this.availableSkinList();
    label.appendChild(switchSkin);
    menuNode.appendChild(label);
  }

  private availableSkinList(): HTMLSelectElement {
    const switchSkin = <HTMLSelectElement>document.createElement("select");
    // skórki dla activeGame:
    // const dsa: HTMLElement = document.querySelector(".activeGame");
    const themeSwitcher = new ThemeSwitch();
    const skinList = ["dark", "light", "blue", "orange"];
    themeSwitcher.addThemes(skinList);
    themeSwitcher.init();
    skinList.forEach((skin, index) => {
      const element = <HTMLOptionElement>document.createElement("option");
      element.value = index.toString();
      element.textContent = skin;
      switchSkin.appendChild(element);
    });
    switchSkin.addEventListener("change", function () {
      themeSwitcher.changeTheme(Number(this.value));
    });
    return switchSkin;
  }
  private setBoard(gameBoardSize: number) {
    this.game.sizeX = gameBoardSize;
    this.game.sizeY = gameBoardSize;
    this.game.lenghtRouteToWin = gameBoardSize;
  }
  private setNewGame() {
    new GameBoard(this.game);
  }

  private prevTurn(stepBefore: number = 1) {
    const gameSession: IGameState = this.game.sessionMoveHistory.getFromStore();
    if (gameSession === null || gameSession === undefined) return;
    const gameSave: IGameMoveHistory[] = gameSession.gameState;
    const gameID = gameSession.gameID;
    if (gameSave.length < 1) return;
    const gameLength = gameSave.length - stepBefore;
    const gameToLoad = gameSave.slice(0, gameLength);
    new GameBoard(this.game, gameID).loadGameState(gameToLoad);
  }
}
