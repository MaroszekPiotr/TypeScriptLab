export class FizzBuzz {
  numerOfGames: number;
  constructor(numberOfGames: number) {
    this.numerOfGames = numberOfGames;
  }
  checkWhatIs(gameNumber: number): string {
    if (gameNumber % 3 === 0 && gameNumber % 5 === 0) return `FizzBuzz`;
    if (gameNumber % 3 === 0) return `Fizz`;
    if (gameNumber % 5 === 0) return `Buzz`;
    return gameNumber.toString();
  }
  letsPlay() {
    for (let i = 0; i <= this.numerOfGames; i++) {
      this.checkWhatIs(i);
    }
  }
}
