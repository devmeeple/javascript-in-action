#                  

## 출력하기

1. innerHTML
2. document.write()
3. console.log()
4. window.alert()

### HTML DOM 요소를 이용

```javascript
const str = document.getElementById('result');
str.innerHTML = '입력하는 내용';
```

- 가장 많이 사용되는 방법. HTML DOM 요소를 이용한 innerHTML 프로퍼티 이용

### document.write()

테스트나 디버깅을 위해 사용, 테스트 이외의 용도로 사용할 때에는 주의해서 사용해야함

### console.log()

웹 브라우저 콘솔을 사용해 출력

### window.alert()

`window` 객체의 메소드나 프로퍼티를 사용할 때는 `window` 접두사를 생략할 수 있음

# DOM 조작

새로운 노드를 생성하고 `DOM`에 추가하거나 기존 노드를 삭제 또는 교체하는 행동을 의미한다.

### innerHTML

- 단순한 작업에 유용
- 복잡한 작업(기존 요소를 제거하지 않고, 위치 지정)에 적합하지 않음

```javascript
document.getElementById('aboutDOM').innerHTML = 'innerHTML 사용 후: 기존 자식 노드가 제거되고 파싱된다.'
```

입력받은 데이터를 `innerHTML` 그대로 프로퍼티에 할당하는 것은 `XSS(크로스 사이트 자바스크립팅 공격)`에 취약

### insertAdjacentHTML

- 기존 요소를 제거하지 않고 위치를 지정해 새로운 요소 추가

```javascript
const result = document.getElementById('result');
result.insertAdjacentElement('afterbegin', 'insertAdjacentHTML: 기존 요소를 제거하지 않고 위치 지정');
```

- `XSS`에 취약한건 동일

### 복수의 노드 생성과 추가

- `DocumentFragment`는 별도의 서브 DOM을 구성, 기존 DOM에 추가하기 위한 용도로 사용