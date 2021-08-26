import removeItem from './removeItem.js';
import addItem from './addItem.js';

describe('Remove item from list', () => {
  test('add one item from the list', () => {
    document.body.innerHTML = '<div>'
        + '  <ul id="list"></li>'
        + '</div>';
    addItem('hey');
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(1);
  });
  test('remove one item from the list', () => {
    document.body.innerHTML = '<div>'
        + '  <ul id="list"></li>'
        + '</div>';
    removeItem(0);
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(0);
  });
});
