const accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(`누산기의 총 합은 다음과 같습니다. ${accumulator.value}`);

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt('숫자를 입력해주세요.', 0);
    };
}