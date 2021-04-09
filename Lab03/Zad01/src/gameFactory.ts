import { AvailableGames } from "./availableGames";
import { GameBoard as TicTacToe } from "./Games/TicTacToe/gameBoard";
import { BattleShips } from "./Games/Battleships/battleships";
import { IGame } from "./Igame";

export class GameFactory {
  GameCreator(gameName: string): IGame {
    switch (gameName) {
      case "TicTacToe":
        return new TicTacToe();
      case "BattleShips":
        return new BattleShips();
      default:
        console.error("nie ma takiej gry");
    }
  }
}
