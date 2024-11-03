describe('Convert boolean values to strings', () => {
  it.each([
    [true, 'Yes'],
    [false, 'No'],
  ])('bool 값에 따라 문자열을 반환한다.', (bool, expected) => {
    // given

    // when
    const result = boolToWord(bool);

    // then
    expect(result).toBe(expected);
  });
});

function boolToWord(bool) {
  return bool ? 'Yes' : 'No';
}
