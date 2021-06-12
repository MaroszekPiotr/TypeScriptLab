import Cell from "./library/gameLogic/cell";
import Player, { PlayerType } from "./library/gameLogic/player";
import { IGame } from "../../Igame";
import TicTacToeUI from "./library/userInterface/ticTacToeUI";
import { SessionStorageStore } from "./library/storageHelpers/sessionStorage";
import { LocalStorageStore } from "./library/storageHelpers/localStorage";
import { Guid } from "../../helpers/guid";
import { IGameMoveHistory } from "./library/gameLogic/IGameMoveHistory";
import { getElement } from "../../decorators/getElement";
export class TicTacToe implements IGame {
  boardArray: Cell[];
  currentPlayerIndex: number;
  gameBoardContainer: HTMLDivElement;
  gameInfoBoxContainer: HTMLDivElement;
  isGameEnd: boolean = false;
  lenghtRouteToWin: number;
  moveNumber: number;
  name: string;
  players: Player[];
  saveGame: LocalStorageStore;
  sessionMoveHistory: SessionStorageStore;
  sizeX: number;
  sizeY: number;
  winner: Player = null;
  constructor(sizeX: number = 3, sizeY: number = sizeX) {
    this.name = "TicTacToe";
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.boardArray = [];
    this.players = [
      new Player(this, PlayerType.Human, 0),
      new Player(this, PlayerType.Human, 1),
    ];
    this.currentPlayerIndex = 0;
    this.lenghtRouteToWin = 3;
    this.moveNumber = 0;
    this.sessionMoveHistory = new SessionStorageStore("moveHistory");
    this.saveGame = new LocalStorageStore("gameSaves");
  }
  @getElement
  getGameElement(): HTMLDivElement {
    const appBoard = <HTMLDivElement>document.createElement("div");
    appBoard.className = "TicTacToeGame";
    const userInterfaceCreator = new TicTacToeUI(this);
    const userInterface = userInterfaceCreator.userInterfaceInit();
    appBoard.appendChild(userInterface);
    return appBoard;
  }
}
