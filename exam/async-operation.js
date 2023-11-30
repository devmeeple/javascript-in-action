/**
 * Node.js의 setTimeout 함수를 사용하여 비동기적으로 작업을 수행합니다.
 * 사용자로부터 숫자를 입력받아, 해당 숫자만큼의 시간(초)이 지난 후에 메시지를 콘솔에 출력합니다.
 * Promise를 사용하여 비동기 로직을 구현합니다.
 * 입력된 시간이 지난 후 "Timeout completed"와 같은 메시지를 출력합니다.
 */

const readline = require('node:readline');
const { stdin: input, stdout: output} = require('node:process');

const rl = readline.createInterface({input, output});

// 1. 사용자에게 시간을 입력받고 * 1000을 계산함
function wait(millisecond) {
    return new Promise(resolve => setTimeout(resolve, millisecond));
}


function delayMessage() {
    rl.question('숫자를 입력해주세요: ', async (input) => {
        const seconds = parseInt(input);
        if (isNaN(seconds)) {
            console.log('유효하지 않은 입력입니다. 숫자를 입력해주세요');
            rl.close();
            return;
        }

        console.log(`${seconds}초후 결과를 출력합니다.`);
        await wait(seconds * 1000);
        console.log('Timeout completed');
        rl.close();
    });
}

delayMessage();