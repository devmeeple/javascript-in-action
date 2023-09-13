const mockPrompt = jest.fn();
global.prompt = mockPrompt;

describe('calculator', () => {
    // 여기에서 실제 코드를 import
    const calculator = require('./create-a-calculator');

    describe('2와 3을 테스트로 사용함', () => {
        beforeEach(() => {
            mockPrompt.mockReturnValueOnce('2').mockReturnValueOnce('3');
            calculator.read();
        });

        afterEach(() => {
            mockPrompt.mockClear();
        });

        it('더하기의 결과는 5', () => {
            expect(calculator.sum()).toBe(5);
        });

        it('곱하기의 결과는 6', () => {
            expect(calculator.mul()).toBe(6);
        });
    });
});
