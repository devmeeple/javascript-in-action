describe('배열 정렬하기', () => {
  it.each([
    [
      [1, -5, 2, 4, 3],
      [-5, 1, 2, 3, 4],
    ],
    [
      [2, 1, 1, 3, 2, 5, 4],
      [1, 1, 2, 2, 3, 4, 5],
    ],
    [
      [6, 1, 7],
      [1, 6, 7],
    ],
  ])('정수 배열 %j를 정렬하면 %j가 된다.', (arr, expected) => {
    // given

    // when
    arr.sort((a, b) => a - b);

    // then
    expect(arr).toEqual(expected);
  });
});
