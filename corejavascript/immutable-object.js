/**
 * p.20 ~ 28 불변 객체
 * 객체의 가변성에 따른 문제점
 * 불변 객체 원칙을 위반, 객체의 속성을 변경 할 때는 새로운 객체를 생성하여 불변성을 유지
 * 문제를 해결하기 위해서는 간단한 함수 선언(얕은 복사)과 라이브러리를 사용한다
 */
const champion = {
  name: '이즈리얼',
  position: '원딜',
};

const changePosition = (champ, newPosition) => {
  // 동일한 메모리 주소를 참조, champion 의 속성도 변경이 일어남
  const newChampion = champ;
  newChampion.position = newPosition;
  return newChampion;
};

const champion2 = changePosition(champion, '정글');

// 두 참조가 같은 객체를 참조하고 있는지 확인
if (champion === champion2) {
  console.log('변경이 일어나지 않았습니다.');
} else if (champion !== champion2) {
  console.log('변경이 일어났습니다.');
}

console.log(champion, champion2);
