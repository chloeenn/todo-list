import React, { useState } from "react";
import { RemoveIcon } from '../icons/RemoveIcon';
import { CheckIcon } from '../icons/CheckIcon';
import * as Styled from "./styles"
import { useTasks } from "../../context/TaskContext";
interface TaskItemProps {
    task: {
        id: number;
        title: string;
        date?: string;
        description?: string;
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
            const newDate = editedTask.date.trim() === "" ? task.date : editedTask.date;
            editTask(task.id, newTitle, task.description, newDate);
            setEditedTask(null);
        }
    };

    return (
        <Styled.TaskItem $completed={task.done}>
            <Styled.CheckBoxContainer onClick={() => completeTask(task.id)} data-testid="complete-task" $completed={task.done}>
                {task.done && <CheckIcon />}
            </Styled.CheckBoxContainer>
            <Styled.TaskContent>
                <Styled.TaskInput
                    type="text"
                    value={editedTask?.id === task.id ? editedTask.title : task.title}
                    onChange={(e) => handleEditChange(task.id, e.target.value, "title")}
                    onBlur={() => handleSaveEdit(task)}
                    $completed={task.done}
                />
                {task.description && (
                    <Styled.TaskDescription>{task.description}</Styled.TaskDescription>
                )}
            </Styled.TaskContent>

            <Styled.TaskDate
                type="date"
                value={editedTask?.id === task.id ? editedTask.date || "" : task.date || ""}
                onChange={(e) => handleEditChange(task.id, e.target.value, "date")}
                onBlur={() => handleSaveEdit(task)}
            />
            <Styled.DeleteButton onClick={() => deleteTask(task.id)} data-testid="delete-task">
                <RemoveIcon />
            </Styled.DeleteButton>
        </Styled.TaskItem>
    );
};

export default TaskItem;
