import { Guid } from "../../../../helpers/guid";
import { IGameMoveHistory } from "./IGameMoveHistory";

export interface IGameState {
  gameID: Guid;
  gameState: IGameMoveHistory[];
}
