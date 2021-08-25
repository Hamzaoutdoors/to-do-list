
const addToTheList = () => {
    const input = document.getElementById('input');
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const task = input.value;
        if (task) {
          const newTask = { description: task, completed: false, index: tasks.length };
          tasks.push(newTask);
          clearItems();
          displayItems();
          IsCompleted.updateLocalStorage(tasks);
        }
        input.value = '';
        event.preventDefault();
      }
    });
  };







