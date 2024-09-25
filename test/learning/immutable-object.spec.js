const { produce } = require('immer');

describe('불변 객체 만들기', () => {
  describe('Object.freeze()', () => {
    it('[성공] 불변 객체를 만든다.', () => {
      // given
      const ive = Object.freeze({ name: '안유진', age: 21 });

      // when
      ive.age = 22;

      // then
      expect(ive.age).not.toBe(22);
      expect(ive.age).toBe(21);
    });

    it('[실패: 얕은 복사] 중첩 객체는 값을 변경할 수 있다.', () => {
      // given
      const ive = Object.freeze({
        name: '안유진',
        details: { birth: '대전광역시 서구 둔산동' },
      });

      // when
      ive.details.birth = '2023/09/01';

      // then
      expect(ive.details.birth).toBe('2023/09/01');
    });
  });

  describe('Spread 문법', () => {
    it('[성공] Spread 문법으로 만든 객체는 새로운 객체다.', () => {
      // given
      const user = {
        name: '안유진',
        details: {
          age: 21,
        },
      };

      // when
      const sut = { ...user };

      // then
      expect(sut).not.toBe(user);
    });

    it('[실패: 얕은 복사] 새로운 객체지만 중첩 객체는 같은 참조를 가진다.', () => {
      // given
      const user = {
        name: '안유진',
        details: {
          age: 21,
        },
      };

      // when
      const sut = { ...user };

      // then
      expect(sut.details).toBe(user.details);
    });

    it('[성공: 귀찮음] 중첩 객체를 포함하여 전부 복사하면 새로운 참조를 가진다.', () => {
      // given
      const user = {
        name: '안유진',
        details: {
          age: 21,
        },
      };

      // when
      const sut = { ...user, details: { ...user.details, age: 22 } };

      // then
      expect(sut).not.toBe(user);
      expect(sut.details).not.toBe(user.details);
      expect(sut.details.age).toBe(22);
      expect(user.details.age).toBe(21);
    });
  });

  describe('Immer 라이브러리', () => {
    it('[성공] 깊은 복사를 지원하는 불변 객체를 만든다.', () => {
      // given
      const ive = {
        name: '안유진',
        details: {
          age: 21,
          birth: '대전광역시 서구 둔산동',
        },
      };

      // when
      const sut = produce(ive, (draft) => {
        draft.details.age = 22;
        draft.details.birth = '2023/09/01';
      });

      // then
      // 1. 원본 객체는 변경되지 않는다.
      expect(ive.details.age).toBe(21);
      expect(ive.details.birth).toBe('대전광역시 서구 둔산동');

      // 2. 새로운 객체를 생성하고 수정한다.
      expect(sut.details.age).toBe(22);
      expect(sut.details.birth).toBe('2023/09/01');

      // 3. 참조 값이 다르다.
      expect(sut).not.toBe(ive);

      // 4. 중첩 객체 또한 불변하다.
      expect(sut.details).not.toBe(ive.details);
    });
  });
});
