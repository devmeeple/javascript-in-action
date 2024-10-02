describe('자료구조 Set', () => {
  it('중복을 허용하지 않는다.', () => {
    // given
    const set = new Set([1, 2, 3, 1]);

    // when

    // then
    expect(set.size).toBe(3);
  });

  describe('배열로 변환하기', () => {
    it('spread 연산자를 사용한다.', () => {
      // given
      const numbers = [1, 2, 3, 4, 1, 2];
      const set = new Set(numbers);

      // when
      const sut = [...set];

      // then
      expect(sut).toEqual([1, 2, 3, 4]);
    });

    it('Array.from()을 사용한다.', () => {
      // given
      const numbers = [1, 2, 3, 4, 1, 2];
      const set = new Set(numbers);

      // when
      const sut = Array.from(set);

      // then
      expect(sut).toEqual([1, 2, 3, 4]);
    });
  });
});
