import { IGame } from "../../Igame";

export class Miner implements IGame {
  name: string;

  constructor() {
    this.name = "Miner";
  }
  getGameElement(): HTMLElement {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode("Hello Miner"));
    return div;
  }
}
