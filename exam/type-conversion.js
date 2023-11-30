const a = '5';
const b = 10;

const c = a + b; // string과 number의 연산으로 변수 b는 자동으로 string 형변환이 된다. 따라서 c는 string, 510.
const d = b + a; // 위와 마찬가지로 d는 105

const e = parseInt(a) + b; // parseInt는 number 타입으로 명시적 형변환을 시키는 함수이다. 따라서 a는 숫자 타입으로 변환되어 e는 15
