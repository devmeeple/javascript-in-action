let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

const resetGame = () => {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');

  Array.from(resetParas).forEach((para) => {
    const resetPara = para;
    resetPara.textContent = '';
  });
  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
};
const setGameOver = () => {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = '새로운 게임 시작하기';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
};
const checkGuess = () => {
  const userGuess = Number(guessField.value);
  // 첫번째 입력
  if (guessCount === 1) {
    guesses.textContent = '이전 입력: ';
  }
  guesses.textContent += `${userGuess} `;

  // 정답
  if (userGuess === randomNumber) {
    lastResult.textContent = '축하합니다. 당신이 이겼어요!';
    lastResult.style.backgroundColor = 'green';
    lowOrHigh.textContent = '';
    setGameOver();

    // 기회 10번 초과
  } else if (guessCount === 10) {
    lastResult.textContent = `게임종료: 기회가 종료되었습니다. | 정답은 [${randomNumber}] 입니다 ^____^`;
    lowOrHigh.textContent = '';
    setGameOver();

    // 일반 상황
  } else {
    lastResult.textContent = '틀렸습니다.';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHigh.textContent = '높은 수를 입력해주세요.';
    } else if (userGuess > randomNumber) {
      lowOrHigh.textContent = '낮은 수를 입력해주세요.';
    }
  }

  guessCount += 1;
  guessField.value = '';
  guessField.focus();
};

guessSubmit.addEventListener('click', checkGuess);
