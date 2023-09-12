const multiplyNumeric = require('./multiply-numeric-property-value-by-2');

describe('프로퍼티 값 두배로 부풀리기', () => {
    it('프로퍼티 값이 숫자라면 프로퍼티 값이 숫자인 경우 두 배로 수정된다.', () => {
        const initialMenu = { width: 200, height: 300, title: 'My menu' };
        const expectedMenu = { width: 400, height: 600, title: 'My menu' };

        multiplyNumeric(initialMenu);
        expect(initialMenu).toEqual(expectedMenu);
    });

    it('프로퍼티 값이 숫자가 아니라면 객체는 수정되지 않는다.', () => {
        const initialMenu = { width: '200', height: '300', title: 'My menu' };
        const expectedMenu = { ...initialMenu };

        multiplyNumeric(initialMenu);
        expect(initialMenu).toEqual(expectedMenu);
    });
});