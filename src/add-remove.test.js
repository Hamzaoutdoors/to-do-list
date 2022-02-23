/* eslint-disable no-unused-vars */
/**
 * @jest-environment jsdom
 */

import removeItem from './removeItem.js';
import addTodo from './addItem.js';

describe('Add Item to list', () => {
  test('Check addTodo able add todo to todoList', () => {
    document.body.innerHTML = `
      <input id="newTodoInput" />
      <button id="addTodoBtn">Add todo</button>
      <ol id="todoList">value</ol>
    `;

    const newTodoInput = document.getElementById('newTodoInput');
    const addTodo = document.getElementById('addTodoBtn');
    const todolist = document.getElementById('todoList');

    newTodoInput.value = 'New todolist!';
    addTodo.click();

    expect(todolist.innerHTML).toMatch('value');
  });
});

describe('Remove and item from list', () => {
  test('Check addTodo able remove todo from todoList', () => {
    document.body.innerHTML = `
      <input id="newTodoInput" />
      <button id="addTodoBtn">Add todo</button>
      <ol id="todoList"></ol>
    `;

    const newTodoInput = document.getElementById('newTodoInput');
    const removeItem = document.getElementById('addTodoBtn');
    const todolist = document.getElementById('todoList');

    newTodoInput.value = 'New todolist!';
    removeItem.click();

    expect(todolist.innerHTML).toMatch('');
  });
});