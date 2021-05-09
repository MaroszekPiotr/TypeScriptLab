import { IGame } from "./Igame";
import { ThemeSwitch } from "./themeSwitch";
import { AvailableGames } from "./availableGames";
import { GameFactory } from "./gameFactory";
export class GameLibrary {
  gameLibrary: IGame[];
  applicationRoot: HTMLDivElement;
  activeGameContainer: HTMLDivElement;
  constructor() {
    this.gameLibrary = [];
    this.init();
  }
  private init(): void {
    this.applicationRoot = <HTMLDivElement>document.createElement("div");
    this.applicationRoot.className = "container";
    this.gameListContainerBuilder(this.applicationRoot);
    this.activeGameContainerBuilder(this.applicationRoot);
    document.body.appendChild(this.applicationRoot);
  }

  private gameListContainerBuilder(applicationRoot: HTMLDivElement) {
    const gameListContainer = <HTMLDivElement>document.createElement("div"); // kontener menu dostępnych gier
    gameListContainer.className = "gameList";
    gameListContainer.textContent = "games library:";
    this.addThemeSwitcher(gameListContainer);
    this.getGames();
    const list = <HTMLUListElement>document.createElement("ul"); // lista pozycji w menu dostępnych gier
    this.drawGameList(list);
    gameListContainer.appendChild(list);
    applicationRoot.appendChild(gameListContainer);
  }

  private activeGameContainerBuilder(applicationRoot: HTMLDivElement) {
    this.activeGameContainer = <HTMLDivElement>document.createElement("div"); // kontener główny ekranu z grą
    this.activeGameContainer.className = "activeGame";
    applicationRoot.appendChild(this.activeGameContainer);
  }
  private addThemeSwitcher(appendChildNode: HTMLDivElement) {
    const themeSwitchBtn: HTMLButtonElement = document.createElement("button");
    themeSwitchBtn.textContent = "switch Theme";
    const themeSwitcher = new ThemeSwitch();
    themeSwitcher.addButton(themeSwitchBtn);
    const themes = ["dark", "light"];
    themeSwitcher.addThemes(themes);
    themeSwitcher.init();
    appendChildNode.appendChild(themeSwitchBtn);
  }
  private getGames(): void {
    const gameFactory = new GameFactory();
    for (let game in AvailableGames) {
      if (AvailableGames) {
        const newGame = gameFactory.gameCreator(AvailableGames[game]);
        this.gameLibrary.push(newGame);
      }
    }
  }
  private drawGameList(nodePath: HTMLUListElement): void {
    this.gameLibrary.forEach((game, index) => {
      const gameName = <HTMLButtonElement>document.createElement("button");
      gameName.addEventListener("click", () => this.playGame(index));
      gameName.textContent = game.name;
      nodePath.appendChild(gameName);
    });
  }
  private playGame(index: number): void {
    this.activeGameContainer.textContent = null;
    this.activeGameContainer.appendChild(
      this.gameLibrary[index].getGameElement()
    );
  }
}
