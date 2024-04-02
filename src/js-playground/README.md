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
