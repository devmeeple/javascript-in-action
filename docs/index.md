# 트러블 슈팅(Troubleshooting)

## 비밀번호 빈 문자열 검증하기

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

**<참고 자료>**

- [MDN Web Docs 'Optional chaining (?.)'](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [The Modern JavaScript Tutorial 'Optional chaining](https://javascript.info/optional-chaining)
