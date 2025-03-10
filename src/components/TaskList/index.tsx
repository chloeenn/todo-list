import React from "react";
import { useTasks } from "../../context/TaskContext";
import * as Styled from "./styles";
import TaskItem from "../TaskItem";

const TaskList: React.FC = () => {
    const { tasks } = useTasks();
    return (
        <Styled.TaskList>
            {tasks.length === 0 ? (
                <Styled.EmptyMessage>No tasks to display</Styled.EmptyMessage>
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
