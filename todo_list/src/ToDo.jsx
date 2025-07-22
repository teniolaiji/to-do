import React from "react";
import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  return;
}
export default ToDoList;
