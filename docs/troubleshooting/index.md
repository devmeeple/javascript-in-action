# 트러블 슈팅(Troubleshooting)

## 빈 문자열 검증하기

> [빈 문자열 검증하기](https://devmeeple.github.io/empty-string-checking/)

비밀번호가 빈 문자열인지 검증하는 테스트를 작성했다.
리팩터링 중 `옵셔널 체이닝(Optional chaining)`과 `trim()` 메서드 개념이 부족하다고 느꼈다.

```javascript
// feat
if (password === null || password === undefined || password === '') {
  return PasswordStrength.INVALID;
}

// refactor
if (!password?.trim()) {
  return PasswordStrength.INVALID;
}
```

구현을 먼저 진행할 땐 검증을 명시적으로 하면 된다고 생각했다. 그런데 조금 더 나은 방법은 없을까 고민했다.
검색결과 `Optional chaining`과 `trim()`을 사용했다.

### 옵셔널 체이닝(Optional chaining)

```javascript
it('객체가 존재하면 객체를 반환한다. [성공]', () => {
  // given
  const baseballPlayer = {
    name: '원태인',
  };

  // when
  const sut = baseballPlayer?.name;

  // then
  expect(sut).toBe('원태인');
});

it('객체가 존재하지 않으면 undefined를 반환한다. [실패]', () => {
  // given
  const baseballPlayer = {};

  // when
  const sut = baseballPlayer?.name;

  // then
  expect(sut).toBeUndefined();
});
```

옵셔널 체이닝(Optional chaining)은 프로퍼티가 없는 중첩 객체를 안전하게 접근할 때 사용한다.
위와 같은 방법으로 사용가능하다.

### trim

`trim()` 메서드는 공백을 제거할 때 사용한다. 원본 문자열을 수정하지 않고 새로운 문자열을 반환한다.

```javascript
it('문자열의 양쪽 끝 공백을 제거하고 새로운 문자열을 반환한다. [성공]', () => {
  // given
  const poem =
    '   가야 할 때가 언제인가를 분명히 알고 가는 이의 뒷모습은 얼마나 아름다운가.   ';

  // when
  const sut = poem.trim();

  // then
  expect(sut).toBe(
    '가야 할 때가 언제인가를 분명히 알고 가는 이의 뒷모습은 얼마나 아름다운가.',
  );
});
```

### 동작 순서 요약

```javascript
if (!password?.trim()) {
  return PasswordStrength.INVALID;
}
```

정리하면 리팩터링된 코드의 다음과 같은 순서로 동작한다.

1. `password`가 `null`또는 `undefined`라면 `trim()` 메서드를 실행하지 않고[^1] `undefined`를 반환한다.
2. `password`가 빈 문자열이라면 `password?.trim()`은 빈 문자열 `''`을 반환한다.
3. `!` 연산자는 `undefined`, 빈 문자열, `null`과 같은 `Falsy`값[^2]을 `true`로 변환한다.
4. 조건문이 실행돼서 `PasswordStrength.INVALID`를 반환한다.

**<참고 자료>**

- [The Modern JavaScript Tutorial 'Optional chaining](https://javascript.info/optional-chaining)
- [MDN Web Docs 'Optional chaining (?.)'](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [MDN Web Docs 'String.prototype.trim()'](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)

[^1]: 단락(short-circuit, 혹은 단축) 평가
[^2]: [Mdn Web Docs 'Falsy'](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

## npm-audit

> npm Docs 'npm-audit'

```shell
npm audit [fix|signatures]
```

audit은 프로젝트 보안 취약점을 검사하는 명령어다. 프로젝트에 설치된 패키지의 의존성에서 발생하는 문제를 추적한다.
npm audit 명령을 실행해서 취약점을 확인하고, npm audit fix 명령을 통해 자동 업데이트 가능하다.

### 한계: 그럼에도 불구하고

취약점에 따라 자동으로 해결되지 않을 수 있다. 이럴 때는 npm audit fix --force 또는 수동으로 문제를 해결한다.
