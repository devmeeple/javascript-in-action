describe('문자열(string)', () => {
  it('문자열은 불변해서 기본 url을 수정하지 않는다.', () => {
    // given
    const baseUrl = 'https://devmeeple.github.io';

    // when
    const sut = `${baseUrl}/modern-javascript-deep-dive-study-240909/`;

    // then
    expect(baseUrl).toBe('https://devmeeple.github.io');
    expect(sut).toBe(
      'https://devmeeple.github.io/modern-javascript-deep-dive-study-240909/',
    );
  });

  it('문자열 메서드를 사용하여 새로운 문자열을 추가한다.', () => {
    // given
    const greeting = 'Hello, World!';

    // when
    const sut = greeting.replace('World', 'Everyone');

    // then
    expect(greeting).toBe('Hello, World!');
    expect(sut).toBe('Hello, Everyone!');
  });

  describe('유사 배열(array-like object)', () => {
    it('인덱스로 접근하지만 값을 변경할 수 없다', () => {
      // given
      const text = 'Hello';

      // when
      text[0] = 'G';

      // then
      expect(text).toBe('Hello');
    });

    it('배열은 인덱스로 접근하고, 값을 변경할 수 있다.', () => {
      // given
      const text = ['Hello'];

      // when
      text[0] = 'Gello';

      // then
      expect(text[0]).toBe('Gello');
    });
  });
});
