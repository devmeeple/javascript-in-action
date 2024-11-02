describe('Sum of positive', () => {
  it('양수의 합을 반환한다.', () => {
    // given
    const numbers = [1, -4, 7, 12];

    // when
    const result = positiveSum(numbers);

    // then
    expect(result).toBe(20);
  });
});

function positiveSum(numbers) {
  return numbers
    .filter((item) => item > 0)
    .reduce((prev, curr) => prev + curr, 0);
}
