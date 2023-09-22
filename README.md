# JavaScript 정리 [문서 요약 정리]

백틱은 줄바꿈이 가능하다. 따옴표(큰, 작은)는 불가능하다. 줄바꿈을 하려면 개행문자가 필요하다.

NaN -> Not a Number

parseInt, Number
parseInt는 해석할 수 있는 최대로 해석함. -> 숫자를 뽑아냄.  
Number는 해석할 수 없는 문자를 만나면 NaN / NaN == NaN => false  
== 값만 비교, === 값, 자료형비교

컴퓨터도 실수를해. 실수가 문제야. 부동소수점 문제

## 다시보기
[메소드체이닝](https://ko.javascript.info/object-methods)
- this 바인딩 : 일반함수 / 화살표함수
- [생성자로 래퍼 객체를 만들지마세요.](https://ko.javascript.info/primitives-methods)
## 객체
- 원시형 타입 : 하나의 데이터만 담을 수 있다.
- 객체형 타입 : 다양한 데이터를 담을 수 있다.

### 'in' 연산자로 프로퍼티 존재 여부 확인하기
자바스크립트 객체는 존재하지 않는 프로퍼티에 접근하려 해도 에러가 발생하지 않고 `undefined`를 반환한다.
특징을 응용하면 프로퍼티 존재 여부를 쉽게 확인할 수 있다.

```javascript
"key" in object
```

## 참고자료
- [모던 JavaScript 튜토리얼](https://ko.javascript.info/)
- [mdn web docs](https://developer.mozilla.org/ko/docs/Web/JavaScript)
- [인프런 제로초 자바스크립트](https://www.inflearn.com/course/%EB%A0%88%EC%B8%A0%EA%B8%B0%EB%A6%BF-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)
- [쏙쏙 들어오는 함수형 코딩](https://product.kyobobook.co.kr/detail/S000001952246)