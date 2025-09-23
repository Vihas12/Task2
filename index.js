const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-inp");
const taskList = document.getElementById("task-list");

// Handle Add Task
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const div = document.createElement("div");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "complete-checkbox";

  const span = document.createElement("span");
  span.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  div.appendChild(checkbox);
  div.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(div);
  taskList.appendChild(li);

  taskInput.value = "";

  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed", checkbox.checked);
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
});
