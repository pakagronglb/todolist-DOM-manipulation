// Get DOM elements
const taskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

// Function to create a new task
function createTask(taskText) {
    const li = document.createElement('li'); // Create list item
    li.textContent = taskText; // Set the task text

    const deleteBtn = document.createElement('span'); // Create delete button
    deleteBtn.textContent = ' ✖'; // Set delete button text
    deleteBtn.classList.add('delete'); // Add a class for styling
    li.appendChild(deleteBtn); // Append delete button to the list item

    // Add delete functionality
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(li); // Remove the task when delete is clicked
    });

    todoList.appendChild(li); // Add task to the list
}

// Event listener for adding tasks
addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim(); // Get input text

    if (taskText !== '') {
        createTask(taskText); // Create a new task
        taskInput.value = ''; // Clear input
    } else {
        alert('Please enter a task!'); // Show alert if input is empty
    }
});

// Allow task addition via "Enter" key
taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTaskBtn.click(); // Trigger the button click
    }
});
