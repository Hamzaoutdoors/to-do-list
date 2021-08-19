import './style.css';
import IsCompleted from './modules/Status.js';
// import ChangeToDoList from './modules/ChangeList.js';

const input = document.getElementById('input');

const ul = document.querySelector('ul');
let tasks = JSON.parse(localStorage.getItem('ToDo')) || [];

const displayItems = () => {
  tasks.forEach((item, index) => {
    const CHECK = item.completed ? 'checked' : '';
    const TROUGHLINE = item.completed ? 'line-through' : '';
    item.index = index;
    ul.innerHTML += `<li><input type="checkbox" class="checkbox" id="checkbox-${item.index}" ${CHECK}><input class="text ${TROUGHLINE}" type="text" value ="${item.description}"><img class="drop" src="https://img.icons8.com/ios-glyphs/30/000000/menu-2.png" alt="vertical menu"/></li>`;
  });
  IsCompleted.completeToDo(tasks);
};
displayItems();

function addToDO(toDo, id) {
  const list = JSON.parse(localStorage.getItem('ToDo')) || [];
  tasks = [...list, { description: toDo, completed: false, index: id }];
}

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const task = input.value;
    if (task) {
      addToDO(task, tasks.length);
      displayItems();
      IsCompleted.updateLocalStorage(tasks);
    }
    input.value = '';
  }
});
