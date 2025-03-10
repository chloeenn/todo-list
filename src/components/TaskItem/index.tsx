import React, { useState } from "react";
import { ReactComponent as Remove } from "../../assets/svg/x.svg";
import { ReactComponent as CheckIcon } from "../../assets/svg/check.svg";
import * as Styled from "./styles"
import { useTasks } from "../../context/TaskContext";
interface TaskItemProps {
    task: {
        id: number;
        title: string;
        date?: string;
        done: boolean;
    };
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
    const { deleteTask, editTask, completeTask } = useTasks();
    const [editedTask, setEditedTask] = useState<{ id: number; title: string; date: string } | null>(null);

    const handleEditChange = (id: number, value: string, field: "title" | "date") => {
        setEditedTask((prevTask) => {
            if (prevTask && prevTask.id === id) return { ...prevTask, [field]: value };
            return { id, title: "", date: "", [field]: value };
        });
    };

    const handleSaveEdit = (task: any) => {
        if (editedTask && editedTask.id === task.id) {
            const newTitle = editedTask.title.trim() === "" ? task.title : editedTask.title; 
            editTask(task.id, newTitle, task.description, editedTask.date);
            setEditedTask(null); 
        }
    };

    return (
        <Styled.TaskItem $completed={task.done}>
            <Styled.CheckBoxContainer onClick={() => completeTask(task.id)} $completed={task.done}>
                {task.done && <CheckIcon />}
            </Styled.CheckBoxContainer>
            <Styled.TaskInput
                type="text"
                value={editedTask?.id === task.id ? editedTask.title : task.title}
                onChange={(e) => handleEditChange(task.id, e.target.value, "title")}
                onBlur={() => handleSaveEdit(task)}
                $completed={task.done} 
            />
            <Styled.TaskDate
                type="date"
                value={editedTask?.id === task.id ? editedTask.date || "" : task.date || ""}
                onChange={(e) => handleEditChange(task.id, e.target.value, "date")}
                onBlur={() => handleSaveEdit(task)}
            />
            <Styled.DeleteButton onClick={() => deleteTask(task.id)}>
                <Remove />
            </Styled.DeleteButton>
        </Styled.TaskItem>
    );
};

export default TaskItem;
