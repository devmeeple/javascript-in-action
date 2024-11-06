function isFriends(names) {
  return names.filter((name) => name.length === 4);
}

describe('Friend or Foe?', () => {
  it('이름이 4글자면 친구에 포함한다.', () => {
    // given
    const names = ['Ryan', 'Kieran', 'Jason', 'Yous'];

    // when
    const result = isFriends(names);

    // then
    expect(result).toEqual(['Ryan', 'Yous']);
  });
});
