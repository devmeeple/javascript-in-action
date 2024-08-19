const { meter } = require('../../src/javacan/password-strength-meter');

describe('PasswordStrengthMeterTest', () => {
  it('유효한 비밀번호를 입력한다. [성공]', () => {
    // given
    const password = '1q2w3e4r';

    // when
    const sut = meter(password);

    // then
    expect(sut).toBe('유효한 비밀번호 입니다.');
  });

  describe('유효하지 않은 비밀번호를 입력하면 에러 메시지를 출력한다. [실패]', () => {
    it.each([null, undefined, ''])(
      '비밀번호 "%s"은(는) 유효하지 않은 비밀번호다.',
      (invalidPassword) => {
        // given

        // when
        const sut = meter(invalidPassword);

        // then
        expect(sut).toBe('유효하지 않은 비밀번호 입니다.');
      },
    );
  });
});
