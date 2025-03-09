import React, { useContext } from "react";
import { useTasks } from "../../context/TaskContext";

const TaskList: React.FC = () => {
    const { tasks, deleteTask, editTask, completeTask } = useTasks();
    return (
        <div>
            {tasks.length === 0 ? (
                <h1>No task</h1>
            ) :
                (
                    tasks.map((task) => (
                        <div key={task.id}>
                            {/* checkbox */}
                            <button onClick={() => completeTask(task.id)}>{task.done ? "Not yet" : "Complete"}</button>
                            {/* task title */}
                            <h2>{task.title}</h2>

                            <button onClick={() => deleteTask(task.id)}>"Delete"</button>
                        </div>
                    ))
                )}
        </div>
    );
}

export default TaskList;