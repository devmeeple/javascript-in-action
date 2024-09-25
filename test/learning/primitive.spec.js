describe('원시 값의 불변성', () => {
  it('원시 값은 변경되지 않아야 한다.', () => {
    // given
    let original = 100;
    const sut = original;

    // when
    original = 200;

    // then
    expect(sut).toBe(100);
  });
});
