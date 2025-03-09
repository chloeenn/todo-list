import React, { useContext, useState } from "react";
import { useTasks } from "../../context/TaskContext";
import { ReactComponent as Remove } from "../../assets/svg/x.svg"
import * as Styled from "./styles"
const TaskList: React.FC = () => {
    const { tasks, deleteTask, editTask, completeTask } = useTasks();
    const [editedTask, setEditedTask] = useState<{ id: number; title: string; date: string } | null>(null);

    const handleEditChange = (id: number, value: string, field: "title" | "date") => {
        setEditedTask((prevTask) => {
            if (prevTask && prevTask.id === id) return { ...prevTask, [field]: value }
            return { id, title: "", date: "", [field]: value };
        })
    }
    const handleSaveEdit = (task: any) => {
        if (editedTask && editedTask.id === task.id) {
            editTask(task.id, editedTask.title, task.description, editedTask.date);
            setEditedTask(null); // Reset after saving
        }
    }

    return (

        <Styled.TaskList>
            {tasks.length === 0 ? (
                <h1>No task</h1>
            ) :
                (
                    tasks.map((task) => (
                        <Styled.TaskItem key={task.id}>
                            {/* checkbox */}
                            <input type="checkbox" checked={task.done} onChange={() => completeTask(task.id)} />
                            {/* task title */}
                            <input
                                type="text"
                                value={editedTask?.id === task.id ? editedTask.title : task.title}
                                onChange={(e) => handleEditChange(task.id, e.target.value, "title")}
                                onBlur={() => handleSaveEdit(task)}
                            />
                            {/* date */}
                            <input
                                type="date"
                                value={editedTask?.id === task.id ? editedTask.date || "" : task.date || ""}
                                onChange={(e) => handleEditChange(task.id, e.target.value, "date")}
                                onBlur={() => handleSaveEdit(task)}
                            />

                            {/* delete task */}
                            <button onClick={() => deleteTask(task.id)}><Remove /></button>
                        </Styled.TaskItem>
                    ))
                )}
        </Styled.TaskList>
    );
}

export default TaskList;