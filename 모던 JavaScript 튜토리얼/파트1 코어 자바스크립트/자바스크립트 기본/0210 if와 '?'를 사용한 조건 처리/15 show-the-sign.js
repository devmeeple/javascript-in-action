const userAnswer = prompt('숫자 하나를 입력해주세요.', 0);

if ( +userAnswer > 0) {
    alert(1);
} else if ( +userAnswer < 0) {
    alert(-1);
} else {
    alert(0);
}