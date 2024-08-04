const container = document.querySelector(".container")
const addTaskDiv = document.querySelector(".add-task")
const scrollDiv = document.querySelector(".scroll")
const taskInput = document.getElementById("taskInput")
const taskButton = document.querySelector(".taskButton")

taskButton.addEventListener("click", addTask)

function addTask() {

  if (taskInput.value.trim() === "") {
    const error = document.createElement("p")
    error.textContent = "El campo de tarea no puede ir vacío"
    error.classList.add("error")
    addTaskDiv.append(error)
    return
  }

  // Eliminar mensaje de error existente si existe
  const existingError = container.querySelector('.error');
  if (existingError) {
    existingError.remove();
  }

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
  const deleteNotification = document.createElement("p")
  deleteNotification.textContent = "Tarea Eliminada"
  deleteNotification.classList.add("delete-notification")
  document.querySelector("body").append(deleteNotification)
  setTimeout(() => {
    const notification = document.querySelector(".delete-notification")
    notification.remove()
  }, 1000);
  taskDiv.remove()
}

function markAsComplete(event) {
  const taskDiv = event.target.closest(".task")
  const completeNotification = document.createElement("p")
  completeNotification.textContent = "Tarea Completada"
  completeNotification.classList.add("complete-notification")
  document.querySelector("body").append(completeNotification)
  setTimeout(() => {
    const notification = document.querySelector(".complete-notification")
    notification.remove()
  }, 1000);
  taskDiv.remove()
}