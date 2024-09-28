describe('문자열을 정수로 바꾸기', () => {
  it('문자열을 정수로 변환한다.', () => {
    // given
    const str = '1234';

    // when
    const sut = +str;

    // then
    expect(sut).toBe(1234);
  });
});
