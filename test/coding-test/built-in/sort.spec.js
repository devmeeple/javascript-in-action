describe('Array.prototype.sort()', () => {
  it('[개념] 문자열로 변환하고 오름차순 정렬한다.', () => {
    // given
    const names = ['육현석', '육현상', '장태근', '이선협', '박경록'];

    // when
    names.sort();

    // then
    expect(names).toEqual(['박경록', '육현상', '육현석', '이선협', '장태근']);
  });

  describe('[심화] 숫자 다루기', () => {
    it('[실패] 조건을 전달하지 않으면 문자열로 변환해서 정렬한다.', () => {
      // given
      const numbers = [1, 30, 4, 21, 100];

      // when
      numbers.sort();

      // then
      expect(numbers).toEqual([1, 100, 21, 30, 4]);
    });

    it('[성공] 숫자 배열을 오름차순으로 정렬한다.', () => {
      // given
      const numbers = [1, 30, 4, 21, 100];

      // when
      numbers.sort((a, b) => a - b);

      // then
      expect(numbers).toEqual([1, 4, 21, 30, 100]);
    });

    it('[성공] 숫자 배열을 내림차순으로 정렬한다.', () => {
      // given
      const numbers = [1, 30, 4, 21, 100];

      // when
      numbers.sort((a, b) => b - a);

      expect(numbers).toEqual([100, 30, 21, 4, 1]);
    });
  });
});
