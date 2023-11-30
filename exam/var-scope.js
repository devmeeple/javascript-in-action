function testVar() {
  var x = 1;
  if (true) {
    var x = 2; // var 키워드는 함수 스코프에 영향을 끼친다.
    console.log(x); // x는 2다.
  }
  console.log(x); // var로 선언되었기 때문에 현재 x는 2다.
}

function testLet() {
  const y = 1;
  if (true) {
    const y = 2;
    console.log(y); // y는 2다. 왜냐하면 현재 스코프에서 y는 값이 2로 변경되었기 때문이다.
  }
  console.log(y); // let은 블록스코프를 가진다. 따라서 현재 스코프에 y의 값은 1이다.
}

testVar();
testLet();