import { Guid } from "../../../../helpers/guid";
import { IGameMoveHistory } from "./IGameMoveHistory";

export default class Cell implements IGameMoveHistory {
  id: Guid;
  playerId: number;
  positionX: number;
  positionY: number;
  nextMoveRef: any;
  tableCellRef: HTMLTableCellElement;
  constructor(positionX: number, positionY: number) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.id = Guid.newGuid();
  }
}
