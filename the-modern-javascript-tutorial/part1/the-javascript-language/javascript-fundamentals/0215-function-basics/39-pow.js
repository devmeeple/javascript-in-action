function getUserInput() {
    const x = parseFloat(prompt('x를 입력해주세요'));
    const n = parseInt(prompt('n을 입력해주세요'));

    if (isNaN(x) || isNaN(n)) {
        alert('x와 n은 숫자여야 합니다.');
        return;
    }

    if (n < 1) {
        alert(`${n}은 양의 정수이어야 합니다.`);
        return;
    }

    alert( calcPow(x, n) );
}

function calcPow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

getUserInput();