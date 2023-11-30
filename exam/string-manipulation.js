const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('문자열을 입력해주세요: ', (answer) => {
  console.log(`입력한 문자는 ${answer}입니다.`);
  console.log(`대문자: ${answer.toUpperCase()} / 소문자: ${answer.toLowerCase()}`);
  // (1) 문자열을 배열로 변환, (2) 뒤집기, (3) join
  const reverseAnswer = answer.split('').reverse().join('');
  console.log(`${reverseAnswer}`);
  rl.close();
});
