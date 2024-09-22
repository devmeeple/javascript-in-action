describe('부동소수점 반올림 오류', () => {
  it('[성공] 부동소수점 연산은 근삿값을 검증한다.', () => {
    // given
    const sum = 0.1 + 0.2;

    // when

    // then
    expect(sum).toBeCloseTo(0.3);
  });

  it('[오류] 부동소수점 연산은 정확하지 않다.', () => {
    // given
    const sum = 0.1 + 0.2;

    // when

    // then
    expect(sum).not.toBe(0.3);
  });
});
