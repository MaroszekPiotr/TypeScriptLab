import { Guid } from "../../../../helpers/guid";
import { IGameMoveHistory } from "./IGameMoveHistory";

export interface IGameSave {
  gameID: Guid;
  gameSize: number;
  gameState: IGameMoveHistory[];
}
