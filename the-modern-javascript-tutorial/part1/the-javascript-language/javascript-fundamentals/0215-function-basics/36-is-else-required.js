function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('보호자의 동의를 받으셨나요?');
    }

    // else 문을 삭제해도 동일하게 동작함.
}