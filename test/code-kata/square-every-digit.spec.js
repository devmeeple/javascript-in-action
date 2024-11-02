describe('Square Every Digit', () => {
  it('모든 자릿수를 제곱한다.', () => {
    // given
    const number = 9119;

    // when
    const result = squareDigits(number);

    // then
    expect(result).toBe(811181);
  });
});

function squareDigits(number) {
  return Number(
    number
      .toString()
      .split('')
      .map((element) => (+element) ** 2)
      .join(''),
  );
}
