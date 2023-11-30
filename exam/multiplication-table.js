/**
 * 요구사항
 * 2부터 9까지의 구구단을 출력합니다.
 * 각 단은 for 또는 while 반복문을 사용하여 출력합니다.
 * 출력 형식 예시: "2 x 1 = 2"
 */

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

function gugudan() {
    rl.question('(1) For-Loop, (2) While-Loop 1또는 2를 입력해주세요: ', (answer) => {
        if (answer === '1') {
            calculateForLoop();
        } else if (answer === '2') {
            calculateWhileLoop();
        } else {
            console.log('유효하지 않은 입력입니다 다시 시도해주세요..');
            gugudan(); // 유효하지 않은 입력을 하면 프로그램을 다시 시작, 재귀호출
        }
    });
}

const calculateForLoop = () => {
    console.log('(2) While-Loop의 출력결과는 다음과 같습니다.');
    for (let i = 2; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
        console.log('------------------');
    }
    rl.close();
};

const calculateWhileLoop = () => {
    let i = 2;
    while (i <= 9) {
        let j = 1;
        while (j <= 9) {
            console.log(`${i} * ${j} = ${i * j}`);
            j++;
        }
        console.log('------------------');
        i++;
    }
    rl.close();
};

gugudan();