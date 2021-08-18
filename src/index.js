import './style.css';

const ul = document.querySelector('ul');
const list = [{
  description: 'Complete To Do list project',
  completed: false,
  index: 0,
},
{
  description: 'Learn Object-oriented Programming in JavaScript',
  completed: false,
  index: 1,
},
{
  description: 'Meet friends',
  completed: false,
  index: 2,
},
{
  description: 'Help Mom',
  completed: false,
  index: 3,
},
];

const displayItems = () => {
  list.forEach((item, index) => {
    if (item.index === index) {
      ul.innerHTML += `<li><input type="checkbox"><h4>${item.description}</h4><img src="https://img.icons8.com/ios-glyphs/30/000000/menu-2.png" alt="vertical menu"/></li>`;
    }
  });
};
displayItems();
