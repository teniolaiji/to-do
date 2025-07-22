import React from "react";
import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  return;
}
export default ToDoList;
