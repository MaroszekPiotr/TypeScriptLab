import { getElement } from "../../decorators/getElement";
import { IGame } from "../../Igame";

export class BattleShips implements IGame {
  name: string;

  constructor() {
    this.name = "BattleShips";
  }
  @getElement
  getGameElement(): HTMLElement {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode("Hello BattleShips"));
    return div;
  }
}
