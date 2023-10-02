const number = Number(prompt('참가인원 수를 입력해주세요'));
const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');
let word; // 제시어
let newWord; // 새로 입력한 단어

const onClickButton = () => {
    if (!word || word[word.length -1] === newWord[0]) { // 제시어가 비어있나? 제시어 마지막 글자와 입력한 단어 첫 글자 비교
        // 비어있다.
        word = newWord; // 입력한 단어가 제시어가 된다 + 데이터를 바꾸고 화면 출력도 신경써서 코딩한다
        $word.textContent = word;
        const order = parseInt($order.textContent); // 현재 순서
        if (order + 1 > number) {
            $order.textContent = 1;
        } else {
            $order.textContent = order + 1;
        }
    } else {
        alert('올바르지 않은 단어입니다');
    }
    // 사용자 편의를 위해 추가
    // 입력한 내용을 사용자가 일일히 지우지 않도록 값을 초기화 시켜준다
    $input.value = '';
    $input.focus();
};

const onInput = (event) => {
    newWord = event.target.value;
};

$button.addEventListener('click', onClickButton);
$input.addEventListener('input', onInput);