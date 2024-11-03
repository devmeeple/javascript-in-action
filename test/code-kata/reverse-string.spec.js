describe('Reversed Strings', () => {
  it('문자열을 뒤집는다.', () => {
    // given
    const word = 'world';

    // when
    const result = [...word].reverse().join('');

    // then
    expect(result).toBe('dlrow');
  });
});
