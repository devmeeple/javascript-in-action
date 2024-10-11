describe('Calculate2Test', () => {
  it('op가 0이면 더한다.', () => {
    // given
    const num1 = 100;
    const num2 = 1;
    const op = 0;

    // when
    const sut = calculate(num1, num2, op);

    // then
    expect(sut).toBe(101);
  });

  it('op가 0이 아니면 뺀다.', () => {
    // given
    const num1 = 100;
    const num2 = 1;
    const op = 9;

    // when
    const sut = calculate(num1, num2, op);

    // then
    expect(sut).toBe(99);
  });
});

function calculate(num1, num2, op) {
  if (op === 0) {
    return num1 + num2;
  }

  return num1 - num2;
}
