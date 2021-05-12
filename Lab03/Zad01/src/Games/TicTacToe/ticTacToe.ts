import Cell from "./library/gameLogic/cell";
import Player, { PlayerType } from "./library/gameLogic/player";
import { IGame } from "../../Igame";
import TicTacToeUI from "./library/userInterface/ticTacToeUI";
import { SessionStorageStore } from "./library/storageHelpers/sessionStorage";
import { LocalStorageStore } from "./library/storageHelpers/localStorage";
export class TicTacToe implements IGame {
  name: string;
  sizeX: number;
  sizeY: number;
  players: Player[];
  currentPlayerIndex: number;
  lenghtRouteToWin: number;
  boardArray: Cell[];
  moveNumber: number;
  moveHistory: SessionStorageStore;
  saveGame: LocalStorageStore;
  gameBoardContainer: HTMLDivElement;
  gameInfoBoxContainer: HTMLDivElement;
  isGameEnd: boolean = false;
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
    this.moveHistory = new SessionStorageStore("moveHistory");
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
