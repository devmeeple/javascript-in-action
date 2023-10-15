# 로또 추첨기

## 동기, 비동기
- 동기: 한 작업이 끝나야 다음 작업이 시작된다. 순차적으로 작업을 처리한다.
- 비동기: 여러 작업이 동시에 일어날 수 있다.(병렬) 하나의 작업이 끝나기를 기다리지 않고 다른 작업을 시작할 수 있다.
- 이를 더 심도있게 학습하기 위해서는 콜스택, 이벤트 루프에 대한 이해가 필요하다.
- [참고자료 : 동기와 비동기 프로그래밍의 등장 배경과 구현 방식](https://www.youtube.com/watch?v=OITMfwqmUNY)
## 피셔예이츠 셔플
- 카드를 섞거나, 어떤 목록을 무작위로 잘 섞어주는 방법 중 하나
- 수학적으로 정확하게, 공정하게 할 수 있게 고안되었다.
- 사용 : 게임, 퀴즈, 데이터 분석
## while, for 사용
- for문을 사용하는 경우
  1. 반복 횟수가 명확할 때: 배열을 순회, 정해진 횟수만큼 반복해야 할 때
  2. 여러 변수를 관리할 때: 초기화 부분에서 여러 변수를 선언 가능
- while문을 사용할 때
  1. 반복 횟수가 불명확할 때: 조건이 만족되는 동안 계속 반복해야 할 때
  2. 조건이 복잡할 때: 조건이 여러부분으로 나뉘거나, 루프 내에서 조건이 변경될 때
## splice, slice의 특성
- 차이점
  1. 불변성: `splice`는 원본 배열을 변경하고, `slice`는 원본 배열을 변경하지 않는다.
  2. 리턴 값: `splice`는 제거된 요소들의 배열을 반환하고, `slice`는 새로운 배열을 반환한다.
  3. 사용 목적: `splice`는 배열의 일부를 수정, 삭제, 또는 추가할때 사용되고, `slice`는 배열의 일부분을 복사할 때 사용된다.
### [splice](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- 배열의 특정 부분을 제거하거나 새로운 요소를 추가하여 배열을 변경한다.
- 배열자체가 변경된다.
  ```javascript
  const arr = [1, 2, 3, 4, 5];
  arr.splice(2, 1); // 인덱스 2에서 1개의 요소를 제거
  console.log(arr); // [1, 2, 4, 5]
  ```

  ```javascript
  const todos = ['Learn JS', 'Learn React', 'Learn Node'];
  todos.splice(1, 1, 'Learn Redux');
  console.log(todos);
  ```
### slice
- 배열의 특정 부분을 추출하여 새 배열을 만든다.
- 원본 배열은 변경되지 않는다.
  ```javascript
  const arr = [1, 2, 3, 4, 5];
  const newArr = arr.slice(1, 4); // 인덱스 1부터 4까지의 요소를 추출
  console.log(newArr); // [2, 3, 4]
  ```

  ```javascript
  const colors = ['red', 'green', 'blue', 'yellow'];
  const primaryColors = colors.slice(0, 3);
  console.log(primaryColors);
  ```
## 스코프
- 변수가 어디서 접근 가능한지(영역)을 결정한다. 어떤 변수를 어디서 사용할 수 있는지 알아야 하기에 중요하다.
### 함수 스코프
- 함수 안에서 선언된 변수는 함수 안에서만 사용할 수 있다.
### 블록 스코프
- 중괄호 `{}`안에서 선언된 변수는 그 블록 안에서만 사용할 수 있다.
## 클로저
- 함수가 자신이 생성될 때의 환경을 "기억"하는 것이다.
## 실행컨텍스트
- 어떤 변수가, 어떤 함수가 있는지 등의 정보가 담겨있다.
- 코드가 어떻게 실행되고, 변수와 함수가 어떻게 관리되는지 이해하기 위해 중요하다.