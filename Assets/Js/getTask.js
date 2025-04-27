// Import necessary Firebase functions (ensure this is the same config as the one used in the task page)
import {
    collection, onSnapshot, doc, deleteDoc, db
  } from "../../config.js";
  
  // Reference to Firestore collection "tasks"
  const tasksRef = collection(db, "tasks");
  
  // Get the task list container in HTML
  const taskList = document.getElementById("taskList");
  
  // Real-time listener to fetch tasks from Firestore and render them on the page
  onSnapshot(tasksRef, (snapshot) => {
    taskList.innerHTML = ""; // Clear existing tasks
  
    // Loop through the snapshot and display each task
    snapshot.forEach((docSnap) => {
      const data = docSnap.data(); // Get the task data
      const taskDiv = document.createElement("div");
      taskDiv.className = "todo-item";
      
      taskDiv.innerHTML = `
        <span>${data.task}</span>
        <button class="btn btn-sm btn-danger" onclick="deleteTask('${docSnap.id}')">
         Complete
        </button>
      `;
  
      taskList.appendChild(taskDiv); // Append task to the task list
    });
  });
  
  // Function to delete task from Firestore
  window.deleteTask = async (id) => {
    await deleteDoc(doc(db, "tasks", id)); // Remove task from Firestore
  };