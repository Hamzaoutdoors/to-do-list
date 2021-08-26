

jest.mock('../Todo');

const updateLocalStorage = (list) => {
    const data = JSON.stringify(list);
    localStorage.setItem('ToDo', data);
  }

// test('displays a user after a click', () => {
//   // Set up our document body
//   document.body.innerHTML =
//     '<div>' +
//     '  <span id="username" />' +
//     '  <button id="button" />' +
//     '</div>';
// }
