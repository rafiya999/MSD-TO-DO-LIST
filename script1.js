function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDescription = taskInput.value.trim();
    
    if (taskDescription === '') {
        alert('Please enter a task description.');
        return;
    }
    
    const taskList = document.getElementById('taskList');
    
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskDescription}</span>
        <button class="delete" onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
    
    taskInput.value = '';
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
