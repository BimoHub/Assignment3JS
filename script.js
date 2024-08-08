// This event listener waits for the DOM (Document Object Model) to be fully loaded before executing the function.
// The function is executed when the DOMContentLoaded event is fired by the browser.
document.addEventListener("DOMContentLoaded", function() {
    
    // Get the add-task button element from the HTML document by its id.
    // The id is used as a unique identifier for the element.
    const addTaskButton = document.getElementById("add-task");
    
    // Get the new-task input element from the HTML document by its id.
    // The id is used as a unique identifier for the element.
    const taskInput = document.getElementById("new-task");
    
    // Get the task-list unordered list element from the HTML document by its id.
    // The id is used as a unique identifier for the element.
    const taskList = document.getElementById("task-list");

    // Event handler to add a new task
    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    // Function to add a task
    function addTask(text) {
        const listItem = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const taskSpan = document.createElement("span");
        taskSpan.textContent = text;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");

        listItem.appendChild(checkbox);
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        // Event handler to strike through the task when checked
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                listItem.classList.add("completed");
                taskList.appendChild(listItem); // Move to bottom
                playDingSound();
            } else {
                listItem.classList.remove("completed");
            }
        });

        // Event handler to delete the task
        deleteButton.addEventListener("click", function() {
            listItem.classList.add("fade-out");
            listItem.addEventListener("animationend", function() {
                listItem.remove();
            });
        });
    }

    // ding sound
    function playDingSound() {
        const ding = new Audio("ding.mp3");
        ding.play();
    }
});
