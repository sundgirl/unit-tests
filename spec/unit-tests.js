const calc = require('./calc');

describe("Factorial", () => {
    it("Expect 1", () => {
      const val  = calc.secondCondition([16, 1, 13, 31, 22, 3]);
      expect(val).toBe(1);
    });
  });


describe("Test first", () => {
  it('Expect 4', () => {
    const val = calc.firstCondition([1, 3, 12, 31, 2, 121]);
    expect(val).toBe(4);
  });

  it('Expect 5', () => {
    const val = calc.firstCondition([5, 2, 1, 6, 23, 121, 4, 8, 8]);
    expect(val).toBe(5);
  });
});