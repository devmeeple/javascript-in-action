/**
 * 문제 3: 배열과 객체의 조작
 * 여러 사람의 이름과 나이를 가진 객체 배열을 생성합니다. 예: [ { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 } ]
 * 사용자로부터 이름을 입력받습니다.
 * 입력받은 이름에 해당하는 사람의 나이를 출력합니다.
 * 해당 이름이 없는 경우, 적절한 메시지를 출력합니다.
 * 배열의 각 객체에 대해, 이름은 대문자로, 나이는 5년 증가시킨 새 배열을 만들고 출력합니다.
 */

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output});

const alice = {
    name: 'Alice',
    age: 25
};

const bob = {
    name: 'Bob',
    age: 30
};

const users = [alice, bob]; // (1)

function printUserName() {
    rl.question('이름을 입력해주세요: ', (name) => {
        // 값을 조회한다. if - else
        const foundUser = users.find((user) => user.name === name);

        if (foundUser) {
            console.log(`${foundUser.name}의 나이는 ${foundUser.age}입니다.`);
        } else {
            console.log('유효하지 않은 입력입니다.');
        }

        const updatedUsers = users.map((user) => ({
            name: user.name.toUpperCase(),
            age: user.age + 5,
        }));
        console.log(updatedUsers);
        rl.close();
    });
}

printUserName();