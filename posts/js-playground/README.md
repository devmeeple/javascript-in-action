# 자바스크립트 플레이그라운드

> [쉽고 자연스럽게 배워보는 Javascript 입문 - 코드스쿼드 마스터즈 코스 레벨1](https://www.inflearn.com/course/javascript-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-codesquad-masters_lv1)

학습한 내용을 정리한다.

# 기본기

## 개발 환경 구축

* OS: macOS
* 에디터: IntelliJ
* 웹 브라우저: Chrome
* git GUI: Sourcetree

### hello world 출력하기

> Chrome 개발자 도구 단축키: `cmd + option + i` / `F12`

* 크롬 개발자 도구를 이용하여 콘솔에서 출력하기

```javascript
console.log('Hello, World!');
```

* `hello.html` 작성하기

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>JavaScript Playground</title>
</head>
<body>
<h1>자바스크립트 플레이그라운드</h1>
<script>console.log('Hello, World!');</script>
</body>
</html>
```

### github 사용하기

```shell
git add [파일]
git commit -m [커밋메시지]
git push
```

## 연습문제 1

1. 두 수를 입력받아 사칙연산의 결과를 표시한다.
2. BMI를 계산하는 프로그램을 작성한다.
3. 화씨를 입력받아 섭씨로 바꾸는 프로그램을 작성한다.
4. 입력한 문자열의 길이를 알려주는 프로그램을 작성한다.

### BMI 계산하기

> BMI: 몸무게(kg) / 키(m) * 키(m)

BMI는 체질량지수를 의미한다. 비만도 측정에 유용하다.

```javascript
const heightInCm = +prompt('신장을 입력해주세요(cm): ') / 100;
```

계산식에서 신장 기준이 m인것을 주목해야 한다. 따라서 cm로 입력받는다면 m로 변환 해야한다.

### 화씨를 섭씨로 변환하기

> ℃ = (℉ - 32) / 1.8

```javascript
const celsius = (fahrenheit - 32) / 1.8;
```

### 문자열 길이 측정하기

```javascript
const name = string.length;
```

## 연습문제2

* 사용자가 입력한 숫자가 소수인지 아닌지 알려주는 프로그램을 작성하라

## 소수 판별 프로그램

> 소수란 약수가 1과 자기 자신뿐인 수를 의미한다.

```javascript
const num = parseInt(prompt('숫자를 입력해주세요'), 10);
```

수를 입력받고 10진수로 변환한다.

```javascript
for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}
```

소수는 1을 제외한다. 나머지가 0일 경우 소수가 아니다.

# 구구단 구현하기

## 2, 3단 구현 - 계산 및 출력

* 구구단에서 2단과 3단을 계산하고 화면에 출력한다.
    * 예) 2 * 1 = 2, ... 2 * 9 =18
* 프로그램1: 콘솔에 출력하는 프로그램 작성
* 프로그램2: 화면에 출력하는 프로그램 작성
* `gugudan1.html`과 `gugudan2.html`에 정의한다.

## 4, 5단 구현 - 값 입력 및 변수

* 구구단에서 4단과 5단을 계산한 결과 값을 변수에 저장하고 출력한다.
* 4, 5는 변하지 않는 값이다. (상수)
* 사용자가 입력한 숫자 값에 해당하는 단을 출력한다.
    * 예) 5를 입력하면 5단 전체를 계산해 출력한다.
* 콘솔 버전과 웹 버전 두 가지를 작성한다.
* `gugudan3.html`과 `gugudan4.html`에 정의한다.