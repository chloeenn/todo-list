import React from "react";
import TaskItem from "../../components/TaskItem";
import * as Styled from "./styles";
import {MainContainer, TextContainer, TextHeading } from "../Home/styles";
import {TaskList} from "../../components/TaskList/styles"
import { useTasks } from "../../context/TaskContext";

const Completed: React.FC = () => {
    const { completedTasks } = useTasks();

    return (
        <MainContainer>
            <TextContainer>
                <TextHeading>
                    Completed Tasks ✔️
                </TextHeading>
            </TextContainer>
            {completedTasks.length > 0 ? (
                <TaskList>
                    {completedTasks.map((task) => (
                        <TaskItem key={task.id} task={task} />
                    ))}
                </TaskList>
            ) : (
                <Styled.NoTasksMessage>No completed tasks yet</Styled.NoTasksMessage>
            )}
        </MainContainer>
    );
};

export default Completed;
