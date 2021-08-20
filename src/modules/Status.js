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

  static changeIcon(list) {
    this.inputs = document.querySelectorAll('.text');
    this.trashs = document.querySelectorAll('.trash');
    this.inputs.forEach((input, index) => {
      input.addEventListener('focus', () => {
        this.trashs[index].style.display = 'flex';
        input.parentNode.querySelector('.open').style.display = 'none';
        input.parentNode.style.backgroundColor = '#f9f9f9';
        input.style.backgroundColor = '#f9f9f9';
        IsCompleted.updateLocalStorage(list);
      });
      input.addEventListener('blur', () => {
        this.trashs[index].style.display = 'none';
        input.parentNode.querySelector('.open').style.display = 'flex';
        input.parentNode.style.backgroundColor = '';
        input.style.backgroundColor = '';
        IsCompleted.updateLocalStorage(list);
      });
    });
  }
}
