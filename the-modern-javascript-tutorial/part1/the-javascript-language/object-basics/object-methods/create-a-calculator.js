const calculator = {
  read() {
    this.a = +prompt('값을 입력해주세요.', 0);
    this.b = +prompt('값을 입력해주세요.', 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

module.exports = calculator;

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());