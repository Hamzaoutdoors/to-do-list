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

  static changeIcon() {
    this.inputs = document.querySelectorAll('.text');
    this.trashs = document.querySelectorAll('.trash');
    this.inputs.forEach((input, index) => {
      input.addEventListener('focus', () => {
        this.trashs[index].classList.toggle('d-none');
        input.parentNode.querySelector('.open').classList.toggle('d-none');
        input.parentNode.style.backgroundColor = '#f9f9f9';
        input.style.backgroundColor = '#f9f9f9';

        const allLi = document.querySelector('#list').childNodes;

        allLi.forEach((list) => {
          const innerInput = list.querySelector('.text');

          if (innerInput !== input) {
            innerInput.parentNode.querySelector('.trash').className = 'fa fa-trash-o trash d-none';
            innerInput.parentNode.querySelector('.open').classList.remove('d-none');
            innerInput.parentNode.style.backgroundColor = '';
            innerInput.style.backgroundColor = '';
          }
        });
      });
    });
  }
}