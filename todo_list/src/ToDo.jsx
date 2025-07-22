import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleChange(event) {
    setNewTask(event.target.value);
  }
  function addTask(event) {
    setTasks([...tasks, newTask]);
    setNewTask("");
  }
  function removeTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }
  return (
    <div className="text-center mt-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-500">todos</h1>
      <div>
        <input
          type="text"
          placeholder="Add todo..."
          value={newTask}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded mr-2 "
        />
        <button
          className="ml-2 bg-green-500 hover:bg-green -700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="mr-2 text-black font-semibold">{task}</span>
            <button
              className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
              onClick={() => removeTask(index)}
            >
              X
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
