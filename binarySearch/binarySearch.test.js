const binary = require('./binary');

describe('it will test binary searches', () => {
  it('will return the index where the value lives', () => {
    const myNumbers = [1, 3, 4, 5, 6, 7, 8, 9, 34]; 

    const result = binary(myNumbers, 8);
    expect(result).toEqual(6);

  });
});
