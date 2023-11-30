/**
 * 사용자로부터 여러 단어를 입력받습니다 (예: "banana apple mango").
 * 입력받은 단어들을 알파벳 순서대로 정렬합니다.
 * 정렬된 단어들을 출력합니다.
 * 또한, 각 단어의 길이도 함께 출력합니다 (예: "apple - 5, banana - 6, mango - 5").
 */

const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');

const rl = readline.createInterface({input, output});

function stringCalculate() {
    rl.question('단어를 입력하세요: ', (answer) => {
        const answerArr = answer.split(' ');
        // 원본배열을 수정하지 않고 정렬하기 (1) slice, (2) spread operator
        const sortedArr = [...answerArr].sort();
        console.log(`정렬결과: ${sortedArr}`);
        const wordsWithLength = answerArr.map(word => `${word} - ${word.length}`).join(', ');
        console.log(`최종 완성된 배열: ${wordsWithLength}`);
        rl.close();
    });
}

stringCalculate();