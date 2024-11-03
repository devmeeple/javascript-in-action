describe('Reversed Strings', () => {
  it.each([
    ['world', 'dlrow'],
    ['word', 'drow'],
  ])('문자열 %s를 뒤집는다.', (word, expected) => {
    // given

    // when
    const result = [...word].reverse().join('');

    // then
    expect(result).toBe(expected);
  });
});
