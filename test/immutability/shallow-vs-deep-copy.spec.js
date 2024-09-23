describe('얕은 복사 vs. 깊은 복사', () => {
  it('얕은 복사는 중첩된 객체의 참조를 공유한다.', () => {
    // given
    const team = {
      manager: {
        name: 'Alice',
        age: 35,
      },
      members: ['John', 'Jane', 'Bob'],
    };
    const sut = { ...team };

    // when
    sut.manager.age = 40;

    // then
    expect(team.manager.age).toBe(40);
    expect(sut.manager.age).toBe(40);
  });

  it('깊은 복사는 중첩된 객체까지 복사한다.', () => {
    // given
    const team = {
      manager: {
        name: 'Alice',
        age: 35,
      },
      members: ['John', 'Jane', 'Bob'],
    };
    const sut = JSON.parse(JSON.stringify(team));

    /// when
    sut.manager.age = 40;

    // then
    expect(team.manager.age).toBe(35);
    expect(sut.manager.age).toBe(40);
  });
});
