import displayItems from './index.js';
import IsCompleted from './modules/Status.js';

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
