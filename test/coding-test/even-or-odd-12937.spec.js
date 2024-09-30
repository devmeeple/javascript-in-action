function getParity(num) {
  if (num % 2 === 0) {
    return 'Even';
  }

  return 'Odd';
}

describe('짝수와 홀수', () => {
  it('짝수라면 Even을 반환한다.', () => {
    // given
    const num = 4;

    // when
    const sut = getParity(num);
    // then
    expect(sut).toBe('Even');
  });

  it('홀수라면 Odd를 반환한다.', () => {
    // given
    const num = 3;

    // when
    const sut = getParity(num);

    // then
    expect(sut).toBe('Odd');
  });
});
