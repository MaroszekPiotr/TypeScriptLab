import { AvailableGames } from "./availableGames";
import { TicTacToe } from "./Games/ticTacToe/ticTacToe";
import { BattleShips } from "./Games/battleships/battleships";
import { Chess } from "./Games/chess/chess";
import { CyberSkin2084 } from "./Games/cyberskin2084/cyberskin2084";
import { Miner } from "./Games/miner/miner";
import { IGame } from "./Igame";
import { disabled } from "./decorators/disabled";

export class GameFactory {
  gameCreator(gameName: AvailableGames): IGame {
    switch (gameName) {
      case AvailableGames.TicTacToe:
        return new TicTacToe();
      case AvailableGames.BattleShips:
        return new BattleShips();
      case AvailableGames.Chess:
        return new Chess();
      case AvailableGames.CyberSkin2084:
        return new CyberSkin2084();
      case AvailableGames.Miner:
        return new Miner();
      default:
        console.error("nie ma takiej gry");
    }
  }
}
