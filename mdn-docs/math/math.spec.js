describe('숫자와 연산자', () => {
  describe('step 1', () => {
    const num1 = 10;
    const num2 = 20;
    const num3 = 5;
    const num4 = 2;
    const addResult = num1 + num2;
    const subtractResult = num3 - num4;
    const finalResult = addResult * subtractResult;
    const evenOddResult = finalResult % 2 === 0;
    it('숫자형 변수 4개를 선언.', () => {
      expect(typeof num1).toBe('number');
      expect(typeof num2).toBe('number');
      expect(typeof num3).toBe('number');
      expect(typeof num4).toBe('number');
    });

    it('should 두 변수를 더하고 결과를 다른 변수에 저장', () => {
      expect(addResult).toEqual(30);
    });

    it('should 3번째 변수에서 4번째 변수를 빼고 결과를 다른 변수에 저장', () => {
      expect(subtractResult).toBe(3);
    });

    it('should 2, 3단계의 결과를 곱하고 finalResult에 값을 할당', () => {
      expect(finalResult).toBe(90);
    });

    it('should 산술연산자를 사용하여 finalResult가 짝수인지 확인', () => {
      expect(evenOddResult).toBeTruthy();
    });
  });

  describe('step 2', () => {
    let result;
    let result2;
    let finalResult;
    let finalNumber;

    beforeEach(() => {
      result = 7 + 13 / 9 + 7;
      result2 = (100 / 2) * 6;
      finalResult = result.toFixed(2);
      finalNumber = null;
    });
    it('should result와 result2를 곱하고, 결과를 result에 저장', () => {
      result *= result2;
      const expected = (7 + 13 / 9 + 7) * ((100 / 2) * 6);
      expect(result).toBe(expected);
    });

    it('should 소수점 이하 두자리수가 포함되도록 결과의 서식을 지정하고 finalResult에 저장', () => {
      finalResult = result.toFixed(2);
      expect(finalResult).toBe(result.toFixed(2));
    });

    it('should finalResult 데이터 유형 확인, 문자열인 경우 숫자로 변환', () => {
      expect(typeof finalResult).not.toBe('number');
      finalNumber = Number(finalResult);
      expect(typeof finalNumber).toBe('number');
    });

    it('should finalNumber는 4633.33', () => {
      finalResult = Number((result * result2).toFixed(2));
      finalNumber = finalResult;
      const expected = 4633.33;
      expect(finalNumber).toBe(expected);
    });
  });

  describe('step 3', () => {
    it('should the elephant weights less than mouse', () => {
      const eleWeight = 1000;
      const mouseWeight = 2;
      const expected = eleWeight < mouseWeight;
      expect(expected).toBeFalsy();
    });

    it('should the ostrich is taller than the duck', () => {
      const ostrichHeight = 2;
      const duckHeight = 0.3;
      const expected = ostrichHeight > duckHeight;
      expect(expected).toBeTruthy();
    });

    it('should the two passwords match', () => {
      const pwd1 = 'stromboli';
      const pwd2 = 'strROmBoLi';
      const expected = pwd1 === pwd2;
      expect(expected).toBeFalsy();
    });
  });
});
