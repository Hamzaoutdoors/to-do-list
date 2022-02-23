import IsCompleted from './modules/Status.js';

const displayItems = () => {
  const tasks = JSON.parse(localStorage.getItem('ToDo')) || [];
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

export const removeItem = (id) => {
  let tasks = JSON.parse(localStorage.getItem('ToDo')) || [];
  const ul = document.getElementById('list');
  tasks = tasks.filter((task) => task.index !== id);
  ul.innerHTML = '';
  displayItems();
  IsCompleted.updateLocalStorage(tasks);
};

export function addRemoveListner() {
  window.addEventListener('click', (e) => {
    if (e.target && e.target.className.includes('trash')) {
      const id = parseInt(e.target.parentNode.id, 10);
      removeItem(id);
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
