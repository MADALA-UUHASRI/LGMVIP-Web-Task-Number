const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `<span class="tick">&#10003;</span><span class="task-text">${taskText}</span><span class="cross">&#10005;</span>`;
        li.querySelector(".tick").addEventListener("click", toggleTask);
        li.querySelector(".cross").addEventListener("click", deleteTask);
        li.addEventListener("click", toggleCompleted);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function toggleTask(event) {
    event.stopPropagation();
    const tick = event.target;
    const taskItem = tick.parentNode;
    taskItem.classList.toggle("completed");
}

function deleteTask(event) {
    event.stopPropagation();
    const cross = event.target;
    const taskItem = cross.parentNode;
    taskList.removeChild(taskItem);
}

function toggleCompleted(event) {
    const taskItem = event.target;
    if (!taskItem.classList.contains("completed")) {
        taskItem.classList.toggle("completed");
    }
}

taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
