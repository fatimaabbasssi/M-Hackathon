// Import necessary Firebase functions (ensure this is the same config as the one used in the task page)
import {
    collection, onSnapshot, doc, deleteDoc, db
  } from "../../config.js";
  

  const tasksRef = collection(db, "tasks");
  

  const taskList = document.getElementById("taskList");

  onSnapshot(tasksRef, (snapshot) => {
    taskList.innerHTML = ""; 
  
  
    snapshot.forEach((docSnap) => {
      const data = docSnap.data(); 
      const taskDiv = document.createElement("div");
      taskDiv.className = "todo-item";
      
      taskDiv.innerHTML = `
        <span>${data.task}</span>
        <button class="btn btn-sm btn-danger" onclick="deleteTask('${docSnap.id}')">
       <i class="fa-solid fa-check"></i>
        </button>
      `;
  
      taskList.appendChild(taskDiv); 
    });
  });
  

  window.deleteTask = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
  };