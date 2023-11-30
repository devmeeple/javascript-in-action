const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num1;
let num2;
let operator;

const calculate = () => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      console.log('유호하지 않은 연산입니다.');
      rl.close();
      return;
  }

  console.log(`연산의 결과는 ${result}`);
  rl.close();
};

const askSecondNumber = () => {
  rl.question('두번째 숫자를 입력해주세요.', (answer) => {
    num2 = parseFloat(answer);
    calculate();
  });
};

const askOperator = () => {
  rl.question('연산자를 입력해주세요: ', (answer) => {
    operator = answer;
    askSecondNumber();
  });
};

const askFirstNumber = () => {
  rl.question('첫 번째 숫자를 입력해주세요: ', (answer) => {
    num1 = parseFloat(answer);
    askOperator();
  });
};

askFirstNumber();
