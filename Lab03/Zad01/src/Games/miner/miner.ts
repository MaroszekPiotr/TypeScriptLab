import { getElement } from "../../decorators/getElement";
import { IGame } from "../../Igame";

export class Miner implements IGame {
  name: string;

  constructor() {
    this.name = "Miner";
  }
  @getElement
  getGameElement(): HTMLElement {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode("Hello Miner"));
    return div;
  }
}
