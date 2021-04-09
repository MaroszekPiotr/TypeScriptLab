import { IGame } from "./Igame";
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
    this.gameContainer = <HTMLDivElement>document.createElement("div"); // kontener główny ekranu z grą
    const list = <HTMLUListElement>document.createElement("ul"); // lista pozycji w menu dostępnych gier
    this.GetGames();
    this.DrawGameList(list);
    // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum
    // zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą
    // samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.
    // Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartościach enum'a

    menuContainer.appendChild(list);
    document.body.appendChild(menuContainer);
    document.body.appendChild(this.gameContainer);
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
