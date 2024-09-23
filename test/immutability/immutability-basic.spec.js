describe('불변성(immutability)', () => {
  it('원시값은 불변이다.', () => {
    // given
    const salary = 5000;
    let sut = salary;

    // when
    sut = 6000;

    // then
    expect(salary).toBe(5000);
    expect(sut).toBe(6000);
  });

  it('객체는 변하는 값이다.', () => {
    // given
    const employee = {
      name: '유재석',
      salary: 5000,
    };
    const sut = employee;

    // when
    sut.salary = 6000;

    expect(employee.salary).toBe(6000);
    expect(sut.salary).toBe(6000);
  });
});
