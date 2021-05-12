import { Guid } from "../../../../helpers/guid";
import { IGameState } from "./IGameState";

export interface IGameSave {
  gameID: Guid;
  gameSize: number;
  gameState: IGameState[];
}
