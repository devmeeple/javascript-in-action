// 함수 호출 전
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

multiplyNumeric(menu);

function multiplyNumeric(menu) {
  for (const key in menu) {
    if (typeof menu[key] === 'number') {
      menu[key] = menu[key] * 2;
    }
  }
}

module.exports = multiplyNumeric;

// 함수 호출 후
menu = {
  width: 400,
  height: 600,
  title: 'My menu',
};