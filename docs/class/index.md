> 417 ~ 466

- [ ] 인스턴스 프로퍼티란 무엇인가요?
- [ ] TypeScript 도입으로 달라지는 점

자바스크립트가 객체지향 언어라는 사실에 동의하지 않는 의견도 심심치 않게 지켜볼 수 있다. 그런데 객체지향 언어라는 표현을 너무 많이봐서 스며들었다.

## 1. 클래스는 프로토타입의 문법적 설탕인가?

- 417 프로토타입 기반 객체지향 언어는 클래스가 필요 없는(class free) 객체지향 프로그래밍 언어다.
- [x] ES6 클래스 문법이 등장하기 이전에는 어떻게 객체지향, 클래스를 구현했을까?
- [x] 사실 클래스는 함수다?
- [ ] 418 단, 클래스와 생성자 함수는 모두 프로토타입 기반의 인스턴스를 생성하지만 정확히 동일하게 동작하지는 않는다. 클래스는 생성자 함수보다 엄격하며 생성자 함수에서는 제공하지 않는 기능도 제공한다.
- [x] 클래스는 호이스팅이 발생할까, 하지 않을까? 문법적 설탕이라면 발생해야 하지 않을까? MDN 과의 충돌

생성자 함수에 대해 잘 모른다.

### ES6 이전에 클래스

- 생성자 함수란 객체를 생성할 때 사용하는 함수다.
- 생성자 함수(constructor function)과 프로토타입 기능을 활용하여 구현했다.

## 호이스팅이 발생하지 않는다?

- 클래스가 문법적 설탕이라면 다른 문법과 같이 발생해야 자연스럽지 않나?를 주장했다. 하지만 클래스는 함수와 유사한 구조지만, 엔진이 처리하는 방식이 다르다. 엄격 모드가 추가되기 때문이다. 클래스 선언은 TDZ
  영향을 받는다. 마치 let과 const 처럼.

<참고 자료>

- [Class-Free OOP](https://depth-first.com/articles/2019/03/04/class-free-object-oriented-programming/)
- [Stack Overflow 'Why are ES6 classes not hoisted?'](https://stackoverflow.com/questions/35537619/why-are-es6-classes-not-hoisted)

## 2. 클래스 정의

- 예제 코드 참고

## 3. 클래스 호이스팅

- 421 클래스는 함수로 평가된다.
- Babel 확인
- 422 var, let, const, function, function*, class 키워드를 사용하여 선언된 모든 식별자는 호이스팅된다. 모든 선언문은 런타임 이전에 먼저 실행되기 때문이다.

클래스 호이스팅 이야기가 이곳에 있었다!

## 4. 인스턴스 생성

- 423 ECMAScript(ES11/ECMAScript 2020)에 따르면 인스턴스 프로퍼티는 반드시 constructor 내부에서 정의해야 한다. 하지만 2021년 1월 현재, 클래스 몸체에 메서드뿐만이 아니라
  프로퍼티를 직접 정의할 수 있는 새로운 표준 사양이 제안되어 있다.

## 5. 메서드

- 432 정적 메서드는 인스턴스로 호출할 수 없다. 정적 메서드가 바인딩된 클래스는 인스턴스의 프로토타입 체인상에 존재하지 않기 때문이다. 다시 말해, 인스턴스의 프로토타입 체인 상에는 클래스가 존재하지 않기
  때문에 인스턴스로 클래스의 메서드를 상속받을 수 없다.

### 5.4 정적 메서드와 프로토타입 메서드의 차이

- 433 따라서 메서드 내부에서, 언제 정적 메서드, 프로토타입 메서드

## 7. 프로퍼티

### 7.1 인스턴스 프로퍼티

- 437 ES6의 클래스는 다른 객체지향 언어처럼 private, public, protected 키워드와 같은 접근 제한자를 지원하지 않는다. 따라서 인스턴스 프로퍼티는 언제나 public 하다.

### 7.2 접근자 프로퍼티

- 438 다시 말해 getter는 호출하는 것이 아니라 프로퍼티처럼 참조하는 형식으로 사용하며, 참조 시에 내부적으로 getter가 호출된다. setter도 호출하는 것이 아니라 프로퍼티처럼 값을 할당하는 형식으로
  사용하며, 할당 시에 내부적으로 setter가 호출된다.

### 7.3 클래스 필드 정의 제안

- 442 클래스 필드를 참조하는 경우 자바와 같은 클래스 기반 객체지향 언어에서는 this를 생략할 수 있으나 자바스크립트에서는 this를 반드시 사용해야 한다.
- 444 클래스 필드 정의 제안으로 인해 인스턴스 프로퍼티를 정의하는 방식은 두 가지가 되었다. 인스턴스를 생성할 때 외부 초기값으로 클래스 필드를 초기화할 필요가 있다면 constructor에서 인스턴스
  프로퍼티를 정의하는 기존 방식을 사용하고, 인스턴스를 생성할 때 외부 초기값으로 클래스 필드를 초기화할 필요가 없다면 기존의 constructor에서 인스턴스 프로퍼티를 정의하는 방식과 클래스 필드 정의 제안
  모두 사용할 수 있다.

### 7.4 private 필드 정의 제안

- 447 private 필드는 반드시 클래스 몸체에 정의해야 한다. private 필드를 직접 constructor에 정의하면 에러가 발생한다.

### 7.5 static 필드 정의 제안

- [ ] static 메서드와, 필드 왜 사용할까? 유틸?

## 8. 클래스 확장

### 8.1 클래스 상속과 생성자 함수 상속

- 448 상속에 의한 클래스 확장은 지금까지 살펴본 프로토타입 기반 상속과는 다른 개념이다. 프로토타입 기반 상속은 프로토타입 체인을 통해 다른 객체의 자산을 상속받는 개념이지만 상속에 의한 클래스 확장은 기존
  클래스를 상속받아 새로운 클래스를 확장하여 정의하는 것이다.