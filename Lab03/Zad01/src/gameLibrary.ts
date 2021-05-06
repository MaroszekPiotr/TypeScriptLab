import { IGame } from "./Igame";
import { ThemeSwitch } from "./themeSwitch";
import { AvailableGames } from "./availableGames";
import { GameFactory } from "./gameFactory";
import { GameBoard as TicTacToe } from "./Games/TicTacToe/gameBoard";
import { BattleShips } from "./Games/Battleships/battleships";
export class GameLibrary {
  gameLibrary: IGame[];
  gameContainer: HTMLDivElement;
  constructor() {
    this.gameLibrary = [];
    this.init();
  }
  init(): void {
    const menuContainer = <HTMLDivElement>document.createElement("div"); // kontener menu dostępnych gier
    menuContainer.className = "menu";
    this.AddThemeSwitcher(menuContainer);
    this.gameContainer = <HTMLDivElement>document.createElement("div"); // kontener główny ekranu z grą
    this.gameContainer.className = "game";
    const list = <HTMLUListElement>document.createElement("ul"); // lista pozycji w menu dostępnych gier
    this.GetGames();
    this.DrawGameList(list);
    menuContainer.appendChild(list);
    document.body.appendChild(menuContainer);
    document.body.appendChild(this.gameContainer);
  }

  private AddThemeSwitcher(appendChildNode: HTMLDivElement) {
    const themeSwitchBtn: HTMLButtonElement = document.createElement("button");
    themeSwitchBtn.textContent = "switch Theme";
    const themeSwitcher = new ThemeSwitch();
    themeSwitcher.AddButton(themeSwitchBtn);
    const themes = ["dark", "light"];
    themeSwitcher.AddThemes(themes);
    themeSwitcher.Init();
    appendChildNode.appendChild(themeSwitchBtn);
  }
  private GetGames(): void {
    const gameFactory = new GameFactory();
    for (let game in AvailableGames) {
      if (!isNaN(Number(game))) {
        const newGame = gameFactory.GameCreator(AvailableGames[game]);

        this.gameLibrary.push(newGame);
      }
    }
  }
  private DrawGameList(nodePath: HTMLUListElement): void {
    this.gameLibrary.forEach((game, index) => {
      const gameName = document.createElement("li");
      gameName.addEventListener("click", () => this.PlayGame(index));
      gameName.textContent = game.name;
      nodePath.appendChild(gameName);
    });
  }
  private PlayGame(index: number): void {
    this.gameContainer.textContent = null;
    this.gameContainer.appendChild(this.gameLibrary[index].DrawGameBoard());
  }
}
