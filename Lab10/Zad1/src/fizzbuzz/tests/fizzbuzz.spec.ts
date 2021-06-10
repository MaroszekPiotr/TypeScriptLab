import { FizzBuzz } from "../fizzbuzz";

describe("Calc", () => {
  let game: FizzBuzz;

  beforeEach(() => {
    game = new FizzBuzz(20);
  });

  it("should return correct answer: Fizz", () => {
    expect(game).toBeInstanceOf(FizzBuzz);
    expect(game.checkWhatIs(3)).toEqual("Fizz");
  });
  it("should return correct answer: Buzz", () => {
    expect(game).toBeInstanceOf(FizzBuzz);
    expect(game.checkWhatIs(5)).toEqual("Buzz");
  });
  it("should return correct answer: Buzz", () => {
    expect(game).toBeInstanceOf(FizzBuzz);
    expect(game.checkWhatIs(10)).toEqual("Buzz");
  });
  it("should return correct answer: FizzBuzz", () => {
    expect(game).toBeInstanceOf(FizzBuzz);
    expect(game.checkWhatIs(15)).toEqual("FizzBuzz");
  });
  it("should return correct answer: FizzBuzz", () => {
    expect(game).toBeInstanceOf(FizzBuzz);
    expect(game.checkWhatIs(30)).toEqual("FizzBuzz");
  });
});
