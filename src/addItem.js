
import IsCompleted from './modules/Status.js';

const displayItems = () => {
  const ul = document.getElementById('list');
  tasks.forEach((item, index) => {
    const check = item.completed ? 'checked' : '';
    const lineThrough = item.completed ? 'line-through' : '';
    item.index = index;
    ul.innerHTML += `<li id="${item.index}"><input type="checkbox" class="checkbox" id="checkbox-${item.index}" ${check}><input class="text ${lineThrough} text-${item.index}" type="text" value ="${item.description}"><i class="fa fa-ellipsis-v open" aria-hidden="true"></i><i class="fa fa-trash-o trash d-none" aria-hidden="true"></i></li>`;
  });
  IsCompleted.completeToDo(tasks);
  IsCompleted.changeIcon();
};

export const addItem = (task) => {
  const tasks = JSON.parse(localStorage.getItem('ToDo')) || [];
  if (task) {
    const ul = document.getElementById('list');
    const newTask = { description: task, completed: false, index: tasks.length };
    tasks.push(newTask);
    ul.innerHTML = '';
    displayItems();
    IsCompleted.updateLocalStorage(tasks);
  }
};

export const addToTheList = () => {
  const input = document.getElementById('input');
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const task = input.value;
      addItem(task);
      input.value = '';
      event.preventDefault();
    }
  });
};
