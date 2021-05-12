import { Guid } from "../../../../helpers/guid";

interface TableCellRef {}

export interface IGameState {
  positionX: number;
  positionY: number;
  id: Guid;
  tableCellRef: TableCellRef;
  playerId: number;
}
