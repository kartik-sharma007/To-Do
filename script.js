// Get references to DOM elements
const taskList = document.getElementById('taskList');
const addTaskInputBox = () => {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Add a new task';
    input.className = 'taskInput';
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            addTask(input);
        }
    });
    document.body.insertBefore(input, taskList);
    input.focus();
};

function addTask(inputElem) {
    const taskText = inputElem.value.trim();
    if (taskText === '') return;

    // Create list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Add remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    inputElem.remove(); // Remove the used input box
    addTaskInputBox();  // Add a new input box
}

// Remove old input and button from HTML if present
const oldInput = document.getElementById('taskInput');
const oldBtn = document.getElementById('addTaskBtn');
if (oldInput) oldInput.remove();
if (oldBtn) oldBtn.remove();

addTaskInputBox();