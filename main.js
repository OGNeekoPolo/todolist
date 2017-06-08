// Add your JS here.

let newToDo = document.querySelector('.new-todo');

let todoList = document.querySelector('.todo-list');



newToDo.addEventListener('keydown', function addListItem(item) {
  if (item.keyCode == 13) {
    let todoContent = item.target.value;
    item.target.value = '';
    let newTodoLi = document.createElement('li');
    todoList.appendChild(newTodoLi);
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'view');
    newTodoLi.appendChild(newDiv);
    let newLabel = document.createElement('label');
    newLabel.textContent = todoContent;
    newDiv.appendChild(newLabel);
    // let newDiv = document.createElement('div');
    // newDiv.setAttribute('class', 'view');
    // let newLabel = document.createElement('label')
    // newLabel.textContent = todoContent;
    // todoList.appendChild(newLabel);
    // todoList.insertAdjacentHTML

    console.log(todoList);
  }
  return item;

});
