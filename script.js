document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-button");
    const taskInput = document.getElementById("task-input");
    const todoList = document.getElementById("todo-list");
  
    addButton.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.className = "todo-item";
        listItem.innerText = taskText;
        todoList.appendChild(listItem);
        taskInput.value = "";
      }
    });
  });
  