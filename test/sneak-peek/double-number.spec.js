describe('DoubleNumber', () => {
  it('입력값을 2배로 만든다.', () => {
    // given
    const n = 50;

    // when
    const sut = doubleNumber(50);

    // then
    expect(sut).toBe(100);
  });
});

function doubleNumber(n) {
  return n * 2;
}
