const makeGreeting = (name) => `Hello, my name is ${name}!`;

describe('동기식 프로그래밍(Synchronous programming)', () => {
  it('이름을 반환한다', () => {
    // given
    const name = 'Miriam';

    // when
    const sut = makeGreeting(name);

    // then
    expect(sut).toBe('Hello, my name is Miriam!');
  });
});
