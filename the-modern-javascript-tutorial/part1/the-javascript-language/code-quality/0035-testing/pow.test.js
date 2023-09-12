const pow = require('./pow');

describe('주어진 숫자의 n 제곱', () => {
    it('5를 1 제곱하면 5', () => {
        expect(pow(5, 1)).toBe(5);
    });

    it('5를 2 제곱하면 25 ', () => {
        expect(pow(5, 2)).toBe(25);
    });

    it('5를 3 제곱하면 125', () => {
        expect(pow(5, 3)).toBe(125);
    });
});

