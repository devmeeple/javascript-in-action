describe('기본 연산자(Basic operators, maths)', () => {
  describe('[증감 연산자] 전위, 후위 비교하기', () => {
    it('전위 증감 연산자는 값을 먼저 증가한다', () => {
      // given
      let prefix = 1;

      // when
      const sut = ++prefix;

      // then
      expect(sut).toBe(2);
    });

    it('후위 연산자는 값을 이후에 증가한다', () => {
      // given
      let postfix = 1;

      // when
      const sut = postfix++;

      // then
      expect(sut).toBe(1);
    });
  });

  describe('할당 연산자', () => {
    it('할당 연산자는 단축해서 사용할 수 있다', () => {
      // given
      let counter = 2;

      // when
      const sut = 1 + (counter *= 2);

      // then
      expect(sut).toBe(5);
    });
  });

  describe('산술 연산자', () => {
    it('산술 연산자 +는 숫자 타입으로 변환할 때 사용할 수 있다', () => {
      // given
      const salary = '3000000';

      // sut
      const sut = +salary;

      // then
      expect(sut).toBe(3_000_000);
    });
  });
});
