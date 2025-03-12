// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");

    // Remove task when delete button is clicked
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    // Append button to list item & add to list
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}

// Add task when button is clicked
addTaskBtn.addEventListener("click", addTask);

// Add task when Enter key is pressed
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
