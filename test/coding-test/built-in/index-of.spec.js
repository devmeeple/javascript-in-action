describe('Array.prototype.indexOf()', () => {
  it('[성공] 요소를 찾으면 인덱스를 반환한다.', () => {
    // given
    const names = ['유재석', '박명수', '정준하', '노홍철', '정형돈', '하하'];

    // when
    const sut = names.indexOf('유재석');

    // then
    expect(sut).toBe(0);
  });

  it('[실패] 요소를 찾을 수 없으면 -1을 반환한다.', () => {
    // given
    const names = ['유재석', '박명수', '정준하', '노홍철', '정형돈', '하하'];

    // when
    const sut = names.indexOf('전진');

    // then
    expect(sut).toBe(-1);
  });
});
