describe('Calculate average', () => {
  it('평균을 계산한다.', () => {
    // given
    const numbers = [1, 1, 1];

    // when
    const result = calculateAverage(numbers);

    // then
    expect(result).toBe(1);
  });

  it('배열 길이가 0이면 0을 반환한다.', () => {
    // given
    const numbers = [];

    // when
    const result = calculateAverage(numbers);

    // then
    expect(result).toBe(0);
  });
});

function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  return numbers.reduce((prev, curr) => prev + curr, 0) / numbers.length;
}
