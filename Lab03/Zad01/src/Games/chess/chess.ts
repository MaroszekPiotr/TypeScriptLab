import { IGame } from "../../Igame";

export class Chess implements IGame {
  name: string;

  constructor() {
    this.name = "Szachy";
  }
  getGameElement(): HTMLElement {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode("Hello Chess"));
    return div;
  }
}
