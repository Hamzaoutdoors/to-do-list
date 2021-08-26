
// const updateLocalStorage = (list) => {
//     const data = JSON.stringify(list);
//     localStorage.setItem('ToDo', data);
//   }
class LocalStorageMock {
    constructor() {
      this.store = {};
    }
  
    clear() {
      this.store = {};
    }
  
    getItem(key) {
      return this.store[key] || null;
    }
  
    setItem(key, value) {
      this.store[key] = String(value);
    }
  
    removeItem(key) {
      delete this.store[key];
    }
  };
// test('displays a user after a click', () => {
//   // Set up our document body
//   document.body.innerHTML =
//     '<div>' +
//     '  <span id="username" />' +
//     '  <button id="button" />' +
//     '</div>';
// }
module.exports = LocalStorageMock;