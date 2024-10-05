describe('Array', () => {
  it('배열 요소를 찾아 위치를 반환한다.', () => {
    // given
    const beasts = ['사자', '호랑이', '오리', '낙타', '물소'];

    // when
    const sut = beasts.indexOf('오리');

    // then
    expect(sut).toBe(2);
  });

  it('요소를 찾을 수 없으면 -1을 반환한다.', () => {
    // given
    const beasts = ['사자', '호랑이', '오리', '낙타', '물소'];

    // when
    const sut = beasts.indexOf('개미');

    // then
    expect(sut).toBe(-1);
  });
});
