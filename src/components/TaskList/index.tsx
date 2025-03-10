import React from "react";
import { useTasks } from "../../context/TaskContext";
import TaskItem from "../../components/TaskItem";
import * as Styled from "./styles";

const TaskList: React.FC = () => {
    const { tasks } = useTasks();

    return (
        <Styled.TaskList>
            {tasks.length === 0 ? (
                <h1>No tasks</h1>
            ) : (
                tasks.map((task) => (
                    <TaskItem
                        key={task.id} task={task} 
                    />
                ))
            )}
        </Styled.TaskList>
    );
};

export default TaskList;
