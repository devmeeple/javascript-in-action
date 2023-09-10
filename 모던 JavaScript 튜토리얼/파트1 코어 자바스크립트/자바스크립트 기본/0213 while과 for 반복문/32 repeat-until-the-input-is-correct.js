while (true) {
    const userNumber = prompt('100 보다 큰 숫자를 입력하세요.', '0');
    // 사용자가 100보다 큰 숫자를 입력하거나, 입력을 취소하면 루프를 종료한다.
    if (userAnswer > 100 || userAnswer === null || userAnswer === '') {
        break;
    }
}