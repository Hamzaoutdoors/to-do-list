import './style.css';
import { values } from 'lodash';
import IsCompleted from './modules/Status.js';

let tasks = JSON.parse(localStorage.getItem('ToDo')) || [];

// Display Items in the UI

const displayItems = () => {
  const ul = document.getElementById('list');
  tasks.forEach((item, index) => {
    const CHECK = item.completed ? 'checked' : '';
    const TROUGHLINE = item.completed ? 'line-through' : '';
    item.index = index;
    ul.innerHTML += `<li id="${item.index}"><input type="checkbox" class="checkbox" id="checkbox-${item.index}" ${CHECK}><input class="text ${TROUGHLINE}" type="text" value ="${item.description}"><i class="fa fa-ellipsis-v open" aria-hidden="true"></i><i class="fa fa-trash-o trash d-none" aria-hidden="true"></i></li>`;
  });
  IsCompleted.completeToDo(tasks);
  IsCompleted.changeIcon();
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
  editDesc();
}
addToTheList();

// Clear All Completed button

function clearAllCompleted() {
  const ul = document.getElementById('list');
  const clearItems = document.getElementById('clear-items-completed');
  clearItems.addEventListener('click', () => {
    tasks = tasks.filter((task) => !task.completed);
    ul.innerHTML = '';
    displayItems();
    IsCompleted.updateLocalStorage(tasks);
  });
}
clearAllCompleted();

// Remove Item from the list

function remove() {
  window.addEventListener('click', (e) => {
    const ul = document.getElementById('list');
    if (e.target && e.target.className.includes('trash')) {
      const id = parseInt(e.target.parentNode.id, 10);
      tasks = tasks.filter((task) => task.index !== id);
      ul.innerHTML = '';
      displayItems();
      IsCompleted.updateLocalStorage(tasks);
    } else if (e.target && !e.target.className.includes('text')) {
      const allLi = document.querySelector('#list').childNodes;
      allLi.forEach((list) => {
        const innerInput = list.querySelector('.text');

        innerInput.parentNode.querySelector('.trash').className = 'fa fa-trash-o trash d-none';
        innerInput.parentNode.querySelector('.open').classList.remove('d-none');
        innerInput.parentNode.style.backgroundColor = '';
        innerInput.style.backgroundColor = '';
      });
    }
  });
}

remove();

function editDesc() {
  const ul = document.getElementById('list');
  const inputs = document.querySelectorAll('.text');
  inputs.forEach((input, index) => {
    input.addEventListener('keydown', (e) => {
      const { value } = input;
      console.log(value);
      if (e.key === 'Enter' && value !== '') {
        console.log('i am in');
        tasks[index].description = value;
        ul.innerHTML = '';
        displayItems();
        IsCompleted.updateLocalStorage(tasks);
      }
    });
  });
}
editDesc();