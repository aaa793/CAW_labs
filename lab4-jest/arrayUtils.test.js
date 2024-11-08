
const { first, last, chunk } = require('./lab4exo2');

describe('first function', () => {
  it('should return the first element when n is not provided', () => {
    expect(first([7, 9, 0, -2])).toBe(7);
  });

  it('should return the first n elements when n is provided', () => {
    expect(first([7, 9, 0, -2], 2)).toEqual([7, 9]);
    expect(first([7, 9, 0, -2], 3)).toEqual([7, 9, 0]);
  });

  it('should return an empty array if n is zero or less', () => {
    expect(first([7, 9, 0, -2], 0)).toEqual([]);
  });

  it('should return an empty array if array is null', () => {
    expect(first(null, 2)).toEqual([]);
  });
});

describe('last function', () => {
  it('should return the last element when n is not provided', () => {
    expect(last([7, 9, 0, -2])).toBe(-2);
  });

  it('should return the last n elements when n is provided', () => {
    expect(last([7, 9, 0, -2], 2)).toEqual([0, -2]);
    expect(last([7, 9, 0, -2], 3)).toEqual([9, 0, -2]);
  });

  it('should return an empty array if array is null', () => {
    expect(last(null, 2)).toEqual([]);
  });
});

describe('chunk function', () => {
  it('should split an array into chunks of the given size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
  });

  it('should return an empty array if array is empty', () => {
    expect(chunk([], 2)).toEqual([]);
  });
});

describe('array joining methods', () => {
  it('should join an array with commas by default', () => {
    const myColor = ["Red", "Green", "White", "Black"];
    expect(myColor.toString()).toBe("Red,Green,White,Black");
    expect(myColor.join()).toBe("Red,Green,White,Black");
  });

  it('should join an array without separators when using an empty string', () => {
    const myColor = ["Red", "Green", "White", "Black"];
    expect(myColor.join('')).toBe("RedGreenWhiteBlack");
  });
});
