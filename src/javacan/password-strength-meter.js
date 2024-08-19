const meter = (password) => {
  if (!password?.trim()) {
    return PasswordStrength.INVALID;
  }

  return PasswordStrength.VALID;
};

const PasswordStrength = {
  VALID: '유효한 비밀번호 입니다.',
  INVALID: '유효하지 않은 비밀번호 입니다.',
};

module.exports = { meter, PasswordStrength };
