describe('문자열 제대로 다루기', () => {
  describe('인사말 필터링 하기', () => {
    const greetings = [
      'Happy Birthday!',
      'Merry Christmas my love',
      'A happy Christmas to all the family',
      "You're all I want for Christmas",
      'Get well soon',
    ];

    it('크리스마스 메시지인 경우만 출력한다', () => {
      const result = greetings.filter((greeting) => greeting.includes('Christmas'));
      expect(result).toHaveLength(3);
      expect(result).toContain('Merry Christmas my love');
      expect(result).toContain('A happy Christmas to all the family');
      expect(result).toContain("You're all I want for Christmas");
    });
  });

  describe('대/소문자 수정하기', () => {
    let cities;
    beforeEach(() => {
      cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
    });

    it('city변수에 담긴 값을 새로운 변수에 저장한다', () => {
      const lowerCaseCites = cities.map((city) => city.toLowerCase());
      const result = ['london', 'manchester', 'birmingham', 'liverpool'];
      expect(lowerCaseCites).toEqual(result);
    });

    it('저장된 문자열에 첫 문자를 다른 변수에 저장한다.', () => {
      const lowerCasedCities = cities.map((city) => city.toLowerCase());
      const firstLetters = lowerCasedCities.map((city) => city[0]);
      expect(firstLetters).toEqual(['l', 'm', 'b', 'l']);
    });

    it('첫 글자를 다시 대문자로 변경한다.', () => {
      const lowerCasedCities = cities.map((city) => city.toLowerCase());
      const capitalizedCities = lowerCasedCities.map(
        (city) => city[0].toUpperCase() + city.slice(1),
      );
      expect(capitalizedCities).toEqual([
        'London',
        'Manchester',
        'Birmingham',
        'Liverpool',
      ]);
    });

    it('최종결과를 출력한다.', () => {
      const correctedCities = cities.map(
        (city) => city[0].toUpperCase() + city.slice(1).toLowerCase(),
      );
      expect(correctedCities).toEqual([
        'London',
        'Manchester',
        'Birmingham',
        'Liverpool',
      ]);
    });
  });
});
