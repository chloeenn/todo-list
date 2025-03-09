import React, { useState } from "react";
import {useTasks} from "../../context/TaskContext";

const CreateTask: React.FC = () => {
  const { addTask } = useTasks(); // Get addTask function from context
  const [title, setTitle] = useState("");

  const handleAddTask = () => {
    //Empty task is not allowed
    if (title.trim()) {
      addTask(title);
      setTitle(""); 
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task name"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default CreateTask;
