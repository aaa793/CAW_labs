
const mean = require('./notation');

describe('mean function', () => {
  it('should return the average of a list of numbers', () => {
    expect(mean([10, 20, 30])).toBe(20);
    expect(mean([5, 10, 15, 20, 25])).toBe(15);
    expect(mean([1, 1, 1, 1, 1])).toBe(1);
  });

  it('should return NaN for an empty array', () => {
    expect(mean([])).toBeNaN();
  });

  it('should handle arrays with one element', () => {
    expect(mean([10])).toBe(10);
    expect(mean([100])).toBe(100);
  });

  it('should work with decimal values', () => {
    expect(mean([2.5, 3.5, 4.5])).toBeCloseTo(3.5);
  });
});
