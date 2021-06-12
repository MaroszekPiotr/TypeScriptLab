import { IGame } from "../Igame";

export function getElement(
  target: Object,
  keyProps: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const method = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const gameName: IGame = this.name;
    console.log(`Game ${gameName} is playing now.`);
    const result = method.apply(this, args);
    return result;
  };
  return descriptor;
}
