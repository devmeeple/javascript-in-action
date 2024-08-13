describe('Array.prototype.indexOf()', () => {
  const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ];

  it('배열에서 포함된 요소의 인덱스 값을 반환한다', () => {
    // given
    const black = 'black';

    // when
    const sut = COLORS.indexOf(black);

    // then
    expect(sut).toEqual(0);
  });

  it('요소를 찾을 수 없으면 -1을 반환한다', () => {
    // given
    const badSearchElement = 'NOT FOUND';

    // when
    const sut = COLORS.indexOf(badSearchElement);

    // then
    expect(sut).toEqual(-1);
  });
});
