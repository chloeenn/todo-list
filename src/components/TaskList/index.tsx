import React, { useContext } from "react";
import { useTasks } from "../../context/TaskContext";
import * as Styled from "./styles"
const TaskList: React.FC = () => {
    const { tasks, deleteTask, editTask, completeTask } = useTasks();
    return (
        <Styled.TaskList>
            {tasks.length === 0 ? (
                <h1>No task</h1>
            ) :
                (
                    tasks.map((task) => (
                        <Styled.TaskItem key={task.id}>
                            {/* checkbox */}
                            <button onClick={() => completeTask(task.id)}>{task.done ? "Not yet" : "Complete"}</button>
                            {/* task title */}
                            <h2>{task.title}</h2>
                            {/* delete task */}
                            <button onClick={() => deleteTask(task.id)}>"Delete"</button>
                        </Styled.TaskItem>
                    ))
                )}
        </Styled.TaskList>
    );
}

export default TaskList;