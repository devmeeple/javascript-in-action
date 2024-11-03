describe('Power of 2', () => {
  it.each([
    [0, [1]],
    [1, [1, 2]],
    [2, [1, 2, 4]],
  ])('2의 모든 거듭제곱 목록을 반환한다.', (n, expected) => {
    // given

    // when
    const results = powersOfTwo(n);

    // then
    expect(results).toEqual(expected);
  });
});

function powersOfTwo(n) {
  const results = [];
  for (let i = 0; i <= n; i++) {
    results.push(2 ** i);
  }

  return results;
}
