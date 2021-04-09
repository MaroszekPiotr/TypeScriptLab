export interface IGame {
  name: string;
  getGameElement(): HTMLElement;
  DrawGameBoard(): HTMLElement;
}
