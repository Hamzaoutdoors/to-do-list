import './style.css';
import IsCompleted from './modules/Status.js';

const tasks = JSON.parse(localStorage.getItem('ToDo')) || [];

const displayItems = () => {
  const ul = document.getElementById('list');
  tasks.forEach((item, index) => {
    const CHECK = item.completed ? 'checked' : '';
    const BACKGROUND = item.completed ? 'comletedTask' : '';
    const TROUGHLINE = item.completed ? 'line-through' : '';
    item.index = index;
    ul.innerHTML += `<li class="${BACKGROUND}"><input type="checkbox" class="checkbox" id="checkbox-${item.index}" ${CHECK}><input class="text ${TROUGHLINE}" type="text" value ="${item.description}"><i class="fa fa-ellipsis-v open" aria-hidden="true"></i>
    </li>`;
  });
  IsCompleted.completeToDo(tasks);
};
displayItems();

function clearItems() {
  const ul = document.getElementById('list');
  ul.innerHTML = '';
}

function addToTheList() {
  const input = document.getElementById('input');

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const task = input.value;
      if (task) {
        const newTask = { description: task, completed: false, index: tasks.length };
        tasks.push(newTask);
        clearItems();
        displayItems();
        IsCompleted.updateLocalStorage(tasks);
      }
      input.value = '';
      event.preventDefault();
    }
  });
}
addToTheList();
