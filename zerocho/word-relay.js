const number = Number(prompt('참가인원 수를 입력해주세요'));
const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');
let word; // 제시어
let newWord; // 새로 입력한 단어

const onClickButton = () => {
    if (!word) { // 제시어가 비어 있나요?
        // 비어있다.
        word = newWord; // 입력한 단어가 제시어가 된다 + 데이터를 바꾸고 화면 출력도 신경써서 코딩한다
        $word.textContent = word;
        const order = parseInt($order.textContent);
        if (order + 1 > number) {
            $order.textContent = 1;
        } else {
            $order.textContent = order + 1;
        }
        $input.value = ''; // 입력한 내용을 사용자가 일일히 지우지 않도록 값을 초기화 시켜준다
        $input.focus();
    } else {
        // 비어있지 않다. 입력한 단어가 유효한지 검증한다
        if (word[word.length - 1] === newWord[0]) { // 제시어의 마지막자리 === 입력한단어의 첫 번째 자리
            word = newWord;
            $word.textContent = word;
            const order = parseInt($order.textContent);
            if (order + 1 > number) {
                $order.textContent = 1;
            } else {
                $order.textContent = order + 1;
            }
            $input.value = '';
            $input.focus();
        } else {
            alert('올바르지 않은 단어입니다');
            $input.value = '';
            $input.focus();
        }
    }
};

const onInput = (event) => {
    newWord = event.target.value;
};

$button.addEventListener('click', onClickButton);
$input.addEventListener('input', onInput);