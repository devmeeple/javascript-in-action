function makeUser() {
    return {
        name: 'John',
        ref: this
    };
}

let user = makeUser();

console.log( user.ref.name ); // 에러발생