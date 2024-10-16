function sumOfStrings(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

describe('두 수의 합', () => {
  it('문자열을 정수로 변환하고 더한 후 문자열로 반환한다.', () => {
    // given
    const a = '18446744073709551615';
    const b = '287346502836570928366';

    // when
    const sut = sumOfStrings(a, b);

    // then
    expect(sut).toBe('305793246910280479981');
  });
});
