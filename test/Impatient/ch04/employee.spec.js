describe('EmployeeTest', () => {
  it('임직원의 인상급여를 계산한다', () => {
    // given
    const harry = {
      name: 'Harry Smith',
      salary: 90000,
      raiseSalary(percent) {
        this.salary *= 1 + percent / 100;
        return Math.round(this.salary);
      }
    };

    // when
    const sut = harry.raiseSalary(10);

    // then
    expect(sut).toBe(99000);
  });
});
