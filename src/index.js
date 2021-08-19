import './style.css';
import IsCompleted from './modules/Status.js';

const ul = document.querySelector('ul');
const tasks = JSON.parse(localStorage.getItem('ToDo')) || [{
  description: 'Complete To Do list project',
  completed: false,
  index: 0,
},
{
  description: 'Learn Object-oriented Programming',
  completed: true,
  index: 1,
},
{
  description: 'Help Mom',
  completed: false,
  index: 2,
},
{
  description: 'Meet friends',
  completed: false,
  index: 3,
},
];

const displayItems = () => {
  tasks.forEach((item, index) => {
    const CHECK = item.completed ? 'checked' : '';
    const TROUGHLINE = item.completed ? 'line-through' : '';
    item.index = index;
    ul.innerHTML += `<li><input type="checkbox" class="checkbox" id="checkbox-${item.index}" ${CHECK}><h4 class="text ${TROUGHLINE}">${item.description}</h4><img class="drop" src="https://img.icons8.com/ios-glyphs/30/000000/menu-2.png" alt="vertical menu"/></li>`;
  });
  IsCompleted.completeToDo(tasks);
};
displayItems();
