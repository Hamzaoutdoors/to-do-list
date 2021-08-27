export default function addItem(tasks) {
  const input = document.getElementById('input');
  const task = input.value;
  if (task) {
    const newTask = { description: task, completed: false, index: tasks.length };
    tasks.push(newTask);
    displayItems();
    IsCompleted.updateLocalStorage(tasks);
  }
}