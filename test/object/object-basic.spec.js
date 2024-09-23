describe('객체 생성하기', () => {
  it('객체 리터럴을 통해 객체를 생성한다.', () => {
    // given
    const band = {
      name: '오아시스(Oasis)',
      nationality: '잉글랜드',
      genre: '록',
    };

    // when

    // then
    expect(band.name).toBe('오아시스(Oasis)');
  });

  it('Object 생성자 함수를 통해 객체를 생성한다.', () => {
    // given
    const chef = new Object();

    // when
    chef.name = '백종원';
    chef.age = 58;

    // then
    expect(chef.name).toBe('백종원');
    expect(chef.age).toBe(58);
  });

  it('사용자 정의 생성자 함수를 통해 객체를 생성한다.', () => {
    // given
    function Chef(name, age) {
      this.name = name;
      this.age = age;
    }

    // when
    const sut = new Chef('안성재', 43);

    // then
    expect(sut.name).toBe('안성재');
    expect(sut.age).toBe(43);
  });
});
