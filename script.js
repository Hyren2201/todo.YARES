// Array to hold tasks
let tasks = [];

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task.text}
            <button class="edit" onclick="editTask(${index})">Edit</button>
            <button class="delete" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    tasks.push({ text: taskText });
    taskInput.value = '';
    renderTasks();
}

// Function to edit a task
function editTask(index) {
    const newTaskText = prompt('Edit task:', tasks[index].text);

    if (newTaskText === null || newTaskText.trim() === '') {
        alert('Task cannot be empty.');
        return;
    }

    tasks[index].text = newTaskText;
    renderTasks();
}

// Function to delete a task
function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

// Initial rendering of tasks
renderTasks();
