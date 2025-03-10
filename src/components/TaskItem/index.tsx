import React from "react";
import { ReactComponent as Remove } from "../../assets/svg/x.svg";
import { ReactComponent as CheckIcon } from "../../assets/svg/check.svg";
import * as Styled from "./styles"

interface TaskItemProps {
    task: {
        id: number;
        title: string;
        date?: string;
        done: boolean;
    };
    completeTask: (id: number) => void;
    deleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, completeTask, deleteTask }) => {
    return (
        <Styled.TaskItem $completed={task.done}>
            <Styled.CheckBoxContainer
                onClick={() => completeTask(task.id)}
                $completed={task.done}
            >
                {task.done && <CheckIcon />}
            </Styled.CheckBoxContainer>

            <Styled.TaskInput
                type="text"
                value={task.title}
                readOnly
                $completed={task.done}
            />

            <Styled.TaskDate type="date" value={task.date || ""} readOnly />

            <Styled.DeleteButton onClick={() => deleteTask(task.id)}>
                <Remove />
            </Styled.DeleteButton>
        </Styled.TaskItem>
    );
};

export default TaskItem;
