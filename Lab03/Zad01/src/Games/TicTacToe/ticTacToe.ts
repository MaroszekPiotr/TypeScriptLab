import Cell from "./library/gameLogic/cell";
import Player, { PlayerType } from "./library/gameLogic/player";
import { IGame } from "../../Igame";
import TicTacToeUI from "./library/userInterface/ticTacToeUI";
import { SessionStorageStore } from "./library/storageHelpers/sessionStorage";
import { LocalStorageStore } from "./library/storageHelpers/localStorage";
import { Guid } from "../../helpers/guid";
import { IGameState } from "./library/gameLogic/IGameState";
export class TicTacToe implements IGame {
  boardArray: Cell[];
  currentPlayerIndex: number;
  gameBoardContainer: HTMLDivElement;
  // gameID: Guid = null; //to nie może tu być
  gameInfoBoxContainer: HTMLDivElement;
  isGameEnd: boolean = false;
  lenghtRouteToWin: number;
  // gameHistory: IGameState[] = []; to nie może tu być
  moveNumber: number;
  name: string;
  players: Player[];
  saveGame: LocalStorageStore;
  sessionMoveHistory: SessionStorageStore;
  sizeX: number;
  sizeY: number;
  winner: Player = null;
  constructor(sizeX: number = 3, sizeY: number = sizeX) {
    this.name = "Kółko i krzyżyk";
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
  getGameElement(): HTMLDivElement {
    const appBoard = <HTMLDivElement>document.createElement("div");
    appBoard.className = "TicTacToeGame";
    const userInterfaceCreator = new TicTacToeUI(this);
    const userInterface = userInterfaceCreator.userInterfaceInit();
    appBoard.appendChild(userInterface);
    return appBoard;
  }
}
