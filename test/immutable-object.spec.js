describe('불변 객체 만들기', () => {
  it('꽁꽁 얼어붙은 객체는 값을 변경할 수 없다.', () => {
    // given
    const user = Object.freeze({ name: 'Angeligue', age: 22 });
    user.age = 30;

    // then
    expect(user.age).toBe(22);
  });
});
