const createUser = (name = '') => name || '백종원';

const greet = (name) => name && `안녕하세요. ${name}님!`;

describe('[short-circuit] 단락, 단축 평가', () => {
  it('[개념] 추가 평가가 필요하지 않으면 값을 평가하지 않는다', () => {
    // given
    const netflixSeries = '흑백요리사' || '오징어 게임 시즌2';

    // when

    // then
    expect(netflixSeries).toBe('흑백요리사');
  });

  describe('[사용] 논리연산자 AND', () => {
    it('방문자가 이름을 작성하면 방문자를 환영한다', () => {
      // given
      const name = '안성재';

      // when
      const sut = greet(name);

      // then
      expect(sut).toBe('안녕하세요. 안성재님!');
    });

    it('방문자 이름을 알 수 없다면 환영하지 못한다', () => {
      // given

      // when
      const sut = greet();

      // then
      expect(sut).toBeUndefined();
    });
  });

  describe('[사용] 논리연산자 OR', () => {
    it('사용자의 이름을 알 수 없다면 기본값을 설정한다', () => {
      // given

      // when
      const sut = createUser();

      // then
      expect(sut).toBe('백종원');
    });
  });
});
