describe('변수를 잘 알고있나요?', () => {
  describe('변수 1', () => {
    let myName;
    let myAge;
    it('myName 변수를 선언', () => {
      expect(myName).toBeUndefined();
    });

    it('myName 초기화', () => {
      myName = '미플';
      expect(myName).toBe('미플');
    });

    it('같은 줄에, myAge 변수를 선언하고 값을 할당', () => {
      myAge = 3; // 변수 초기화
      expect(myAge).toEqual(3);
    });
  });

  describe('변수 2', () => {
    let myName = 'Paul';

    it('당신의 이름으로 정정', () => {
      myName = '미플';
      expect(myName).toBe('미플');
    });
  });

  describe('변수 3', () => {
    const myName = 'Chris';
    const myAge = 22;
    let message;
    it('Chris 라는 이름과, 20년 후 Chris 는 몇 살 일지를 출력', () => {
      message = `${myName}는 현재 ${myAge}살이고 20년 후에는, ${
        myAge + 20
      }살이 됩니다.`;
      expect(message).toBe('Chris는 현재 22살이고 20년 후에는, 42살이 됩니다.');
    });
  });
});
