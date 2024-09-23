describe('JSON 메서드(JSON method)', () => {
  it('[JSON.stringify] 객체를 JSON으로 변환한다.', () => {
    // given
    const chef = {
      name: '백종원',
      isJudge: true,
    };

    // when
    const sut = JSON.stringify(chef);

    // then
    expect(sut).toBe('{"name":"백종원","isJudge":true}');
  });

  it('[JSON.parse] JSON을 객체로 변환한다.', () => {
    // given
    const jsonString = '{"name":"백종원","isJudge":true}';

    // when
    const sut = JSON.parse(jsonString);

    // then
    expect(sut).toEqual({
      name: '백종원',
      isJudge: true,
    });
  });

  describe('깊은 복사(deep copy) JSON method', () => {
    it('원본 객체와 독립적인 새로운 객체를 추가한다.', () => {
      // given
      const original = {
        name: '백종원',
        recipes: {
          first: '김치찌개',
          second: '된장찌개',
        },
      };

      // when
      const sut = JSON.parse(JSON.stringify(original));

      // then
      expect(sut).toEqual(original); // 객체 값은 동일하다.
      expect(sut).not.toBe(original); // 참조가 다르다.
      expect(sut.recipes).not.toBe(original.recipes); // 중첩 객체 또한 참조가 다르다.
    });

    it('함수와 undefined 복사하지 않는다.', () => {
      // given
      const original = {
        name: '백종원',
        makeRecipe() {
          return '김치찌개';
        },
        age: undefined,
      };

      // when
      const sut = JSON.parse(JSON.stringify(original));

      // then
      expect(sut).toEqual({ name: '백종원' });
    });
  });
});
