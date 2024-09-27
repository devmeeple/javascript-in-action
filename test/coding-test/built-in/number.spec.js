describe('Number', () => {
  describe('[Math.abs] 절댓값을 반환하는 정적 메서드', () => {
    it('출금 금액의 절댓값은 같아야 한다.', () => {
      // given
      const money = -1000000;

      // when
      const sut = Math.abs(money);

      // then
      expect(sut).toBe(1000000);
    });
  });

  describe('[Math.ceil] 올림 하는 정적 메서드', () => {
    it('성적표를 제공할 때 학급 평균을 올림 한 점수를 제공한다.', () => {
      // given
      const classAverage = 63.2;

      // when
      const sut = Math.ceil(classAverage);

      // then
      expect(sut).toBe(64);
    });
  });

  describe('[Math.trunc] 소수를 전부 제거하고 정수를 반환하는 정적 메서드', () => {
    it('세금을 정산할 때 소수점을 버린 금액을 적용한다.', () => {
      // given
      const money = 123.45;

      // when
      const sut = Math.trunc(money);

      // then
      expect(sut).toBe(123);
    });
  });
});
