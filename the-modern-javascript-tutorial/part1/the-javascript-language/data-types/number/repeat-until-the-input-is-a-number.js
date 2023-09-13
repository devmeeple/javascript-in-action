/**
 * 사용자가 입력을 담당하는 함수
 * @param message
 * @returns {string}
 */
function getUserInput(message) {
    return prompt(message, 0);
}

/**
 * 주어진 값이 유효한가 숫자인지 확인
 * @param value
 * @returns {boolean}
 */
function isValidNumber(value) {
    return isFinite(value) && value !== null && value !== '';
}

function readNumber() {
    while(true) {
        const userInput = getUserInput('숫자를 입력해주세요.');

        if ( isValidNumber(userInput) ) {
            return +userInput;
        }

        if ( userInput === null || userInput === '' ) {
            return null;
        }
    }
}

console.log(`사용자가 입력한 값은 ${readNumber()}과 같습니다.`);