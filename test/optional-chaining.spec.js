describe('옵셔널 체이닝(Optional chaining)', () => {
  describe('obj?.prop', () => {
    it('객체가 존재하면 객체를 반환한다. [성공]', () => {
      // given
      const baseballPlayer = {
        name: '원태인',
      };

      // when
      const sut = baseballPlayer?.name;

      // then
      expect(sut).toBe('원태인');
    });

    it('객체가 존재하지 않으면 undefined를 반환한다. [실패]', () => {
      // given
      const baseballPlayer = {};

      // when
      const sut = baseballPlayer?.name;

      // then
      expect(sut).toBeUndefined();
    });
  });

  describe('obj?.[prop]', () => {
    const key = 'title';

    it('객체가 존재하면 객체를 반환한다. [성공]', () => {
      // given
      const book = {
        title: '리팩터링 2판',
      };

      // when
      const sut = book?.[key];

      // then
      expect(sut).toBe('리팩터링 2판');
    });

    it('객체가 존재하지 않으면 undefined를 반환한다. [실패]', () => {
      // given
      const book = {};

      // when
      const sut = book?.[key];

      // then
      expect(sut).toBeUndefined();
    });
  });

  describe('obj?.method()', () => {
    it('객체가 존재하면 메서드 호출 결과를 반환한다. [성공]', () => {
      // given
      const player = {
        isMafia() {
          return true;
        },
      };

      // when
      const sut = player?.isMafia();

      // then
      expect(sut).toBeTruthy();
    });

    it('객체에 메서드가 존재하지 않으면 undefined를 반환한다. [실패]', () => {
      // given
      const player = {};

      // when
      const sut = player.isMafia?.();

      // then
      expect(sut).toBeUndefined();
    });
  });
});
