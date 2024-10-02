describe('배열 제어하기', () => {
  it('[정답] 중복을 제거하고 내림차순으로 정렬한 배열을 반환한다.', () => {
    // given
    const numbers = [4, 2, 2, 1, 3, 4];

    // when
    const sut = [...new Set(numbers)];
    sut.sort((a, b) => b - a);

    // then
    expect(sut).toEqual([4, 3, 2, 1]);
  });

  describe('중복 제거하기', () => {
    it('[성공] Set 자료구조를 사용해서 중복을 제거한다.', () => {
      // given
      const numbers = [4, 2, 2, 1, 3, 4];

      // when
      const sut = [...new Set(numbers)];

      // then
      expect(sut).toEqual([4, 2, 1, 3]);
    });

    it('[성공] filter + indexOf 조합으로 중복을 제거한다.', () => {
      // given
      const numbers = [4, 2, 2, 1, 3, 4];

      // when
      const sut = numbers.filter(
        (value, index) => numbers.indexOf(value) === index,
      );

      // then
      expect(sut).toEqual([4, 2, 1, 3]);
    });
  });
});
