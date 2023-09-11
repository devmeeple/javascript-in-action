const userName = prompt('당신은 누구신가요?');

if (userName === 'Admin') {
    const password = prompt('비밀번호를 입력해주세요.', '');

    if (password === 'TheMaster') {
        alert('환영합니다!');
    } else if (password === '' || password === null ) {
        alert('취소되었습니다.');
    } else {
        alert('인증에 실패하였습니다.');
    }
} else if (userName === '' || userName === null ) {
    alert('취소되었습니다.');
} else {
    alert('인증되지 않은 사용자입니다.');
}