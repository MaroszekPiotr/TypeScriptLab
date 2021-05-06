import { Guid } from "../../helpers/guid";

export default class Cell {
  //dodać guid
  id: Guid;
  playerId: number;
  cellValue: "" | "X" | "O";
  positionX: number;
  positionY: number;
  constructor(positionX: number, positionY: number) {
    this.cellValue = "";
    this.positionX = positionX;
    this.positionY = positionY;
    this.id = Guid.newGuid();
  }
  printCell() {
    let value: SVGElement;
  }
}
