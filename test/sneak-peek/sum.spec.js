function sum(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  }

  throw new Error('숫자를 입력해 주세요.');
}

describe('Sum', () => {
  it('[성공] 두 수를 더한다.', () => {
    // given
    const num1 = 1;
    const num2 = 99;

    // when
    const sut = sum(num1, num2);

    // then
    expect(sut).toBe(100);
  });

  it('[실패] 숫자를 입력하지 않으면 에러가 발생한다.', () => {
    // given
    const num1 = 1;
    const num2 = '직접 해보세요';

    // when
    const sut = () => sum(num1, num2);

    // when + then
    expect(sut).toThrow('숫자를 입력해 주세요.');
  });
});
