import React, { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

function TaskList({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now().toString(),
        title: newTask,
        description: "No description yet",
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="task-list">
      <h2>To-Do List</h2>
      <div className="add-task">
        <input
          type="text"
          placeholder="New task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="tasks">
        {tasks.map((task) => (
          <div key={task.id} className="task-item">
            <h3>{task.title}</h3>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <Link to={`/hard/task/${task.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function TaskDetails({ tasks, setTasks }) {
  const navigate = useNavigate();
  const taskId = window.location.pathname.split("/").pop();
  const task = tasks.find((task) => task.id === taskId);

  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");

  const saveTask = () => {
    const updatedTasks = tasks.map((t) =>
      t.id === taskId ? { ...t, title, description } : t
    );
    setTasks(updatedTasks);
    navigate("/hard");
  };

  if (!task) {
    return <p>Task not found</p>;
  }

  return (
    <div className="task-details">
      <h2>Edit Task</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button onClick={saveTask}>Save</button>
    </div>
  );
}

function Hard() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<TaskList tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path="/task/:id"
          element={<TaskDetails tasks={tasks} setTasks={setTasks} />}
        />
      </Routes>
    </div>
  );
}

export default Hard;
