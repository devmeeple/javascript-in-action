// 화살표함수로 메서드를 정의했지만 this 바인딩의 차이가 발생하여 '일반함수로 작성해야 된다.' 라는 의견을 받았다.
// 일반함수는 호출될때 this가 동적으로 결정되지만 화살표함수는 그렇지 않다고 한다. 추가로 학습이 필요하다.
function Calculator() {

    this.read = function () {
        this.a = +prompt('a를 입력해주세요.', 0);
        this.b = +prompt('b를 입력해주세요.', 0);
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };

}

const calculator = new Calculator();
calculator.read();

alert(`sum 함수의 실행결과 : 합계는 ${calculator.sum()} 입니다.`);
alert(`mul 함수의 실행결과 : 합계는 ${calculator.mul()} 입니다.`);