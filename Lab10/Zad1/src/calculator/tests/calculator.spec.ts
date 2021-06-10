import { Calculator } from "../calculator";

describe("Calc", () => {
  let calc: Calculator;

  beforeEach(() => {
    calc = new Calculator();
  });

  it("should return correct sum of two number", () => {
    expect(calc).toBeInstanceOf(Calculator);
    expect(calc.Add(2, 2)).toEqual(4);
  });
  it("should return correct subtraction of two number", () => {
    expect(calc).toBeInstanceOf(Calculator);
    expect(calc.Substract(2, 2)).toEqual(0);
  });
  it("should return correct multiplication of two number", () => {
    expect(calc).toBeInstanceOf(Calculator);
    expect(calc.Multiply(2, 2)).toEqual(4);
  });
  it("should return correct divide of two number", () => {
    expect(calc).toBeInstanceOf(Calculator);
    expect(calc.Divide(2, 2)).toEqual(1);
  });
});
