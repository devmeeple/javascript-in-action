describe('배열 정렬하기', () => {
  it('정수 배열을 정렬한다.', () => {
    // given
    const arr = [1, -5, 2, 4, 3];

    // when
    arr.sort((a, b) => a - b);

    // then
    expect(arr).toEqual([-5, 1, 2, 3, 4]);
  });
});
