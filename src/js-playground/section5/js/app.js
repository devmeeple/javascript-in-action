// 버튼과 필드
const addButton = document.getElementById('addButton');
const inputField = document.getElementById('inputField');
const resetButton = document.getElementById('resetButton');

// 결과 출력 요소
const taskList = document.getElementById('todoList');

const addItem = () => {
  const inputValue = inputField.value;

  if (!inputValue) {
    return;
  }

  const listItem = document.createElement('li');
  listItem.textContent = inputValue;

  taskList.appendChild(listItem);

  // 입력 필드 비우기
  inputField.value = '';
};

addButton.addEventListener('click', addItem);
resetButton.addEventListener('click', () => {
  // 자식 노드가 없을 때 까지 삭제
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
});
