describe('Even or Odd', () => {
  it.each([
    [2, '짝수'],
    [7, '홀수'],
    [0, '짝수'],
  ])('짝수 또는 홀수를 반환한다', (number, expected) => {
    // given

    // when
    const result = evenOrOdd(number);

    // then
    expect(result).toBe(expected);
  });
});

function evenOrOdd(number) {
  return number % 2 === 0 ? '짝수' : '홀수';
}
