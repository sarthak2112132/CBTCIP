// scripts.js

document.getElementById("add-task-btn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("new-task");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("task-list");
  const timestamp = new Date().toLocaleString();

  const listItem = document.createElement("li");
  listItem.innerHTML = `${taskText} <span class="timestamp">[Added: ${timestamp}]</span> <button class="complete-btn">Complete</button>`;
  listItem
    .querySelector(".complete-btn")
    .addEventListener("click", completeTask);

  taskList.appendChild(listItem);
  taskInput.value = "";
}

function completeTask(event) {
  const listItem = event.target.parentElement;
  const completedTaskList = document.getElementById("completed-task-list");
  const timestamp = new Date().toLocaleString();

  listItem.classList.add("completed");
  listItem.querySelector(".complete-btn").remove();
  listItem.querySelector(
    ".timestamp"
  ).innerText += ` [Completed: ${timestamp}]`;
  completedTaskList.appendChild(listItem);
}
