describe('[String quotes] 문자열 따옴표', () => {
  it('표현식에 숫자를 문자열로 변환하고 출력한다', () => {
    // given

    // when
    const message = `hello ${1}`;

    // then
    expect(message).toBe('hello 1');
  });

  it('표현식에 따옴표를 사용하면 그대로 출력한다', () => {
    // given

    // when
    const sut = `hello ${'name'}`;

    // then
    expect(sut).toBe(`hello ${'name'}`);
  });

  it('표현식에 변수는 문자열로 자동 형 변환된다', () => {
    // given
    const name = '한로로';

    // when
    const sut = `안녕하세요 ${name}입니다.`;

    // then
    expect(sut).toBe(`안녕하세요 한로로입니다.`);
  });
});
