const isEmpty = require('./check-for-emptiness');

describe('객체가 비어있는지 확인하기', () => {
    it('true 를 반환하면 객체는 비어있다. ', () => {
        const emptyObj = {};
        expect(isEmpty(emptyObj)).toEqual(true);
    });

    it('false 를 반환하면 객체는 비어있지 않다. ', () => {
        const notEmptyObj = {'8:30': 'get up'};
        expect(isEmpty(notEmptyObj)).toEqual(false);
    });
});