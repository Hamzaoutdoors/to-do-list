/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/**
 * @jest-environment jsdom
 */

import addItem from './index.js';
import removeItem from './removeItem.js';

describe('Add Item to list', () => {
  test('Check addTodo able add todo to todoList', () => {
    console.log(document.body);
    document.body.innerHTML = `<div class="container">
    <ul>
        <li>
             <h3>Today's To Do</h3>
             <img id = "enter" src="https://img.icons8.com/metro/26/000000/process.png" alt="update-icon"/>
        </li>
        <li>
            <form class="d-flex">
                <input type="text" id="input" placeholder="Add a to-do ..." value="newTodo">
                <img src="https://img.icons8.com/ios/50/000000/enter-2.png" alt="enter-key-icon"/>
            </form>
        </li>
    </ul>
    <ul id="list"></ul>
    <div class="clear">
        <p id="clear-items-completed">Clear all completed tasks</p>
    </div>
    </div>`;
    addItem();
    const toDoList = document.querySelectorAll('#list li');
    expect(toDoList).toHaveLength(1);
  });
});

/* describe('Remove and item from list', () => {
  test('Delete one item from the list', () => {
    document.body.innerHTML = `<ul id="list"></ul>`;
    removeItem(0);
    const toDoList = document.querySelectorAll('#list li');
    expect(toDoList).toHaveLength(0);
  });
}); */
