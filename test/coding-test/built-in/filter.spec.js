describe('Array.prototype.filter()', () => {
  it('조건에 맞는 요소만 추출해서 새로운 배열을 반환한다.', () => {
    // given
    const words = ['Trinidad And Tobago', 'nightmare', 'issued', 'Antarctica'];

    // when
    const sut = words.filter((word) => word.length > 10);

    // then
    expect(sut).toEqual(['Trinidad And Tobago']);
    expect(words).toEqual([
      'Trinidad And Tobago',
      'nightmare',
      'issued',
      'Antarctica',
    ]);
  });
});
