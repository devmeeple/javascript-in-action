# 모던 JavaScript 튜토리얼

https://ko.javascript.info/

# 소개

## 1.1 자바스크립트란?

- 정적인 페이지를 동적으로 만들기 위해(생동감을 불어넣기 위해) 등장했고 현재는 다양한 환경에서 사용 중임
- LiveScript -> Java의 인기, JavaScript -> ECMA Script
- 자바스크립트 엔진(JavaScript engine)
    - V8 - chrome, opera
    - SpiderMonkey - Firefox

## 1.3 코드 에디터

- 최근에는 통합 개발 환경(IDE)과 경량 에디터의 구분이 모호함
- 대표: WebStorm, Visual Studio Code

## 1.2 매뉴얼과 명세서

- 튜토리얼 이후 그대들은 어떻게 살 것인가
- 공식문서: ECMA-262 명세서(specification)
- 매뉴얼: [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- MDN [검색 키워드]를 입력해 검색엔진의 도움을 받을 수 있음

## 1.4 개발자 콘솔

- 개발자 도구를 어떻게 사용할 수 있을까?
- chrome: `F12`, `command + option + j`
- 여러 줄을 입력할 때: `shift + enter`

# 자바스크립트 기본

## 2.1 Hello, world!

- 웹 페이지에 자바스크립트 사용하기 `<script>`
- 스크립트를 별도의 파일에 작성하면 브라우저환경에서 성능상 이점이 있음
    - 캐시에 저장 -> 트래픽 절약, 속도 👍

## 2.2 코드 구조

- 문(statement)이란 무엇인가?
- 세미콜론을 의도적으로 넣는 방법을 권장
- 주석
    - `//`, : `command + /`, 한 줄
    - `/* */`: `command + option + /` 여러 줄

## 2.3 엄격 모드

- 엄격 모드란 무엇인가?
    - `use strict` 최상단

## 2.4 변수와 상수

- 변수란 무엇인가?: 데이터를 저장하고 식별하기 이를 식별하기 위해 이름을 붙임
- 변수는 어떻게 선언하는가?
    - 변수 명명 규칙: `$`, `_`, 문자, 숫자, 첫 글자 숫자 X
- 상수를 어떻게 선언하는가?
- 대문자 상수와 일반적인 상수

## 2.5 자료형

- 동적 타입(dynamically typed) 언어란?
- 자료형 8가지
- 자료형을 반환하는 방법

## 2.6 alert, prompt, confirm을 이용한 상호작용

- alert, prompt, confirm은 무엇인가?

## 2.7 형변환

- 형변환이란?
- 원시형의 형변환
    - 문자형
    - 숫자형
    - 불린형

## 2.8 기본 연산자와 수학

- 수학 연산자 6가지
- 문자열 연결
- 할당, 복합 할당 연산자
- 증가·감소 연산자

- 사용빈도 낮음
    - 비트 연산자
    - 쉼표 연산자

## 2.9 비교 연산자

- 불린형 반환
- 문자열 비교
- 다른 형을 가진 값 간의 비교
- 일치 연산자

## 2.10 if와 '?'를 사용한 조건 처리

- if
- ?(조건부 연산자)

## 2.11 논리 연산자

- 논리 연산자 3가지
- 단락 평가

## 2.12 nullish 병합 연산자 '??'

- nullish 병합 연산자(nullish coalescing operator)
- '??'와 '||'의 차이

## 2.13 while과 for 반복문

- while, do...while, for
- 반복문 빠져나오기
- 다음 반복으로 넘어가기: 중첩을 줄이는데 도움

## 2.14 switch문

- switch문
- 자료형의 중요성

## 2.15 함수

- 함수란?
- 함수 선언문
- 지역 변수(local variable)
- 외부 변수(outer variable), 전역 변수(global variable)
- 선언 시: 매개변수(parameter) = 인자, 호출 시: 인수(argument)
- 기본값
- 반환 값
- 함수 이름 짓기(접두어 관습), 함수 == 주석

## 2.16 함수 표현식

- 함수 표현식
- 세미 콜론이 왜 필요한가? 코드 블록이 아닌 값으로 평가되기 때문에 문장의 마무리(세미콜론)이 필요함
- 콜백 함수
- 일반적인 값 = 데이터, 동작을 나타내는 값 = 함수
- 함수 선언문과 함수 표현식

## 2.17 화살표 함수 기본

- 화살표 함수

## 2.18 기본 문법 요약
