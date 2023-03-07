"use strict";

const userInput = document.getElementById("inputTask");
const list = document.getElementById("list");
const addBtn = document.getElementById("btnAdd");

// array de tareas:
const tasks = [];
let task = {};

function btnHandler(ev) {
  ev.preventDefault();
  if (!userInput.value) {
    return;
  }
  task = { text: userInput.value, completed: false };
  addTask(task);
  userInput.value = "";
}

function addTask(task) {
  tasks.push(task);
  updateView();
}

function handleCheckbox(i, btn) {
  let isCompleted;
  if (btn.getAttribute("checked")) {
    isCompleted = false;
  } else {
    isCompleted = true;
  }

  markTaskCompletedOrNot(i, isCompleted);
}

function updateView() {
  console.log(tasks);
  list.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let item = tasks[i];
    const li = document.createElement("li");
    const p = document.createElement("p");
    const btn = document.createElement("input");
    btn.addEventListener("click", () => handleCheckbox(i, btn));
    btn.setAttribute("class", "btn");
    btn.setAttribute("type", "checkbox");
    if (item.completed) {
      btn.setAttribute("checked", true);
    } else {
      btn.removeAttribute("checked");
    }

    p.textContent = item.text;
    li.appendChild(btn);
    li.appendChild(p);
    list.appendChild(li);
  }
}

// Funcion que identifica el indice de la task en el array tasks y cambia completed a true o false.
function markTaskCompletedOrNot(taskIndex, isCompleted) {
  const task = tasks[taskIndex];
  task.completed = isCompleted;
  updateView();
}

addBtn.addEventListener("click", btnHandler);
