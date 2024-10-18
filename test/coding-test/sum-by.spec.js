function sumBy(absolutes, signs) {
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === false) {
      absolutes[i] = -absolutes[i];
    }
  }
  return absolutes.reduce((prev, current) => prev + current, 0);
}

describe('음양 더하기', () => {
  it('절댓값을 담은 정수 배열을 부호에 맞춰 모두 더한다.', () => {
    // given
    const absolutes = [4, 7, 12];
    const signs = [true, false, true];

    // when
    const sut = sumBy(absolutes, signs);

    // then
    expect(sut).toBe(9);
  });
});
