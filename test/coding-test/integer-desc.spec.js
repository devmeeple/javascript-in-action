describe('정수 내림차순으로 배치하기', () => {
  it('[정답] 내림차순으로 정렬한 정수를 반환한다.', () => {
    // given
    const n = 118372;

    // when
    const sut = parseInt(
      n
        .toString()
        .split('')
        .sort((a, b) => b - a)
        .join(''),
    );

    // then
    expect(sut).toBe(873211);
  });

  describe('문제풀이', () => {
    it('문자열로 변환한다.', () => {
      // given
      const n = 118372;

      // when
      const sut = n.toString();

      // then
      expect(sut).toBe('118372');
    });

    it('문자열을 문자로 나눈다.', () => {
      // given
      const n = '118372';

      // when
      const sut = n.split('');

      // then
      expect(sut).toEqual(['1', '1', '8', '3', '7', '2']);
    });

    it('배열 요소를 내림차순으로 정렬한다.', () => {
      // given
      const n = ['1', '1', '8', '3', '7', '2'];

      // when
      const sut = n.sort((a, b) => b - a);

      // then
      expect(sut).toEqual(['8', '7', '3', '2', '1', '1']);
    });

    it('배열 요소를 문자열로 만든다.', () => {
      // given
      const n = ['8', '7', '3', '2', '1', '1'];

      // when
      const sut = n.join('');

      // then
      expect(sut).toBe('873211');
    });

    it('문자열을 숫자로 변환한다.', () => {
      // given
      const n = '873211';

      // when
      const sut = parseInt(n);

      // then
      expect(sut).toBe(873211);
    });
  });
});
