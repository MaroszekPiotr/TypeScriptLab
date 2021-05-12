import { Guid } from "../../../../helpers/guid";
import { IGameState } from "./IGameState";

export default class Cell implements IGameState {
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
