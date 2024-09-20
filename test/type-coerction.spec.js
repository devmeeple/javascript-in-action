describe('[Type coercion] 타입 형 변환', () => {
  describe('명시적 형 변환', () => {
    it('[개념] 생성자 함수를 new 연산자 없이 호출해서 타입을 변환한다', () => {
      // given
      const numberToString = '123';

      // when
      const sut = Number(numberToString);

      // then
      expect(sut).toBe(123);
    });

    it('[질문] 생성자 함수와 new 연산자를 함께 사용하면 객체를 생성한다', () => {
      // given
      const numberToString = '123';

      // when
      const sut = new Number(numberToString);

      // then
      expect(typeof sut).toBe('object');
      expect(sut.valueOf()).toBe(123);
    });
  });
});
