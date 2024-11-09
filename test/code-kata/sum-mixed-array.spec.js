describe('Sum Mixed Array', () => {
  it('문자열과 숫자로 이뤄진 배열의 합을 반환한다.', () => {
    // given
    const mixedNumbers = [9, 3, '7', '3'];

    // when
    const result = sumMix(mixedNumbers);

    // then
    expect(result).toBe(22);
  });
});

function sumMix(mixedNumbers) {
  return mixedNumbers
    .map((element) => Number(element))
    .reduce((prev, curr) => prev + curr, 0);
}
