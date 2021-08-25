export default remove = () => {
    window.addEventListener('click', (e) => {
      const ul = document.getElementById('list');
      if (e.target && e.target.className.includes('trash')) {
        const id = parseInt(e.target.parentNode.id, 10);
        tasks = tasks.filter((task) => task.index !== id);
        ul.innerHTML = '';
        displayItems();
        IsCompleted.updateLocalStorage(tasks);
      } else if (e.target && !e.target.className.includes('text')) {
        const allLi = document.querySelector('#list').childNodes;
        allLi.forEach((list) => {
          const innerInput = list.querySelector('.text');
  
          innerInput.parentNode.querySelector('.trash').className = 'fa fa-trash-o trash d-none';
          innerInput.parentNode.querySelector('.open').classList.remove('d-none');
          innerInput.parentNode.style.backgroundColor = '';
          innerInput.style.backgroundColor = '';
        });
      }
    });
  };

