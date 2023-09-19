/**
 * 렛츠기릿 자바스크립트 별찍기 숙제 2차 답안
 * 하드코딩 -> 상수 도입
 */

const MAX_STARS = 5;

for (let i = 0; i < MAX_STARS; i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write('*');
    }
    console.log();
}