const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');

const rl = readline.createInterface({input, output});

let grade;

function getGrade() {
    rl.question('점수를 입력해주세요: ', (answer) => {
        const score = parseFloat(answer);
        if (isNaN(score) || score < 0 || score > 100) {
            console.log('유효하지 않은 입력입니다. 프로그램을 다시 실행합니다.');
            getGrade();
        } else {
            setGrade(score);
        }
    });
};

function setGrade(score) {
    switch (score / 10) {
        case 10:
        case 9:
            grade = 'A';
            break;
        case 8:
            grade = 'B';
            break;
        case 7:
            grade = 'C';
            break;
        case 6:
            grade = 'D';
            break;
        default:
            grade = 'F';
            break;
    }
    console.log(`점수 ${score} / 등급: ${grade}`);
    rl.close();
}

getGrade();
