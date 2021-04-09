import { IGame } from "../../Igame";

export class BattleShips implements IGame {
  name: string;

  constructor() {
    this.name = "Statki";
  }
  getGameElement(): HTMLElement {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode("Hello BattleShips"));
    return div;
  }
  DrawGameBoard(): HTMLElement {
    return null;
  }
}
