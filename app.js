const todoList = document.querySelector('ul')
const addBtn = document.querySelector('button')
const todo = document.querySelector('input')

function addTodo() {
    const listItem = document.createElement('li')
    listItem.innerText = todo.value
    todoList.appendChild(listItem)
    todo.value = ''
}

addBtn.addEventListener('click', addTodo)