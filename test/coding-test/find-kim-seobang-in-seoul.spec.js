describe('서울에서 김서방 찾기', () => {
  it('Kim 위치를 찾는다.', () => {
    // given
    const seoul = ['Jane', 'Kim'];
    const keyword = 'Kim';

    // when
    const sut = seoul.indexOf(keyword);
    const result = `김서방은 ${sut}에 있다`;

    expect(result).toBe('김서방은 1에 있다');
  });
});
