describe('배열 제어하기', () => {
  it('[Set] 중복을 제거한다.', () => {
    // given
    const numbers = [4, 2, 2, 1, 3, 4];

    // when
    const sut = [...new Set(numbers)];

    // then
    expect(sut).toEqual([4, 2, 1, 3]);
  });
});
