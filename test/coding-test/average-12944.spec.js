function calculateAverage(score) {
  if (score.length > 100) {
    throw new Error('배열 길이는 100을 초과할 수 없습니다.');
  }

  let result = 0;
  for (let i = 0; i < score.length; i++) {
    result += score[i];
  }
  return result / score.length;
}

describe('평균 구하기', () => {
  it('[성공: reduce] 배열 함수 reduce를 사용해서 요소를 모두 더하고 배열 길이로 나눈다.', () => {
    // given
    const scores = [1, 2, 3, 4];

    // when
    const sut =
      scores.reduce((prev, current) => prev + current, 0) / scores.length;
    // reduce 총합을 더하고, 원소의 수 만큼 나눈다.
    // 반복문으로 배열의 총합을 더하고 길이로 나눈다.

    // then
    expect(sut).toBe(2.5);
  });

  it('[성공: 반복문] 반복문을 사용해 점수를 모두 더하고 배열 길이로 나눈다.', () => {
    // given
    const scores = [1, 2, 3, 4];

    // when
    const sut = calculateAverage(scores);

    // then
    expect(sut).toBe(2.5);
  });

  it('[실패] 배열의 길이가 101 이상이면 에러가 발생한다.', () => {
    // given
    const scores = new Array(101).fill(100);
    // when & then
    expect(() => calculateAverage(scores)).toThrow(
      '배열 길이는 100을 초과할 수 없습니다.',
    );
  });

  it('[실패] 원소가 -10,000 이상 10,000 이하인 정수가 아니면 에러가 발생한다.', () => {
    // given
    // when
    // then
  });

  it('[실패: reduce] 배열 길이가 101 이상이면 에러가 발생한다.', () => {
    // given
    const scores = new Array(101).fill(100);

    // when & then
    expect(() => {
      scores.reduce((acc, curr, index, arr) => {
        if (arr.length >= 101) {
          throw new Error('배열 길이는 100을 초과할 수 없습니다.');
        }
        return acc + curr;
      }, 0);
    });
  });
});
