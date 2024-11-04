describe('String repeat', () => {
  it('문자열을 반복한다.', () => {
    // given
    const count = 6;
    const word = 'I';

    // when
    const result = word.repeat(count);

    // then
    expect(result).toBe('IIIIII');
  });
});
