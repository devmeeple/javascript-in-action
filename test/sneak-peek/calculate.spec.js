describe('CalculateTest', () => {
  let num1;
  let num2;

  beforeEach(() => {
    num1 = 100;
    num2 = 100;
  });

  it('[성공] 더하기, 빼기, 곱하기, 나누기 결과를 차례대로 출력한다.', () => {
    // given

    // when
    const sut = calculate(num1, num2);

    // then
    expect(sut.sum).toBe(200);
    expect(sut.difference).toBe(0);
    expect(sut.product).toBe(10000);
    expect(sut.quotient).toBe(1);
  });

  it('[성공] 두 수를 더한다.', () => {
    // given

    // when
    const sut = add(num1, num2);

    // then
    expect(sut).toBe(200);
  });

  it('[성공] 두 수를 뺀다.', () => {
    // given

    // when
    const sut = subtract(num1, num2);

    // then
    expect(sut).toBe(0);
  });

  it('[성공] 두 수를 곱한다.', () => {
    // given

    // when
    const sut = multiply(num1, num2);

    // then
    expect(sut).toBe(10000);
  });

  it('[성공] 두 수를 나눈다.', () => {
    // given

    // when
    const sut = divide(num1, num2);

    // then
    expect(sut).toBe(1);
  });

  it('[실패] 0으로 나누면 에러가 발생한다.', () => {
    // given
    const num1 = 100;
    const num2 = 0;

    // when
    const sut = () => divide(num1, num2);

    // then
    expect(sut).toThrow('0으로 나눌 수 없습니다.');
  });
});

const calculate = (num1, num2) => {
  return {
    sum: add(num1, num2),
    difference: subtract(num1, num2),
    product: multiply(num1, num2),
    quotient: divide(num1, num2),
  };
};

const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => {
  if (num2 === 0) {
    throw new Error('0으로 나눌 수 없습니다.');
  }
  return num1 / num2;
};
