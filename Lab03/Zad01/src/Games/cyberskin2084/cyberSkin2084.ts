import { IGame } from "../../Igame";

export class CyberSkin2084 implements IGame {
  name: string;

  constructor() {
    this.name = "CyberSkin2084";
  }
  getGameElement(): HTMLElement {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode("Hello Cyber Skin 2084"));
    return div;
  }
}
