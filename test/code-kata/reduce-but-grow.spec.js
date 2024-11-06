function grow(numbers) {
  return numbers.reduce((prev, curr) => prev * curr, 1);
}

describe('Beginner - Reduce but Grow', () => {
  it('요소를 순서대로 곱한다.', () => {
    // given
    const numbers = [1, 2, 3, 4];

    // when
    const result = grow(numbers);

    // then
    expect(result).toBe(24);
  });
});
