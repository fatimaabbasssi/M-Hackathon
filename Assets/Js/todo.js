import {
    collection, addDoc, onSnapshot,
    doc, deleteDoc, updateDoc , db 
  } from "../../config.js";

  
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");
  
  const tasksRef = collection(db, "tasks");
  
  // Add Task
  addTaskBtn.addEventListener("click", async () => {
    const task = taskInput.value.trim();
    if (task) {
      await addDoc(tasksRef, { task });
      taskInput.value = "";
    }
  });
  
  // Real-time Get
  onSnapshot(tasksRef, (snapshot) => {
    taskList.innerHTML = "";
    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      const taskDiv = document.createElement("div");
      taskDiv.className = "todo-item";
  
      taskDiv.innerHTML = `
        <span>${data.task}</span>
        <div class="todo-actions">
          <button class="btn btn-sm btn-info text-light addTaskbtn" onclick="editTask('${docSnap.id}', '${data.task}')"><i class="fa-solid fa-pen-to-square"></i></button>
          <button class="btn btn-sm btn-danger " onclick="deleteTask('${docSnap.id}')"><i class="fa-solid fa-trash"></i></button>
        </div>
      `;
  
      taskList.appendChild(taskDiv);
    });
  });
  
  // Delete Task
  window.deleteTask = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
  };
  
  // Edit Task
  window.editTask = async (id, oldTask) => {
    const newTask = prompt("Edit task:", oldTask);
    if (newTask && newTask.trim()) {
      await updateDoc(doc(db, "tasks", id), { task: newTask.trim() });
    }
  };
