describe('String repeat', () => {
  it.each([
    [6, 'I', 'IIIIII'],
    [5, 'Hello', 'HelloHelloHelloHelloHello'],
  ])('문자열을 반복한다.', (count, word, expected) => {
    // given

    // when
    const result = repeatStr(count, word);

    // then
    expect(result).toBe(expected);
  });
});

function repeatStr(count, word) {
  return word.repeat(count);
}
