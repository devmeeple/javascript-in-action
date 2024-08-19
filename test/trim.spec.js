describe('String.prototype.trim()', () => {
  it('문자열의 양쪽 끝 공백을 제거하고 새로운 문자열을 반환한다. [성공]', () => {
    // given
    const poem =
      '   가야 할 때가 언제인가를 분명히 알고 가는 이의 뒷모습은 얼마나 아름다운가.   ';

    // when
    const sut = poem.trim();

    // then
    expect(sut).toBe(
      '가야 할 때가 언제인가를 분명히 알고 가는 이의 뒷모습은 얼마나 아름다운가.',
    );
  });
});
