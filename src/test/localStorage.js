/* eslint-disable func-names */
const localStorageMock = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
  };
}());

Object.defineProperty(global, 'localStorage', {
  value: localStorageMock,
});