import { AvailableGames } from "../availableGames";
import { IGame } from "../Igame";

export function disabled(gameTitle: AvailableGames) {
  return function (
    target: object,
    propKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const method = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const library: IGame[] = this.gameLibrary;
      const gameIndex = library.findIndex((game) => game.name === gameTitle);
      library.splice(gameIndex, 1);
      const result = method.apply(this, args);
      return result;
    };
    return descriptor;
  };
}
