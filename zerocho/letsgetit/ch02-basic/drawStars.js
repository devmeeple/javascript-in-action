/**
 * 렛츠기릿 자바스크립트 별찍기 숙제 3차 답안
 * 하드코딩 -> 상수 도입
 */

const MAX_STARS = 5;
const MIN_STARS = 0;

for (let i = MIN_STARS; i < MAX_STARS; i++) {
    for (let j = MIN_STARS; j <= i; j++) {
        process.stdout.write('*');
    }
    console.log();
}

console.log('------ 피라미드 별찍기 -----');

for (let i = MAX_STARS; MIN_STARS < i; i--) {
    for (let j = MIN_STARS; j < i; j++) {
        process.stdout.write('*');
    }
    console.log();
}

for (let i = 1; i <= 9; i+2) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write('*');
    }
    console.log();
}