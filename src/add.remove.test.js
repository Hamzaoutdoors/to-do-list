import removeItem from './removeItem.js';

describe('Remove item from list', () => {
  test('remove one item from the list', () => {
    document.body.innerHTML = '<div>'
        + '  <ul id="list"></li>'
        + '</div>';
    removeItem();
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(list.length - 1);
  });
});
