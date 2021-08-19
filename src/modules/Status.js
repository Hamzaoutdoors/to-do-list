export default class IsCompleted {
  static updateLocalStorage(list) {
    const data = JSON.stringify(list);
    localStorage.setItem('ToDo', data);
  }

  static completeToDo(list) {
    this.checkboxs = document.querySelectorAll('.checkbox');
    this.checkboxs.forEach((checkbox, index) => {
      checkbox.addEventListener('change', function checked() {
        if (this.checked) {
          checkbox.parentNode.querySelector('.text').classList.add('line-through');
          list[index].completed = true;
        } else {
          checkbox.parentNode.querySelector('.text').classList.remove('line-through');
          list[index].completed = false;
        }
        IsCompleted.updateLocalStorage(list);
      });
    });
  }
}