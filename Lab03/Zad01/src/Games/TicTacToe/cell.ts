export default class Cell {
  playerId: number;
  cellValue: "" | "X" | "O";
  positionX: number;
  positionY: number;
  constructor(positionX: number, positionY: number) {
    this.cellValue = "";
    this.positionX = positionX;
    this.positionY = positionY;
  }
  printCell() {
    let value: SVGElement;
  }
}
