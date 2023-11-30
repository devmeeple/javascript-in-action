function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}

const user = makeUser();

console.log(user.ref.name); // 에러발생