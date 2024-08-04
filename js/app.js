const container = document.querySelector(".container")
const scrollDiv = document.querySelector(".scroll")
const taskInput = document.getElementById("taskInput")
const taskButton = document.querySelector(".taskButton")

taskButton.addEventListener("click", addTask)

function addTask() {

  const taskDiv = document.createElement("div")
  taskDiv.classList.add("task")

  const task = document.createElement("p")
  task.textContent = taskInput.value

  const iconsDiv = document.createElement("div")
  iconsDiv.classList.add("check-trash")

  const checkIcon = document.createElement("img")
  checkIcon.src = "img/check.svg"
  checkIcon.alt = "icono de listo"
  checkIcon.onclick = markAsComplete

  const trashIcon = document.createElement("img")
  trashIcon.src = "img/trash.svg"
  trashIcon.alt = "icono de basura"
  trashIcon.onclick = deleteTask

  iconsDiv.append(checkIcon, trashIcon)
  taskDiv.append(task, iconsDiv)
  scrollDiv.append(taskDiv)

  taskInput.value = ""
}

function deleteTask(event) {
  // me devuelve div más cercano con la clase tarea
  const taskDiv = event.target.closest(".task")
  taskDiv.remove()  
}

function markAsComplete(event) {
  const taskDiv = event.target.closest(".task")
  taskDiv.remove()
}