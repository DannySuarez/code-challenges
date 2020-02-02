const binarySearch = require('./binarySearch');

describe('it will test binary searches', () => {
  it('will return the index where the value lives', () => {
    const myNumbers = [1, 3, 4, 5, 6, 7, 8, 9, 34]; 

    const result = binarySearch(myNumbers, 8);
    expect(result).toEqual(6);
  });

  it('will return null if value is not in the Array', () => {
    const myNumbers = [9, 8, 7, 6, 5];
    const result = binarySearch(myNumbers, 1);

    expect(result).toEqual(null);
  });
});
